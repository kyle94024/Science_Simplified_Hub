import Button from "@/components/ui/Button";
import { LogoMark } from "./Logo";

// Closing call-to-action. `tone="navy"` is the full-bleed dark band used at the
// end of the home and about pages; `tone="tint"` is the lighter inline card.
export default function CtaBand({
  eyebrow,
  title,
  body,
  ctaLabel = "Partner With Us",
  ctaHref = "/partner",
  tone = "navy",
  id,
}) {
  if (tone === "tint") {
    return (
      <section id={id} className="shell pb-16 sm:pb-20">
        <div className="flex flex-col gap-6 rounded-3xl border border-violet-200 bg-violet-50 px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-navy-800 shadow-card sm:inline-flex">
              <LogoMark className="h-8 w-8" />
            </span>
            <div>
              {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
              <h2 className="font-display text-xl font-bold text-navy-800 sm:text-2xl">
                {title}
              </h2>
              {body ? (
                <p className="mt-2 max-w-2xl text-body">{body}</p>
              ) : null}
            </div>
          </div>
          <Button href={ctaHref} variant="violet" size="lg" className="shrink-0">
            {ctaLabel}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="relative overflow-hidden bg-navy-800">
      <div
        className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 text-white/[0.07] lg:block"
        aria-hidden="true"
      >
        <LogoMark className="h-72 w-72" accent="currentColor" />
      </div>
      <div className="shell relative flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-5">
          <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white sm:inline-flex">
            <LogoMark className="h-8 w-8" accent="#C2B2F8" />
          </span>
          <div>
            {eyebrow ? (
              <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-violet-300">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h2>
            {body ? (
              <p className="mt-3 max-w-2xl leading-relaxed text-navy-100">
                {body}
              </p>
            ) : null}
          </div>
        </div>
        <Button href={ctaHref} variant="white" size="lg" className="shrink-0">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
