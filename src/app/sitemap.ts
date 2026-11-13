import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { itCatalog } from "@/lib/it-services";
import { markets } from "@/lib/markets";
import { glossary } from "@/lib/content/glossary";
import { comparisons } from "@/lib/content/comparisons";
import { costGuides } from "@/lib/content/cost-guides";
import { industries } from "@/lib/content/industries";
import { marketServices } from "@/lib/content/market-services";
import { outsourcingPages } from "@/lib/content/outsourcing";
import { erpPages } from "@/lib/content/erp-solutions";
import { projectCases } from "@/lib/content/projects";

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
    page("/outsourcing", 0.9),
    ...outsourcingPages.map((p) => page(`/outsourcing/${p.slug}`, 0.85)),
    page("/erp", 0.9),
    ...erpPages.map((p) => page(`/erp/${p.slug}`, 0.85)),
    page("/projects", 0.8),
    ...projectCases.map((p) => page(`/projects/${p.slug}`, 0.7)),
    page("/global", 0.9),
    ...markets.map((m) => page(`/global/${m.slug}`, 0.85)),
    ...marketServices.map((s) => page(`/global/${s.market}/${s.slug}`, 0.85)),
    page("/industries", 0.7),
    ...industries.map((p) => page(`/industries/${p.slug}`, 0.7)),
    page("/compare", 0.6),
    ...comparisons.map((p) => page(`/compare/${p.slug}`, 0.7)),
    page("/cost-guides", 0.6),
    ...costGuides.map((p) => page(`/cost-guides/${p.slug}`, 0.7)),
    page("/glossary", 0.6),
    ...glossary.map((p) => page(`/glossary/${p.slug}`, 0.6)),
    page("/packages", 0.8),
    page("/portfolio", 0.7),
    page("/about", 0.7, "yearly"),
    { url: `${BASE}/blog`, lastModified: latestPost, changeFrequency: "weekly", priority: 0.8 },
    page("/faq", 0.6),
    page("/contact", 0.5, "yearly"),
    ...posts,
  ];
}
