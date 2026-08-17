export const site = {
  name: "Science Simplified",
  tagline: "Making rare disease science accessible to all.",
  description:
    "Science Simplified helps scientists and rare disease organizations turn published research into expert-reviewed, plain-language summaries for patients and families.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.scisimplified.org",
  email: "info@scisimplified.org",
  mailingAddress: "PO Box 20423, Stanford, CA 94309",
};

export const nav = [
  { label: "Our Communities", href: "/communities" },
  { label: "About", href: "/about" },
];

export const footerNav = [
  {
    title: "Explore",
    links: [
      { label: "Our Communities", href: "/communities" },
      { label: "Partner With Us", href: "/partner" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Get Involved", href: "/partner#get-involved" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

// Social profiles: add a `href` to switch a channel on. Channels without an
// href are hidden rather than linking somewhere that does not exist yet.
export const socials = [
  { label: "LinkedIn", icon: "linkedin", href: "" },
  { label: "X", icon: "x", href: "" },
  { label: "Email", icon: "mail", href: `mailto:${site.email}` },
];
