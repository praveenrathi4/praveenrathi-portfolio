import { getSiteUrl } from "@/lib/config";
import { getAllProjectSlugs } from "@/data/projects";

export default function sitemap() {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
