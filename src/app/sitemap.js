import { site } from "@/data/site";

// Bump a route's `lastModified` when its content meaningfully changes; a build
// timestamp would claim every page is always fresh, which crawlers ignore.
const routes = [
  { path: "/", priority: 1, lastModified: "2026-08-17" },
  { path: "/communities", priority: 0.9, lastModified: "2026-08-17" },
  { path: "/about", priority: 0.8, lastModified: "2026-08-17" },
  { path: "/partner", priority: 0.8, lastModified: "2026-08-17" },
  { path: "/privacy", priority: 0.3, lastModified: "2026-08-17" },
  { path: "/terms", priority: 0.3, lastModified: "2025-05-20" },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
