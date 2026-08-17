import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import NetworkRow from "@/components/home/NetworkRow";
import CtaBand from "@/components/site/CtaBand";

// Only the canonical is set here; title and description come from the layout's
// defaults, which are built from src/data/site.js — one source of truth.
export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <NetworkRow />
      <CtaBand
        tone="tint"
        title="Together, we can make rare disease science accessible to all."
        body="Bring expert-reviewed, plain-language research summaries to the people you serve."
      />
    </>
  );
}
