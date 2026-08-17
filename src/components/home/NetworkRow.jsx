import Link from "next/link";

import CommunityLogo from "@/components/site/CommunityLogo";
import Reveal from "@/components/ui/Reveal";
import { communities } from "@/data/communities";

export default function NetworkRow() {
  return (
    <section className="border-y border-line bg-canvas py-14 sm:py-16">
      <div className="shell">
        <h2 className="text-center font-display text-xl font-bold text-navy-800 sm:text-2xl">
          A growing network of rare disease communities.
        </h2>

        <Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 [&>li:nth-child(2n+1)]:border-l-0 sm:[&>li]:border-l sm:[&>li:nth-child(3n+1)]:border-l-0 lg:[&>li]:border-l lg:[&>li:nth-child(6n+1)]:border-l-0">
            {communities.map((community) => (
              <li
                key={community.key}
                className="flex items-center justify-center border-l border-line px-4"
              >
                <a
                  href={community.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:-translate-y-0.5"
                  aria-label={`Visit ${community.name}`}
                >
                  <CommunityLogo
                    community={community}
                    className="h-14 w-36 sm:w-40"
                    sizes="170px"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-10 text-center">
          <Link
            href="/communities"
            className="link-underline text-navy-800 hover:text-navy-600"
          >
            See every community
          </Link>
        </p>
      </div>
    </section>
  );
}
