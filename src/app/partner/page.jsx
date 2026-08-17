import Image from "next/image";
import {
  Check,
  Clock,
  GraduationCap,
  Globe,
  Microscope,
  ShieldCheck,
  Users,
} from "lucide-react";

import Button from "@/components/ui/Button";
import ContactForm from "@/components/partner/ContactForm";
import CtaBand from "@/components/site/CtaBand";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata = {
  title: "Partner With Us",
  description:
    "Science Simplified partners with rare disease organizations and scientists to transform published research into clear, expert-reviewed summaries for patients and families.",
  alternates: { canonical: "/partner" },
};

const audiences = [
  {
    icon: Users,
    tone: "violet",
    accent: "text-violet-600",
    surface: "bg-violet-50 border-violet-200",
    title: "For Rare Disease Organizations",
    intro:
      "Bring trusted, easy-to-understand research to your community and support the people you serve.",
    points: [
      {
        title: "Bring Science Simplified to your community",
        body: "Give patients and families clear, expert-reviewed research summaries they can understand.",
      },
      {
        title: "Choose what works best for you",
        body: "Use our summaries as a standalone resource or embed them directly within your existing website.",
      },
      {
        title: "Save time and resources",
        body: "We handle the science, so you can focus on what matters most — supporting your community.",
      },
    ],
  },
  {
    icon: Microscope,
    tone: "mint",
    accent: "text-mint-500",
    surface: "bg-mint-100/50 border-mint-100",
    title: "For Scientists & Physicians",
    intro:
      "Contribute your expertise and help turn published research into knowledge that makes a difference.",
    points: [
      {
        title: "Contribute published research",
        body: "Share your work with a wider audience and increase the real-world impact of your research.",
      },
      {
        title: "Review and edit summaries",
        body: "Ensure accuracy and clarity by reviewing plain-language summaries created by our team.",
      },
      {
        title: "Help patients and families",
        body: "Make complex science understandable so patients and families can make informed decisions.",
      },
    ],
  },
];

const reasons = [
  {
    icon: Users,
    tone: "violet",
    title: "Reach More People",
    body: "Make your resources accessible to more patients and families.",
  },
  {
    icon: ShieldCheck,
    tone: "mint",
    title: "Trusted & Accurate",
    body: "All summaries are scientist-curated and expert-reviewed.",
  },
  {
    icon: Clock,
    tone: "amber",
    title: "Save Time",
    body: "We do the heavy lifting, so you can focus on what matters most.",
  },
  {
    icon: Globe,
    tone: "sky",
    title: "Make an Impact",
    body: "Empower informed decisions and improve lives through knowledge.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-navy-50 to-white">
        <div className="shell grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <IconBadge icon={Users} tone="violet" size="sm" />
              <p className="eyebrow">Partner With Us</p>
            </div>
            <h1 className="display-1 mt-5 max-w-xl">
              Together, we can make rare disease science accessible to all.
            </h1>
            <p className="lede mt-5 max-w-xl">
              Science Simplified partners with rare disease organizations and
              scientists to transform published research into clear,
              expert-reviewed summaries for patients and families.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact" size="lg">
                Start the Conversation
              </Button>
              <Button href="/communities" variant="outline" size="lg">
                Explore Our Communities
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/assets/photos/hands-together.jpg"
              alt="A group of people placing their hands together"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="shell py-14 sm:py-20">
        <ul className="grid gap-6 lg:grid-cols-2">
          {audiences.map((audience, index) => (
            <li key={audience.title}>
              <Reveal delay={index * 90} className="h-full">
                <div
                  className={`h-full rounded-3xl border p-8 sm:p-10 ${audience.surface}`}
                >
                  <div className="flex items-center gap-4">
                    <IconBadge icon={audience.icon} tone={audience.tone} />
                    <h2 className="heading-3">{audience.title}</h2>
                  </div>

                  <p className="mt-5 leading-relaxed text-body">
                    {audience.intro}
                  </p>

                  <ul className="mt-7 space-y-5">
                    {audience.points.map((point) => (
                      <li key={point.title} className="flex gap-3.5">
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ${audience.accent}`}
                        >
                          <Check
                            className="h-3.5 w-3.5"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                        </span>
                        <div>
                          <p className="font-display font-semibold text-navy-800">
                            {point.title}
                          </p>
                          <p className="mt-1 text-[0.95rem] leading-relaxed text-body">
                            {point.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="get-involved"
        className="border-y border-line bg-canvas py-14 sm:py-16"
      >
        <div className="shell grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <IconBadge icon={GraduationCap} tone="amber" size="lg" />
          <div>
            <h2 className="heading-3">For Students & Volunteers</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-body">
              We&apos;re looking for help. Medical students and volunteers join
              us as Medical Outreach Directors, gaining hands-on experience in
              medical communication and rare disease research while helping
              build the community sites that translate complex discoveries into
              clear, patient-friendly information.
            </p>
          </div>
          <Button href="#contact" variant="outline" size="lg" className="shrink-0">
            Get in Touch
          </Button>
        </div>
      </section>

      <section id="contact" className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <h2 className="display-2 text-[1.9rem] sm:text-[2.1rem]">
              Start the Conversation
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Whether you represent an organization, are a researcher, or want
              to volunteer, we&apos;d love to hear from you. You can also email
              us directly at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-navy-800 underline decoration-navy-300 underline-offset-4 hover:text-violet-600"
              >
                {site.email}
              </a>
              .
            </p>
            <ContactForm />
          </div>

          <div className="lg:border-l lg:border-line lg:pl-16">
            <h2 className="heading-3">Why Partner With Science Simplified?</h2>
            <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <li key={reason.title}>
                  <Reveal delay={index * 70} className="text-center sm:text-left">
                    <div className="flex justify-center sm:justify-start">
                      <IconBadge icon={reason.icon} tone={reason.tone} />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-navy-800">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-body">
                      {reason.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to make an impact?"
        body="Partner with us to bring trusted, understandable science to more people."
        ctaLabel="Get Started Today"
        ctaHref="#contact"
      />
    </>
  );
}
