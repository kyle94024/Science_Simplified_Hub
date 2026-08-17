import { ArrowRight, BookOpen, Globe, Heart, MessageSquare, ShieldCheck, Target } from "lucide-react";

import CommunityLogo from "@/components/site/CommunityLogo";
import CtaBand from "@/components/site/CtaBand";
import SectionHeading from "@/components/site/SectionHeading";
import IconBadge from "@/components/ui/IconBadge";
import Reveal from "@/components/ui/Reveal";
import { communities } from "@/data/communities";

export const metadata = {
  title: "Our Communities",
  description:
    "Science Simplified communities are disease-specific sites providing expert-reviewed research summaries for patients and families.",
  alternates: { canonical: "/communities" },
};

const promises = [
  { icon: Target, tone: "violet", label: "Focused on rare diseases" },
  { icon: ShieldCheck, tone: "mint", label: "Expert-reviewed for accuracy" },
  { icon: MessageSquare, tone: "amber", label: "Written in clear, plain language" },
];

const standards = [
  {
    icon: ShieldCheck,
    tone: "violet",
    title: "Expert Reviewed",
    body: "Reviewed and edited by scientists and physicians.",
  },
  {
    icon: BookOpen,
    tone: "mint",
    title: "Plain Language",
    body: "Complex research translated into clear, understandable summaries.",
  },
  {
    icon: Globe,
    tone: "sky",
    title: "Freely Accessible",
    body: "Resources are free to read and share within your community.",
  },
  {
    icon: Heart,
    tone: "amber",
    title: "Patient Focused",
    body: "Designed to empower patients and families with the knowledge they deserve.",
  },
];

export default function CommunitiesPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-navy-50 to-white">
        <div className="shell section">
          <h1 className="display-1">Our Communities</h1>
          <p className="lede mt-5 max-w-2xl">
            Science Simplified communities are disease-specific sites providing
            expert-reviewed research summaries for patients and families.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-line">
            {promises.map((promise) => (
              <li
                key={promise.label}
                className="flex items-center gap-4 sm:px-6 sm:first:pl-0"
              >
                <IconBadge icon={promise.icon} tone={promise.tone} size="sm" />
                <span className="font-display font-semibold leading-snug text-navy-800">
                  {promise.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell section-tight">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community, index) => (
            <li key={community.key}>
              <Reveal delay={(index % 3) * 80} className="h-full">
                <a
                  href={community.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lift"
                  style={{ "--accent": community.accent }}
                >
                  <CommunityLogo
                    community={community}
                    className="h-14 w-48"
                    align="left"
                    sizes="220px"
                  />

                  <p className="mt-6 flex-1 leading-relaxed text-body">
                    {community.blurb}
                  </p>

                  <span
                    className="link-underline mt-7 text-[0.95rem]"
                    style={{ color: community.accentDark }}
                  >
                    Visit Community
                    <span className="sr-only"> (opens in new tab)</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        tone="tint"
        title="Don't see your disease community yet?"
        body="We're always working to expand. Partner with us to bring Science Simplified to your community."
      />

      <section className="section border-t border-line bg-canvas">
        <div className="shell">
          <SectionHeading title="Every community site is:" rule />

          <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((standard, index) => (
              <li key={standard.title}>
                <Reveal delay={index * 80} className="text-center">
                  <div className="flex justify-center">
                    <IconBadge icon={standard.icon} tone={standard.tone} size="lg" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-800">
                    {standard.title}
                  </h3>
                  <p className="mx-auto mt-2.5 max-w-[16rem] text-[0.95rem] leading-relaxed text-body">
                    {standard.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
