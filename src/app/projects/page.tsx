import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ClosingCta from "@/components/shared/ClosingCta";
import { projectCases, projectCategories } from "@/lib/content/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  title: "IT & ERP Projects — Case Studies in ERP, CRM, Portals, Apps & AI",
  description:
    "IT projects delivered by Versa Digital & IT Solutions — custom ERPs, CRMs, B2B portals, mobile apps, AI automation, QA and support for clients and as a subcontractor to IT companies across the UAE, Saudi Arabia, UK, USA and India.",
  keywords: [
    "IT projects case studies",
    "ERP project case study",
    "software development portfolio",
    "subcontract IT projects",
    "custom software projects India",
    "white label projects",
  ],
};

const SITE_URL = "https://www.versadigital.in";

export default function Page() {
  const regions = new Set(projectCases.flatMap((p) => p.region.split(/ & |, /)));
  const subcontracted = projectCases.filter((p) => p.deliveryModel === "Subcontract" || p.deliveryModel === "White-label").length;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "IT & ERP Projects",
            url: `${SITE_URL}/projects`,
            hasPart: projectCases.map((p) => ({ "@type": "Article", headline: p.title, url: `${SITE_URL}/projects/${p.slug}` })),
          }),
        }}
      />
      <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div className="bg-hairline-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} />
          <p className="mt-10 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">PROJECTS</p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
            ERP, software and AI projects in production.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            A selection of IT projects delivered for direct clients and as a subcontractor or white-label partner to larger IT companies. Client names are withheld — most of this work is under NDA.
          </p>
          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-xs text-white/50">Projects shown</dt>
              <dd className="mt-1 font-heading text-3xl font-semibold text-white">{projectCases.length}</dd>
            </div>
            <div>
              <dt className="text-xs text-white/50">Subcontract / white-label</dt>
              <dd className="mt-1 font-heading text-3xl font-semibold text-white">{subcontracted}</dd>
            </div>
            <div>
              <dt className="text-xs text-white/50">Markets</dt>
              <dd className="mt-1 font-heading text-3xl font-semibold text-white">{regions.size}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl space-y-16">
          {projectCategories.map((cat) => {
            const items = projectCases.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <h2 className="font-heading text-2xl font-semibold text-text-dark">{cat}</h2>
                <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 md:grid-cols-2">
                  {items.map((p) => (
                    <Link key={p.slug} href={`/projects/${p.slug}`} className="group flex flex-col bg-bg-light p-7 transition-colors hover:bg-white">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                          {p.industry} · {p.region}
                        </p>
                        <ArrowUpRight className="size-4 shrink-0 text-text-muted transition-colors group-hover:text-violet" />
                      </div>
                      <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-text-dark">{p.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-muted">{p.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full bg-violet-pale px-3 py-1 text-[11px] font-medium text-violet">{p.deliveryModel}</span>
                        {p.stack.slice(0, 3).map((t) => (
                          <span key={t} className="rounded-full border border-text-dark/10 px-3 py-1 text-[11px] text-text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <p className="text-sm text-text-muted">
            Are you an IT company looking for a delivery partner?{" "}
            <Link href="/outsourcing" className="font-medium text-violet underline-offset-4 hover:underline">
              See how subcontracting with us works
            </Link>
            .
          </p>
        </div>
      </section>

      <ClosingCta heading="Have a similar project in your pipeline?" subtext="Share the scope — we reply with an approach, team and indicative cost." />
    </div>
  );
}
