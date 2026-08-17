import { ShieldCheck } from "lucide-react";

import Button from "@/components/ui/Button";
import NetworkArt from "@/components/art/NetworkArt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-navy-50 to-transparent"
        aria-hidden="true"
      />
      <div className="shell relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="animate-fade-up">
          <h1 className="display-1 max-w-2xl">
            Making rare disease science easier to understand.
          </h1>
          <p className="lede mt-6 max-w-xl">
            Science Simplified helps scientists and rare disease organizations
            turn published research into expert-reviewed, plain-language
            summaries for patients and families.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/communities" size="lg">
              Explore Our Communities
            </Button>
            <Button href="/partner" variant="outline" size="lg">
              Partner With Us
            </Button>
          </div>

          <div className="mt-10 flex max-w-xl items-start gap-4 rounded-2xl border border-line bg-white/70 p-5 backdrop-blur-sm">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div>
              <p className="font-display font-semibold leading-snug text-navy-800">
                Every summary is reviewed and edited by scientists and
                physicians for accuracy before publication.
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                Supported by scientists and physicians from leading academic and
                medical institutions.
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <NetworkArt className="w-full drop-shadow-[0_24px_48px_rgba(15,28,51,0.10)]" />
        </div>
      </div>
    </section>
  );
}
