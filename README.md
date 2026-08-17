# Science Simplified Hub

The umbrella site for [scisimplified.org](https://www.scisimplified.org) — the
network-level marketing site that introduces Science Simplified and routes
people to the disease-specific community sites (NF Simplified, HS Simplified,
Scleroderma Simplified, and the rest).

The community sites themselves live in the
[Science-Simplified](https://github.com/kyle94024/Science-Simplified) platform
repo. This repo is deliberately separate: it has no database, no auth, and no
tenant logic — it is a static marketing site with one form endpoint.

## Stack

- Next.js 16 (App Router, Turbopack) · React 19
- Tailwind CSS 3
- `lucide-react` for icons, `nodemailer` for the partner form
- Deployed on Vercel

> **Why Next 16 and not 15.2.6 like the platform repo?** Next 15.2.6's webpack
> build hits a scope-hoisting bug on this codebase
> (`ConcatenationScope.matchModuleReference` → `Unexpected end of JSON input`),
> which fails the production build outright. Next 16 builds with Turbopack and
> is unaffected.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # eslint (flat config)
```

## Environment

Copy `.env.example` to `.env.local` and fill it in. Only the partner form needs
configuration:

| Variable | Purpose |
| --- | --- |
| `EMAIL_USER` | Gmail account that sends partner enquiries |
| `EMAIL_PASS` | Google **App Password** for that account (not the login password) |
| `CONTACT_TO` | Where enquiries are delivered. Defaults to `EMAIL_USER` |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, used for metadata and `sitemap.xml` |

Without `EMAIL_USER` / `EMAIL_PASS` the form returns a clear "email us directly"
message rather than failing silently, so the site is safe to deploy before the
mailbox is wired up.

## Content lives in `src/data`

Nothing about the network is hard-coded into a page. To change what the site
says about the network, edit these files:

| File | Contents |
| --- | --- |
| `src/data/communities.js` | The community sites: name, disease, blurb, URL, logo, brand accent. Drives the home logo row, the communities grid, and the advisor badges. |
| `src/data/advisors.js` | Faculty advisors and partner-org leads, plus the founder card copy. |
| `src/data/network.js` | Institutions and partner organizations named on the About page. |
| `src/data/site.js` | Nav, footer columns, social links, contact email. |

### Adding a community

Add an entry to `communities.js` once its branded domain is live. If its logo
lockup is white-on-dark (as RUNX1's is), set `logoOnDark: true` and it will be
rendered on a dark chip. Drop the lockup in `public/assets/communities/`.

## Things to confirm before this replaces the live site

These came out of the redesign and need a human decision:

1. **Founder quote** (`src/data/advisors.js`, `founder.quote`) — written for the
   design mockups, attributed to Kyle. Approve or replace with your own words.
2. **Reviewer affiliations** (`src/data/network.js`) — the design mockups showed
   Harvard / Johns Hopkins / Stanford / Mayo / UCSF / Duke logos. Reproducing
   institution logos implies endorsement and normally needs written permission,
   so this ships as plain text naming only institutions tied to a named advisor.
   Confirm each entry, and do not add an institution without an advisor there.
3. **Social links** (`src/data/site.js`, `socials`) — LinkedIn and X have no URL
   yet, so those icons are hidden. Add hrefs to switch them on.
4. **Legal pages** — `/terms` and `/privacy` carry the text from the current
   site verbatim (one typo fixed: "provied" → "provided").

## Assets

Community logos, advisor headshots, and the hero photograph were taken from the
platform repo's `public/assets` so the hub matches what each community site
already publishes. The home hero and the About story illustration are inline SVG
(`src/components/art/`) rather than stock photography.
