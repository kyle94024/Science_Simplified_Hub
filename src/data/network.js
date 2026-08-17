// Institutions represented in the Science Simplified reviewer network.
//
// IMPORTANT — only list an institution where a named advisor or reviewer
// actually holds an appointment, and render the name as text rather than the
// institution's logo. Reproducing university and hospital logos implies
// institutional endorsement and generally requires written permission from
// each institution's brand office. The entries below trace back to advisors in
// src/data/advisors.js; confirm each one before adding more.
export const institutions = [
  { name: "Stanford Medicine", note: "Dermatology" },
  { name: "Massachusetts General Hospital", note: "Neuro-oncology" },
  { name: "Harvard Medical School", note: "" },
];

// Partner organizations that co-sponsor a community site.
export const partnerOrgs = [
  {
    name: "The Myositis Association",
    href: "https://www.myositis.org/",
    community: "Myositis Simplified",
  },
  {
    name: "Scleroderma Research Foundation",
    href: "https://srfcure.org/",
    community: "Scleroderma Simplified",
  },
  {
    name: "RUNX1 Research Program",
    href: "https://runx1-fpd.org/",
    community: "RUNX1 Simplified",
  },
  {
    name: "HS Foundation",
    href: "https://www.hs-foundation.org/",
    community: "HS Simplified",
  },
];
