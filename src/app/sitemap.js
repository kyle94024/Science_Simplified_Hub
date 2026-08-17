import { site } from "@/data/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/communities", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/partner", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
