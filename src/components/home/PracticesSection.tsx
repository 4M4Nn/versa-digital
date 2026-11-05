import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeContent, navLinks, portals } from "@/lib/data";
import { itCatalog } from "@/lib/it-services";

const IT_HIGHLIGHTS = [
  "custom-software-development",
  "mobile-app-development",
  "generative-ai-llm-development",
  "ai-automation",
  "client-solutions",
  "cloud-devops",
];

export default function PracticesSection() {
  const { practicesIntro } = homeContent;
  const digitalLinks = navLinks.find((l) => l.href === "/services")?.children ?? [];
  const itLinks = IT_HIGHLIGHTS.map((slug) => itCatalog.find((i) => i.slug === slug)).filter(
    (i): i is NonNullable<typeof i> => Boolean(i)
  );

  const columns = [
    { portal: portals[0], links: digitalLinks.map((l) => ({ label: l.label, href: l.href })) },
    { portal: portals[1], links: itLinks.map((l) => ({ label: l.name, href: l.href })) },
  ];

  return (
    <section data-navbar-theme="light" className="bg-bg-light px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{practicesIntro.label}</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-text-dark md:text-5xl">{practicesIntro.heading}</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-text-muted md:text-lg">{practicesIntro.subtext}</p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {columns.map(({ portal, links }, idx) => (
            <div
              key={portal.id}
              className={
                idx === 0
                  ? "flex flex-col rounded-2xl border border-text-dark/10 bg-white p-8 md:p-10"
                  : "flex flex-col rounded-2xl bg-bg-dark p-8 text-white md:p-10"
              }
            >
              <p className={idx === 0 ? "font-mono text-xs text-gold" : "font-mono text-xs text-gold-light"}>{String(idx + 1).padStart(2, "0")}</p>
              <h3 className={idx === 0 ? "mt-4 font-heading text-3xl font-semibold text-text-dark" : "mt-4 font-heading text-3xl font-semibold text-white"}>
                {portal.label}
              </h3>
              <p className={idx === 0 ? "mt-3 text-sm leading-relaxed text-text-muted" : "mt-3 text-sm leading-relaxed text-white/60"}>{portal.description}</p>
              <ul className={idx === 0 ? "mt-8 flex-1 divide-y divide-text-dark/10 border-y border-text-dark/10" : "mt-8 flex-1 divide-y divide-white/10 border-y border-white/10"}>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={
                        idx === 0
                          ? "group flex items-center justify-between py-3.5 text-[15px] text-text-dark transition-colors hover:text-violet"
                          : "group flex items-center justify-between py-3.5 text-[15px] text-white/85 transition-colors hover:text-white"
                      }
                    >
                      {l.label}
                      <ArrowUpRight className="size-4 opacity-40 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={portal.href}
                className={
                  idx === 0
                    ? "mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-violet hover:text-violet-light"
                    : "mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-gold-light hover:text-white"
                }
              >
                {idx === 0 ? "All digital services" : `All ${itCatalog.length} IT solutions`} <ArrowUpRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
