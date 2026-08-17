import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-card hover:shadow-lift",
  outline:
    "border border-navy-200 bg-white text-navy-800 hover:border-navy-400 hover:bg-navy-50",
  violet: "bg-violet-600 text-white hover:bg-violet-700 shadow-card",
  ghostLight:
    "border border-white/25 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
  white: "bg-white text-navy-800 hover:bg-navy-50 shadow-card",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-[0.95rem]",
  lg: "px-6 py-3.5 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  ...props
}) {
  const classes = [
    "group inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold transition-all duration-200",
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ].join(" ");

  const content = (
    <>
      {children}
      {arrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (!href) {
    return (
      <button className={classes} {...props}>
        {content}
      </button>
    );
  }

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
