import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ClosingCta from "@/components/shared/ClosingCta";
import FaqBlock from "@/components/shared/FaqBlock";
import { siteConfig } from "@/lib/data";
import { getMarket, markets } from "@/lib/markets";

const SITE_URL = "https://www.versadigital.in";

export const dynamicParams = false;

export function generateStaticParams() {
  return markets.map((m) => ({ market: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ market: string }> }): Promise<Metadata> {
  const { market } = await params;
  const m = getMarket(market);
  if (!m) return {};
  return {
    title: m.metaTitle,
    description: m.metaDescription,
    keywords: m.keywords,
    alternates: { canonical: `/global/${m.slug}` },
    openGraph: { title: m.metaTitle, description: m.metaDescription, url: `/global/${m.slug}`, type: "website" },
  };
}

export default async function MarketPage({ params }: { params: Promise<{ market: string }> }) {
  const { market } = await params;
  const m = getMarket(market);
  if (!m) notFound();

  const others = markets.filter((o) => o.slug !== m.slug);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `${siteConfig.fullName} — ${m.country}`,
            url: `${SITE_URL}/global/${m.slug}`,
            description: m.metaDescription,
            telephone: siteConfig.phone,
            email: siteConfig.businessEmail,
            areaServed: [
              { "@type": "Country", name: m.country },
              ...m.cities.map((c) => ({ "@type": "City", name: c })),
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "3rd Floor, Jogeo Building, Chembumukku",
              addressLocality: "Kakkanad, Kochi",
              addressRegion: "Kerala",
              postalCode: "682021",
              addressCountry: "IN",
            },
            makesOffer: m.featuredServices.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.label, url: `${SITE_URL}${s.href}` },
            })),
          }),
        }}
      />

      <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="bg-hairline-grid pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(55% 70% at 85% 0%, rgba(176,141,87,0.24) 0%, rgba(12,11,16,0) 70%)" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Global", href: "/global" }, { name: m.country, href: `/global/${m.slug}` }]} />
          <p className="mt-10 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
            {m.country} · {m.cities.slice(0, 3).join(" · ")}
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] text-white md:text-6xl">{m.heroHeading}</h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{m.heroSubtext}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-text-dark transition-colors hover:bg-gold-light">
              Book a call in your time zone
            </Link>
            <Link href="/it-solutions" className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-8 text-sm font-semibold text-white transition-colors hover:border-white/60">
              Explore capabilities
            </Link>
          </div>
          <dl className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Your time zone</dt>
              <dd className="mt-2 text-sm text-white/85">{m.timeZone}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Working overlap</dt>
              <dd className="mt-2 text-sm text-white/85">{m.overlap}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Billing</dt>
              <dd className="mt-2 text-sm text-white/85">Proposals in {m.currency} or USD</dd>
            </div>
          </dl>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{m.shortName} market</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-text-dark md:text-4xl">
              Built for how {m.country} buys, searches and operates
            </h2>
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-text-muted">
            {m.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-ivory px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Priorities</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold text-text-dark md:text-4xl">What we focus on for {m.shortName} clients</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 md:grid-cols-2">
            {m.priorities.map((p, i) => (
              <div key={p.title} className="bg-bg-light p-8">
                <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-dark">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Services for {m.shortName}</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold text-text-dark md:text-4xl">Where we add the most value</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {m.featuredServices.map((s) => (
              <Link key={s.href} href={s.href} className="group flex flex-col rounded-xl border border-text-dark/10 bg-white p-7 transition-colors hover:border-text-dark/30">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-lg font-semibold text-text-dark">{s.label}</h3>
                  <ArrowUpRight className="size-4 shrink-0 text-text-muted transition-colors group-hover:text-violet" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{s.reason}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">Search landscape</p>
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">{m.searchLandscape}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">Compliance we build for</p>
            <ul className="mt-5 space-y-3">
              {m.compliance.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[15px] text-white/75">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold-light" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">Payments we integrate</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {m.payments.map((p) => (
                <span key={p} className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/75">
                  {p}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-white/40">
              Compliance notes describe how we design and build; they are not legal advice. Confirm obligations with your own counsel.
            </p>
          </div>
        </div>
      </section>

      <FaqBlock faqs={m.faqs} heading={`Working with us from ${m.country}`} />

      <section data-navbar-theme="light" className="bg-ivory px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Other markets we serve</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/global/${o.slug}`} className="rounded-full border border-text-dark/15 bg-bg-light px-4 py-2 text-sm text-text-dark transition-colors hover:border-text-dark/40">
                {o.country}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        heading={`Growing in ${m.shortName}? Let's talk.`}
        subtext={`We'll schedule a call in ${m.timeZone.split(" (")[0]} and come back with a clear plan, timeline and quote in ${m.currency}.`}
        whatsappMessage={`Hi Versa Digital, I'm based in ${m.country} and would like to discuss a project.`}
      />
    </div>
  );
}
