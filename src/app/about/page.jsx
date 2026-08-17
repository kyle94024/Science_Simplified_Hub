import Image from "next/image";
import { ShieldCheck } from "lucide-react";

import CtaBand from "@/components/site/CtaBand";
import SectionHeading from "@/components/site/SectionHeading";
import StoryArt from "@/components/art/StoryArt";
import Reveal from "@/components/ui/Reveal";
import { advisors, founder } from "@/data/advisors";
import { communityByKey } from "@/data/communities";
import { institutions, partnerOrgs } from "@/data/network";

export const metadata = {
  title: "About",
  description:
    "Science Simplified turns published rare disease research into plain-language summaries that scientists and physicians review for accuracy before publication.",
  alternates: { canonical: "/about" },
};

const story = [
  "In 2022, Kyle's grandmother was diagnosed with pulmonary adenocarcinoma — lung cancer. She could not understand her own diagnosis, and that confusion delayed her treatment.",
  "A conversation with a family member living with neurofibromatosis made clear this was not a one-off. Patients across rare disease communities struggle to keep up with the research that shapes their care, because research is hard to read without a medical background.",
  "That set him on a path to make scientific research accessible — especially for smaller communities, where clear and reliable information is hardest to find.",
  "Today, Science Simplified partners with scientists and rare disease organizations to transform published research into plain-language summaries that are expert-reviewed for accuracy.",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-navy-50 to-white">
        <div className="shell grid items-start gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <h1 className="display-1">About Science Simplified</h1>
            <p className="lede mt-5 max-w-xl">
              We believe everyone impacted by rare disease should have access to
              science that is understandable, accurate, and trustworthy.
            </p>

            <div className="mt-9 flex max-w-xl items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-card">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <ShieldCheck
                  className="h-6 w-6"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>
              <div className="space-y-2 text-[0.95rem] leading-relaxed">
                <p className="text-navy-800">
                  Every summary is reviewed and edited by scientists and
                  physicians for accuracy before publication.
                </p>
                <p className="text-muted">
                  Supported by scientists and physicians from leading academic
                  and medical institutions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0 sm:flex-row sm:items-stretch">
            <div className="relative h-72 w-full shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-56 lg:w-64">
              <Image
                src={founder.photo}
                alt={`${founder.name}, ${founder.role} of Science Simplified`}
                fill
                sizes="(min-width: 640px) 256px, 100vw"
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="card -mt-6 flex-1 p-7 sm:-ml-8 sm:mt-8 sm:pl-14">
              <h2 className="font-display text-2xl font-bold text-navy-800">
                {founder.name}
              </h2>
              <p className="mt-1 font-display font-semibold text-violet-600">
                {founder.role}
              </p>
              <span
                className="mt-4 block h-1 w-12 rounded-full bg-amber-500/70"
                aria-hidden="true"
              />
              <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-body">
                {founder.quote.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-14 sm:py-20">
        <div className="overflow-hidden rounded-3xl border border-line bg-canvas">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="display-2 text-[1.9rem] sm:text-[2.2rem]">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-body">
                {story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <StoryArt className="w-full max-w-md justify-self-center" />
          </div>
        </div>
      </section>

      <section className="shell pb-16 sm:pb-20">
        <SectionHeading title="Advisors Across Our Communities" rule />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((advisor, index) => {
            const community = communityByKey[advisor.communityKey];
            return (
              <li key={advisor.name}>
                <Reveal delay={(index % 3) * 80} className="h-full">
                  <div className="flex h-full flex-col items-center rounded-2xl border border-line bg-surface p-6 text-center shadow-card">
                    <span
                      className="rounded-full px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.1em]"
                      style={{
                        color: community.accentDark,
                        backgroundColor: `${community.accent}1A`,
                      }}
                    >
                      {community.name}
                    </span>

                    <span className="relative mt-5 h-24 w-24 overflow-hidden rounded-full ring-4 ring-navy-50">
                      <Image
                        src={advisor.photo}
                        alt={advisor.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </span>

                    <h3 className="mt-4 font-display text-base font-bold text-navy-800">
                      {advisor.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{advisor.role}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="border-y border-line bg-canvas py-16 sm:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="display-2 text-[1.9rem] sm:text-[2.1rem]">
              Our Scientific Network
            </h2>
            <p className="mt-5 leading-relaxed text-body">
              Science Simplified is supported by researchers, clinicians, and
              rare disease organizations committed to scientific rigor and
              community impact. Reviewers hold appointments at academic medical
              centers, and each community site is built alongside the
              organization that already serves it.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-muted">
                Reviewer affiliations
              </h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {institutions.map((institution) => (
                  <li
                    key={institution.name}
                    className="rounded-xl border border-line bg-surface px-4 py-3 shadow-card"
                  >
                    <span className="font-display font-semibold text-navy-800">
                      {institution.name}
                    </span>
                    {institution.note ? (
                      <span className="ml-2 text-sm text-muted">
                        {institution.note}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-muted">
                Partner organizations
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {partnerOrgs.map((org) => (
                  <li
                    key={org.name}
                    className="rounded-xl border border-line bg-surface px-4 py-3 shadow-card"
                  >
                    <a
                      href={org.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-navy-800 hover:text-violet-600"
                    >
                      {org.name}
                    </a>
                    <p className="mt-0.5 text-sm text-muted">{org.community}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Get involved"
        title="Bring Science Simplified to your community"
        body="We partner with patient advocacy groups and rare disease organizations to make trusted, plain-language science accessible to everyone."
      />
    </>
  );
}
