import { blogPosts, faqs, fullServices, itStats, siteConfig, techOfferings } from "@/lib/data";

const BASE = "https://www.versadigital.in";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${siteConfig.fullName}`,
    "",
    `> ${siteConfig.positioning} based in Kochi, Kerala, India. ${siteConfig.subTagline}. Part of ${siteConfig.partOf}.`,
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
    ...techOfferings.map((s) => `- [${s.name}](${BASE}${s.href}): ${s.description}`),
    "",
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
    ...faqs.flatMap((f) => [`### ${f.question}`, f.answer, ""]),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
