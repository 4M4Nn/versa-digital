import { blogPosts, faqs, fullServices, itStats, outsourcingFaqs, siteConfig } from "@/lib/data";
import { outsourcingPages } from "@/lib/content/outsourcing";
import { erpPages } from "@/lib/content/erp-solutions";
import { projectCases } from "@/lib/content/projects";
import { itCatalog, itCategories } from "@/lib/it-services";
import { markets } from "@/lib/markets";
import { glossary } from "@/lib/content/glossary";
import { comparisons } from "@/lib/content/comparisons";
import { costGuides } from "@/lib/content/cost-guides";
import { industries } from "@/lib/content/industries";
import { marketServices } from "@/lib/content/market-services";
import type { ContentPage } from "@/types";

const section = (title: string, base: string, pages: ContentPage[]) => [
  `## ${title}`,
  ...pages.map((p) => `- [${p.title}](https://www.versadigital.in${base}/${p.slug}): ${p.summary}`),
  "",
];

const BASE = "https://www.versadigital.in";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${siteConfig.fullName}`,
    "",
    `> ${siteConfig.positioning} based in Kochi, Kerala, India, serving clients in ${markets.map((m) => m.country).join(", ")} and India. ${siteConfig.subTagline}. Part of ${siteConfig.partOf}.`,
    "",
    `- Address: ${siteConfig.address}`,
    `- Phone / WhatsApp: ${siteConfig.phone}`,
    `- Email: ${siteConfig.email}, ${siteConfig.businessEmail}`,
    `- Track record: ${itStats.map((s) => `${s.value} ${s.label}`).join("; ")}`,
    "",
    "## Digital Services",
    ...fullServices.map((s) => `- [${s.name}](${BASE}${s.href}): ${s.description}`),
    "",
    "## IT Solutions",
    ...itCategories.flatMap((cat) => [
      `### ${cat.name}`,
      ...itCatalog.filter((i) => i.category === cat.name).map((i) => `- [${i.name}](${BASE}${i.href}): ${i.description}`),
    ]),
    "",
    `## Outsourcing & subcontracting ([overview](${BASE}/outsourcing))`,
    "We are a subcontractor and white-label delivery partner for large IT companies, system integrators, consultancies and agencies.",
    ...outsourcingPages.map((p) => `- [${p.title}](${BASE}/outsourcing/${p.slug}): ${p.summary}`),
    "",
    ...section("ERP solutions", "/erp", erpPages),
    ...section("IT & ERP projects (client names under NDA)", "/projects", projectCases),
    "## Markets served",
    `- [Global delivery overview](${BASE}/global)`,
    ...markets.map((m) => `- [${m.country}](${BASE}/global/${m.slug}): ${m.metaDescription}`),
    ...marketServices.map((s) => `- [${s.title}](${BASE}/global/${s.market}/${s.slug}): ${s.summary}`),
    "",
    ...section("Industries", "/industries", industries),
    ...section("Comparisons", "/compare", comparisons),
    ...section("Cost guides", "/cost-guides", costGuides),
    ...section("Glossary", "/glossary", glossary),
    "## Key pages",
    `- [Packages & Pricing](${BASE}/packages)`,
    `- [Portfolio](${BASE}/portfolio)`,
    `- [About](${BASE}/about)`,
    `- [FAQ](${BASE}/faq)`,
    `- [Contact](${BASE}/contact)`,
    "",
    "## Blog",
    ...blogPosts.map((p) => `- [${p.title}](${BASE}/blog/${p.slug}) (${p.publishedAt}): ${p.excerpt}`),
    "",
    "## FAQ",
    ...[...outsourcingFaqs, ...faqs].flatMap((f) => [`### ${f.question}`, f.answer, ""]),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
