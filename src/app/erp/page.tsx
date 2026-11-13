import type { Metadata } from "next";
import Link from "next/link";
import ContentHub from "@/components/shared/ContentHub";
import { erpPages } from "@/lib/content/erp-solutions";
import { projectCases } from "@/lib/content/projects";
import { itStats } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/erp" },
  title: "ERP Solutions — Custom ERP, Odoo, ERPNext & Industry ERP Development",
  description:
    "Custom ERP development, Odoo and ERPNext implementation, manufacturing, trading, construction, school and hospital ERPs, data migration and integrations — for businesses in India, the UAE, Saudi Arabia, the UK and USA.",
  keywords: [
    "ERP solutions",
    "ERP development company",
    "custom ERP Kerala",
    "ERP software UAE",
    "Odoo ERPNext implementation",
    "industry ERP software",
  ],
};

export default function Page() {
  const erpProjects = projectCases.filter((p) => p.category === "ERP");
  return (
    <ContentHub
      label="ERP SOLUTIONS"
      heading="ERP built around how your business really runs."
      intro="Custom ERPs, Odoo and ERPNext implementations, industry editions for manufacturing, trading, construction, education and healthcare, plus the migrations and integrations that make them work — for direct clients and as a subcontractor to other IT companies."
      basePath="/erp"
      trailName="ERP Solutions"
      pages={erpPages}
      ctaHeading="Planning an ERP project?"
      ctaSubtext="Get a fit-gap session with a senior ERP consultant and a phased plan with indicative cost."
    >
      <section data-navbar-theme="light" className="bg-ivory px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Track record</p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {itStats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-4xl font-semibold text-text-dark">{s.value}</p>
                  <p className="mt-1 text-sm text-text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Recent ERP projects</p>
            <ul className="mt-6 divide-y divide-text-dark/10 border-y border-text-dark/10">
              {erpProjects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="flex flex-col gap-1 py-4 transition-colors hover:text-violet sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="font-heading text-base font-semibold text-text-dark">{p.title}</span>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      {p.region} · {p.deliveryModel}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ContentHub>
  );
}
