import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { itCatalog } from "@/lib/it-services";
import { markets } from "@/lib/markets";

const BASE = "https://www.versadigital.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  const posts = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const latestPost = posts.reduce<Date>((latest, p) => (p.lastModified > latest ? p.lastModified : latest), new Date(0));

  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    page("/services/performance-marketing", 0.8),
    page("/services/web-development", 0.8),
    page("/services/lead-generation", 0.8),
    page("/services/branding-content", 0.8),
    page("/seo", 0.8),
    page("/aeo", 0.8),
    page("/smm", 0.8),
    page("/it-solutions", 0.9),
    ...itCatalog.map((i) => page(i.href, 0.8)),
    page("/global", 0.9),
    ...markets.map((m) => page(`/global/${m.slug}`, 0.85)),
    page("/packages", 0.8),
    page("/portfolio", 0.7),
    page("/about", 0.7, "yearly"),
    { url: `${BASE}/blog`, lastModified: latestPost, changeFrequency: "weekly", priority: 0.8 },
    page("/faq", 0.6),
    page("/contact", 0.5, "yearly"),
    ...posts,
  ];
}
