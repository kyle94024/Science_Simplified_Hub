import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0C2450",
          borderRadius: 7,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
          <g stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
            <path d="M20 20 8.5 11.5M20 20l11.5-8.5M20 20 8.5 28.5M20 20l11.5 8.5" />
          </g>
          <circle cx="20" cy="20" r="5" fill="#FFFFFF" />
          <circle cx="8.5" cy="11.5" r="3.6" fill="#FFFFFF" />
          <circle cx="8.5" cy="28.5" r="3.6" fill="#FFFFFF" />
          <circle cx="31.5" cy="28.5" r="3.6" fill="#FFFFFF" />
          <circle cx="31.5" cy="11.5" r="3.6" fill="#C2B2F8" />
        </svg>
      </div>
    ),
    size
  );
}
