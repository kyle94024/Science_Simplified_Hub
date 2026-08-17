// The Science Simplified mark: a hub connected to the communities it serves.
export function LogoMark({ className = "h-10 w-10", accent = "#5B2BC9" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="presentation"
      aria-hidden="true"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M20 20 8.5 11.5M20 20l11.5-8.5M20 20 8.5 28.5M20 20l11.5 8.5" />
      </g>
      <circle cx="20" cy="20" r="4.6" fill="currentColor" />
      <circle cx="8.5" cy="11.5" r="3.3" fill="currentColor" />
      <circle cx="8.5" cy="28.5" r="3.3" fill="currentColor" />
      <circle cx="31.5" cy="28.5" r="3.3" fill="currentColor" />
      <circle cx="31.5" cy="11.5" r="3.3" fill={accent} />
    </svg>
  );
}

export default function Logo({ variant = "dark", withTagline = true }) {
  const isDark = variant === "dark";

  return (
    <span className="flex items-center gap-3">
      <LogoMark
        className={`h-9 w-9 shrink-0 ${isDark ? "text-navy-800" : "text-white"}`}
        accent={isDark ? "#5B2BC9" : "#C2B2F8"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.3rem] font-extrabold tracking-[-0.02em] ${
            isDark ? "text-navy-800" : "text-white"
          }`}
        >
          Science Simplified
        </span>
        {withTagline ? (
          <span
            className={`mt-1 hidden text-[0.68rem] font-medium sm:block ${
              isDark ? "text-muted" : "text-navy-200"
            }`}
          >
            Making rare disease science accessible to all.
          </span>
        ) : null}
      </span>
    </span>
  );
}
