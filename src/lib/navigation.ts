import type { NavLink } from "@/types";
import { navLinks } from "@/lib/data";
import { itCatalog, itCategories } from "@/lib/it-services";
import { markets } from "@/lib/markets";

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
        .map((item) => ({ label: item.name, href: item.href })),
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
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
