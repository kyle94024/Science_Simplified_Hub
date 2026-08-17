import { ArrowRight, FileText, Globe, Microscope, Users } from "lucide-react";

import SectionHeading from "@/components/site/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    icon: Microscope,
    tone: "violet",
    title: "Contribute",
    body: "Scientists and physicians share their published research with rare disease communities.",
  },
  {
    icon: FileText,
    tone: "mint",
    title: "Simplify",
    body: "We transform complex publications into clear, plain-language summaries for patients and families.",
  },
  {
    icon: Users,
    tone: "sky",
    title: "Review & Edit",
    body: "Scientists and physicians review and edit every summary for accuracy before publication.",
  },
  {
    icon: Globe,
    tone: "amber",
    title: "Share",
    body: "Summaries are published as a standalone resource or embedded in your organization's website to reach more people.",
  },
];

export default function HowItWorks() {
  return (
    <section className="shell py-16 sm:py-20">
      <SectionHeading title="How Science Simplified Works" rule />

      <ol className="mt-12 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <Reveal delay={index * 90} className="text-center">
              <div className="flex justify-center">
                <IconBadge icon={step.icon} tone={step.tone} size="lg" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy-800">
                {index + 1}. {step.title}
              </h3>
              <p className="mx-auto mt-2.5 max-w-[16rem] text-[0.95rem] leading-relaxed text-body">
                {step.body}
              </p>
            </Reveal>

            {index < steps.length - 1 ? (
              <ArrowRight
                className="absolute -right-2 top-8 hidden h-5 w-5 text-navy-300 lg:block"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
