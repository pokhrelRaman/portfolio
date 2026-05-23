import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  // Get blog posts with weekly changefreq and lower priority
  const blogs: SitemapEntry[] = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `https://${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Get work projects with weekly changefreq and higher priority
  const works: SitemapEntry[] = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `https://${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Get active routes
  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);

  // Map routes with appropriate priorities and change frequencies
  const routePriorities: Record<string, { priority: number; changeFreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }> = {
    "/": { priority: 1.0, changeFreq: "weekly" }, // Homepage is most important
    "/about": { priority: 0.9, changeFreq: "monthly" }, // About page
    "/work": { priority: 0.95, changeFreq: "weekly" }, // Portfolio/work page
    "/blog": { priority: 0.7, changeFreq: "weekly" }, // Blog main page
    "/gallery": { priority: 0.6, changeFreq: "monthly" }, // Gallery
  };

  const routes: SitemapEntry[] = activeRoutes.map((route) => ({
    url: `https://${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: (routePriorities[route]?.changeFreq || "monthly") as "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
    priority: routePriorities[route]?.priority || 0.5,
  }));

  // Return with main routes first (higher priority), then works, then blogs
  return [...routes, ...works, ...blogs];
}
