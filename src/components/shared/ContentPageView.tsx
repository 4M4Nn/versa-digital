import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentPage } from "@/types";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ClosingCta from "@/components/shared/ClosingCta";
import FaqBlock from "@/components/shared/FaqBlock";
import RichBody from "@/components/shared/RichBody";
import { siteConfig } from "@/lib/data";

const SITE_URL = "https://www.versadigital.in";

export default function ContentPageView({
  page,
  trail,
  schemaType = "Article",
  ctaHeading = "Want this done properly for your business?",
}: {
  page: ContentPage;
  trail: { name: string; href: string }[];
  schemaType?: "Article" | "DefinedTerm" | "Service";
  ctaHeading?: string;
}) {
  const url = `${SITE_URL}${trail[trail.length - 1].href}`;
  const schema =
    schemaType === "DefinedTerm"
      ? {
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: page.title,
          description: page.summary,
          url,
          inDefinedTermSet: { "@type": "DefinedTermSet", name: "Versa Digital Glossary", url: `${SITE_URL}/glossary` },
        }
      : schemaType === "Service"
        ? {
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.title,
            description: page.metaDescription,
            url,
            provider: { "@type": "Organization", name: siteConfig.fullName, url: SITE_URL },
          }
        : {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: page.title,
            description: page.metaDescription,
            url,
            dateModified: page.updatedAt,
            datePublished: page.updatedAt,
            keywords: page.keywords.join(", "),
            author: { "@type": "Organization", name: siteConfig.fullName, url: SITE_URL },
            publisher: { "@type": "Organization", name: siteConfig.fullName, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` } },
            mainEntityOfPage: url,
          };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div className="bg-hairline-grid pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(50% 70% at 85% 0%, rgba(107,33,168,0.3) 0%, rgba(12,11,16,0) 70%)" }}
        />
        <div className="relative mx-auto max-w-4xl">
          <Breadcrumbs items={trail} />
          <p className="mt-10 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">{page.eyebrow}</p>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.06] text-white md:text-[3.4rem]">{page.title}</h1>
          <p className="mt-4 text-xs text-white/40">
            Updated <time dateTime={page.updatedAt}>{new Date(page.updatedAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</time> · {siteConfig.fullName}
          </p>
        </div>
      </section>

      <article data-navbar-theme="light" className="bg-bg-light px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_280px]">
          <div className="max-w-3xl">
            <div className="speakable-summary mb-12 rounded-2xl border border-text-dark/10 bg-white p-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">The short answer</p>
              <p className="mt-3 text-lg leading-relaxed text-text-dark">{page.summary}</p>
            </div>
            <RichBody body={page.body} />
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-bg-dark p-7 text-white">
              <p className="font-heading text-lg font-semibold">Talk to a specialist</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">Senior strategists and engineers, working in your time zone.</p>
              <Link href="/contact" className="mt-5 inline-flex w-full justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-text-dark transition-colors hover:bg-gold-light">
                Book a strategy call
              </Link>
            </div>
            {page.related && page.related.length > 0 && (
              <div className="mt-6 rounded-2xl border border-text-dark/10 bg-white p-7">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Related</p>
                <ul className="mt-4 space-y-3">
                  {page.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="group flex items-start justify-between gap-3 text-sm text-text-dark transition-colors hover:text-violet">
                        {r.label}
                        <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 opacity-40 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </article>

      <FaqBlock faqs={page.faqs} heading="Frequently asked questions" />

      <ClosingCta heading={ctaHeading} subtext="Tell us your market and your goals. We'll come back with a clear plan, timeline and quote." />
    </div>
  );
}
