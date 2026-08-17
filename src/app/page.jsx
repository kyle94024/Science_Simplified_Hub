import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import NetworkRow from "@/components/home/NetworkRow";
import CtaBand from "@/components/site/CtaBand";

export const metadata = {
  title: "Science Simplified — Making rare disease science accessible to all.",
  description:
    "Science Simplified helps scientists and rare disease organizations turn published research into expert-reviewed, plain-language summaries for patients and families.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <NetworkRow />
      <div className="pt-16 sm:pt-20">
        <CtaBand
          tone="tint"
          title="Together, we can make rare disease science accessible to all."
          body="Bring expert-reviewed, plain-language research summaries to the people you serve."
        />
      </div>
    </>
  );
}
