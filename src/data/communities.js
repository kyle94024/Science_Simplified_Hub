// The disease-specific sites in the Science Simplified network.
//
// `accent` mirrors each tenant's primary theme colour in the platform repo
// (Science-Simplified/src/lib/sites.js) so the hub stays visually in sync with
// the site it links to. Add a community here once its branded domain is live —
// the home logo row, the communities grid, and the advisor badges all read
// from this list.
export const communities = [
  {
    key: "NF",
    name: "NF Simplified",
    disease: "Neurofibromatosis",
    blurb: "Neurofibromatosis research explained in plain language.",
    href: "https://www.nfsimplified.com",
    // KNOWN LIMITATION: this lockup is only 196×53 — the largest export that
    // exists anywhere in the platform repo — so it renders slightly soft on
    // retina displays. Replace with a ~450px-wide export when one is made.
    logo: "/assets/communities/nf.png",
    accent: "#4CB19F",
    accentDark: "#2F7C6D",
  },
  {
    key: "HS",
    name: "HS Simplified",
    disease: "Hidradenitis Suppurativa",
    blurb: "Hidradenitis suppurativa research explained simply.",
    href: "https://www.hssimplified.org",
    logo: "/assets/communities/hs.png",
    accent: "#7B2CBF",
    accentDark: "#5A189A",
  },
  {
    key: "Scleroderma",
    name: "Scleroderma Simplified",
    disease: "Scleroderma",
    blurb:
      "Scleroderma research made clear and accessible, in partnership with the Scleroderma Research Foundation.",
    href: "https://www.sclerodermasimplified.org",
    logo: "/assets/communities/scleroderma.png",
    accent: "#004990",
    accentDark: "#003468",
  },
  {
    key: "Myositis",
    name: "Myositis Simplified",
    disease: "Myositis",
    blurb:
      "Myositis research summaries for patients and caregivers, in partnership with The Myositis Association.",
    href: "https://www.myositissimplified.org",
    logo: "/assets/communities/myositis.png",
    accent: "#191548",
    accentDark: "#0F0D2E",
  },
  {
    key: "EB",
    name: "EB Simplified",
    disease: "Epidermolysis Bullosa",
    blurb: "Epidermolysis bullosa research in plain language.",
    href: "https://www.ebsimplified.org",
    logo: "/assets/communities/eb.png",
    accent: "#ED1E87",
    accentDark: "#A8145E",
  },
  {
    key: "RUNX1",
    name: "RUNX1 Simplified",
    disease: "RUNX1 Familial Platelet Disorder",
    blurb: "RUNX1-FPD research summaries for patients and families.",
    href: "https://www.runx1simplified.org",
    logo: "/assets/communities/runx1.png",
    // The RUNX1 lockup is white-on-black and needs a dark chip behind it.
    logoOnDark: true,
    accent: "#701616",
    accentDark: "#4E0F0F",
  },
];

export const communityByKey = Object.fromEntries(
  communities.map((community) => [community.key, community])
);
