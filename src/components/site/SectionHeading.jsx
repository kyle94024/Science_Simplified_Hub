export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  rule = false,
  className = "",
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      {rule ? (
        <div className="flex items-center gap-5">
          <span className="hidden h-px flex-1 bg-line sm:block" />
          <h2 className="display-2 text-center text-[1.6rem] sm:shrink-0 sm:text-[2rem]">
            {title}
          </h2>
          <span className="hidden h-px flex-1 bg-line sm:block" />
        </div>
      ) : (
        <h2 className="display-2">{title}</h2>
      )}
      {body ? (
        <p className={`lede mt-4 ${centered ? "mx-auto" : ""}`}>{body}</p>
      ) : null}
    </div>
  );
}
