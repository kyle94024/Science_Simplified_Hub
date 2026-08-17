"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Lock } from "lucide-react";

const initialValues = {
  name: "",
  organization: "",
  email: "",
  message: "",
  website: "", // honeypot — real people leave this empty
};

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/80 transition-colors focus:border-navy-400";

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (field) => (event) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (status.state === "sending") return;

    setStatus({ state: "sending", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setValues(initialValues);
      setStatus({
        state: "sent",
        message: "Thank you — your message is on its way. We'll be in touch soon.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error.message ||
          "We couldn't send that. Please email info@scisimplified.org directly.",
      });
    }
  }

  const sending = status.state === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={update("name")}
            placeholder="Your Name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="organization" className="sr-only">
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            value={values.organization}
            onChange={update("organization")}
            placeholder="Organization"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={update("email")}
          placeholder="Your Email"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={update("message")}
          placeholder="How can we help?"
          className={`${inputClasses} resize-y`}
        />
      </div>

      {/* honeypot */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={update("website")}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-800 px-6 py-3.5 font-display font-semibold text-white shadow-card transition-all duration-200 hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-[1.25rem] text-sm ${
          status.state === "error" ? "text-red-600" : "text-mint-500"
        }`}
      >
        {status.message}
      </p>

      <p className="flex items-center gap-2 text-xs text-muted">
        <Lock className="h-3.5 w-3.5" aria-hidden="true" />
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}
