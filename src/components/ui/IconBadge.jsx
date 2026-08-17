const tones = {
  violet: "bg-violet-100 text-violet-600",
  mint: "bg-mint-100 text-mint-500",
  amber: "bg-amber-100 text-amber-500",
  sky: "bg-navy-100 text-navy-600",
};

const sizes = {
  sm: "h-11 w-11",
  md: "h-14 w-14",
  lg: "h-16 w-16",
};

export default function IconBadge({
  icon: Icon,
  tone = "violet",
  size = "md",
  className = "",
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${
        tones[tone] ?? tones.violet
      } ${sizes[size] ?? sizes.md} ${className}`}
    >
      <Icon
        className={size === "sm" ? "h-5 w-5" : "h-7 w-7"}
        strokeWidth={1.7}
        aria-hidden="true"
      />
    </span>
  );
}
