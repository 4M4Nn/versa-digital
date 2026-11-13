import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentPage } from "@/types";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ClosingCta from "@/components/shared/ClosingCta";

export default function ContentHub({
  label,
  heading,
  intro,
  basePath,
  trailName,
  pages,
  columns = 3,
  children,
  ctaHeading = "Have a specific question?",
  ctaSubtext = "Ask a senior specialist directly — we answer in your time zone.",
}: {
  label: string;
  heading: string;
  intro: string;
  basePath: string;
  trailName: string;
  pages: ContentPage[];
  columns?: 2 | 3;
  children?: ReactNode;
  ctaHeading?: string;
  ctaSubtext?: string;
}) {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: heading,
            description: intro,
            hasPart: pages.map((p) => ({ "@type": "WebPage", name: p.title, url: `https://www.versadigital.in${basePath}/${p.slug}` })),
          }),
        }}
      />
      <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div className="bg-hairline-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: trailName, href: basePath }]} />
          <p className="mt-10 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">{label}</p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] text-white md:text-6xl">{heading}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{intro}</p>
        </div>
      </section>
      {children}
      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div
          className={`mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
        >
          {pages.map((p) => (
            <Link key={p.slug} href={`${basePath}/${p.slug}`} className="group flex flex-col bg-bg-light p-7 transition-colors hover:bg-white">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">{p.eyebrow}</p>
                <ArrowUpRight className="size-4 shrink-0 text-text-muted transition-colors group-hover:text-violet" />
              </div>
              <h2 className="mt-4 font-heading text-lg font-semibold leading-snug text-text-dark">{p.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-muted">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <ClosingCta heading={ctaHeading} subtext={ctaSubtext} />
    </div>
  );
}
