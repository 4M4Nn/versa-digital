import type { NavLink } from "@/types";
import { navLinks } from "@/lib/data";
import { itCatalog, itCategories } from "@/lib/it-services";
import { markets } from "@/lib/markets";
import { erpPages } from "@/lib/content/erp-solutions";
import { outsourcingPages } from "@/lib/content/outsourcing";

const digital = navLinks.find((l) => l.href === "/services");

export const mainNav: NavLink[] = [
  {
    label: "Digital Services",
    href: "/services",
    children: [...(digital?.children ?? []), { label: "Packages & Pricing", href: "/packages", description: "Monthly growth and SEO plans" }],
  },
  {
    label: "IT Solutions",
    href: "/it-solutions",
    columns: itCategories.map((cat) => ({
      title: cat.name,
      links: itCatalog
        .filter((item) => item.category === cat.name)
        .map((item) => ({ label: item.name, href: item.href }))
        .concat(
          cat.name === "Business Systems"
            ? [
                { label: "ERP Solutions hub", href: "/erp" },
                ...erpPages.slice(0, 4).map((p) => ({ label: p.title.replace(/ Software$| \(HMS\) Software$/, ""), href: `/erp/${p.slug}` })),
              ]
            : []
        ),
    })),
  },
  {
    label: "Global",
    href: "/global",
    children: [
      ...markets.map((m) => ({ label: m.country, href: `/global/${m.slug}`, description: m.cities.slice(0, 3).join(" · ") })),
      { label: "All markets we serve", href: "/global", description: "How we work across time zones" },
    ],
  },
  {
    label: "Outsourcing",
    href: "/outsourcing",
    children: [
      { label: "Outsourcing & subcontracting", href: "/outsourcing", description: "Delivery partner for IT companies, SIs and agencies" },
      ...outsourcingPages.slice(0, 6).map((p) => ({ label: p.title, href: `/outsourcing/${p.slug}` })),
      { label: "IT & ERP projects", href: "/projects", description: "Case studies across ERP, CRM, apps and AI" },
      { label: "Marketing case studies", href: "/portfolio", description: "Digital growth results" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Insights & articles", href: "/blog", description: "Guides for buyers in the UAE, UK, USA and beyond" },
      { label: "IT & ERP projects", href: "/projects", description: "Case studies, client names under NDA" },
      { label: "ERP solutions", href: "/erp", description: "Custom ERP, Odoo, ERPNext and industry ERPs" },
      { label: "Industries", href: "/industries", description: "Marketing and IT by sector" },
      { label: "Comparisons", href: "/compare", description: "Odoo vs Zoho, Flutter vs React Native and more" },
      { label: "Cost guides", href: "/cost-guides", description: "Indicative 2026 pricing" },
      { label: "Glossary", href: "/glossary", description: "AEO, GEO, RAG, ERP and more, explained" },
      { label: "FAQ", href: "/faq", description: "Common questions answered" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
