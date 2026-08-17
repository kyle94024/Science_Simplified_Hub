import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The share card for every route. Next.js wires this into og:image and
// twitter:image automatically; keep it in sync with the mark in icon.js.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "linear-gradient(135deg, #0A1E42 0%, #0C2450 55%, #153B7C 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="88" height="88" viewBox="0 0 40 40" fill="none">
            <g stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round">
              <path d="M20 20 8.5 11.5M20 20l11.5-8.5M20 20 8.5 28.5M20 20l11.5 8.5" />
            </g>
            <circle cx="20" cy="20" r="4.6" fill="#FFFFFF" />
            <circle cx="8.5" cy="11.5" r="3.3" fill="#FFFFFF" />
            <circle cx="8.5" cy="28.5" r="3.3" fill="#FFFFFF" />
            <circle cx="31.5" cy="28.5" r="3.3" fill="#FFFFFF" />
            <circle cx="31.5" cy="11.5" r="3.3" fill="#C2B2F8" />
          </svg>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em" }}>
            {site.name}
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 40,
            lineHeight: 1.25,
            maxWidth: 900,
            color: "#E4ECFB",
          }}
        >
          {site.tagline}
        </div>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            color: "#93AEDF",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              background: "#C2B2F8",
            }}
          />
          Expert-reviewed, plain-language research summaries
        </div>
      </div>
    ),
    size
  );
}
