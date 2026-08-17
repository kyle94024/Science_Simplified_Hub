import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { site } from "@/data/site";
import { communities } from "@/data/communities";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// No `weight` array: Plus Jakarta Sans is a variable font, so one file covers
// the 600/700/800 range the site uses instead of three static instances.
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  // og:title / og:description are left unset so each page's resolved metadata
  // flows through instead of every share card carrying the homepage copy.
  openGraph: {
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#0C2450",
};

// Organization schema tying the hub to the six community sites it fronts.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  logo: `${site.url}/icon`,
  subOrganization: communities.map((community) => ({
    "@type": "Organization",
    name: community.name,
    url: community.href,
    knowsAbout: community.disease,
  })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* z-[60] keeps the focused link above the z-50 sticky header. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
