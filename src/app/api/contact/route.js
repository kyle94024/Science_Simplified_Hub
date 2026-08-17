import nodemailer from "nodemailer";

import { site } from "@/data/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_LENGTHS = {
  name: 120,
  organization: 160,
  email: 200,
  message: 4000,
};

// Small in-memory throttle. Serverless instances are short-lived, so this is a
// speed bump against repeat submissions rather than a durable rate limiter.
const recent = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isThrottled(key) {
  const now = Date.now();
  const hits = (recent.get(key) || []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);

  if (recent.size > 500) {
    for (const [entry, times] of recent) {
      if (!times.some((time) => now - time < WINDOW_MS)) recent.delete(entry);
    }
  }

  return hits.length > MAX_PER_WINDOW;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(payload.name || "").trim();
  const organization = String(payload.organization || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();
  const honeypot = String(payload.website || "").trim();

  // Bots fill every field, including the hidden one. Accept and drop silently.
  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please add your name, email, and a message." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return Response.json(
      { error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    const value = { name, organization, email, message }[field] || "";
    if (value.length > limit) {
      return Response.json(
        { error: `Your ${field} is longer than we can accept.` },
        { status: 400 }
      );
    }
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isThrottled(ip)) {
    return Response.json(
      { error: "Too many messages just now. Please try again in a minute." },
      { status: 429 }
    );
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.error("Contact form: EMAIL_USER / EMAIL_PASS are not configured.");
    return Response.json(
      {
        error: `Our form is temporarily unavailable. Please email ${site.email} directly.`,
      },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  const rows = [
    ["Name", name],
    ["Organization", organization || "—"],
    ["Email", email],
  ];

  try {
    await transporter.sendMail({
      from: `"Science Simplified" <${user}>`,
      to: process.env.CONTACT_TO || user,
      replyTo: `${name} <${email}>`,
      subject: `Partner enquiry — ${organization || name}`,
      text: `${rows.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\n${message}`,
      html: `
        <div style="font-family: -apple-system, Segoe UI, Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #0F1C33;">
          <h1 style="font-size: 18px; margin: 0 0 16px;">New partner enquiry</h1>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${rows
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding: 6px 12px 6px 0; color: #6B7793; white-space: nowrap;">${label}</td>
                <td style="padding: 6px 0;">${escapeHtml(value)}</td>
              </tr>`
              )
              .join("")}
          </table>
          <p style="margin: 20px 0 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(
            message
          )}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Contact form: failed to send", error);
    return Response.json(
      {
        error: `We couldn't send that. Please email ${site.email} directly.`,
      },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
