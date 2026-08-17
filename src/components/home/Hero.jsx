import Button from "@/components/ui/Button";
import NetworkArt from "@/components/art/NetworkArt";
import TrustCard from "@/components/site/TrustCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-navy-50 to-transparent"
        aria-hidden="true"
      />
      <div className="shell section relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
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

          <TrustCard className="mt-10" />
        </div>

        {/* box-shadow, not a drop-shadow filter: the SVG's outer element is an
            opaque 30px-radius rect, so this renders identically without
            rasterizing the artwork through a second filter pass. */}
        <div className="relative lg:pl-4">
          <NetworkArt className="w-full rounded-[30px] shadow-[0_24px_48px_rgba(15,28,51,0.10)]" />
        </div>
      </div>
    </section>
  );
}
