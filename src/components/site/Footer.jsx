import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

import Logo from "./Logo";
import { footerNav, site, socials } from "@/data/site";

const icons = {
  linkedin: Linkedin,
  mail: Mail,
  x: XIcon,
};

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.25 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.2h1.67L7.6 4.71H5.81l10.66 14.49Z" />
    </svg>
  );
}

export default function Footer() {
  const activeSocials = socials.filter((social) => social.href);

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" aria-label="Science Simplified home">
              <Logo variant="light" withTagline={false} />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
              {site.tagline}
            </p>
            {activeSocials.length ? (
              <div className="mt-6 flex items-center gap-3">
                {activeSocials.map((social) => {
                  const Icon = icons[social.icon] ?? Mail;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/10"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          {footerNav.map((column) => (
            <div key={column.title}>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-200 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-navy-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-white"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
