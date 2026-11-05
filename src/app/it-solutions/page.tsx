import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ClosingCta from "@/components/shared/ClosingCta";
import FaqBlock from "@/components/shared/FaqBlock";
import ItIcon from "@/components/shared/ItIcon";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { itStats, itStatsLabel } from "@/lib/data";
import { engagementModels, industrySolutions, itCatalog, itCategories, itHubFaqs, technologyStack } from "@/lib/it-services";

export const metadata: Metadata = {
  alternates: { canonical: "/it-solutions" },
  title: "IT Solutions & Software Development Company — AI, Cloud, ERP, Apps",
  description:
    "Full-service IT solutions company: custom software, web and mobile apps, generative AI and agentic automation, cloud and DevOps, cybersecurity, data analytics, ERP/CRM and dedicated developers — for businesses in the UAE, UK, USA, India and worldwide.",
  keywords: [
    "IT solutions company",
    "software development company India",
    "offshore software development",
    "IT services company Dubai",
    "custom software development UK",
    "AI development company",
    "ERP development company",
    "IT outsourcing India",
  ],
};

export default function ItSolutionsPage() {
  return (
    <div>
      <ServiceSchema
        name="IT Solutions & Software Development"
        description="End-to-end IT solutions: software engineering, AI and data, cloud and infrastructure, business systems, security, QA and support."
        serviceType="IT Services & Software Development"
        url="/it-solutions"
      />

      <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="bg-hairline-grid pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(55% 70% at 80% 0%, rgba(107,33,168,0.34) 0%, rgba(12,11,16,0) 70%)" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "IT Solutions", href: "/it-solutions" }]} />
          <p className="mt-10 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">IT Solutions</p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.04] text-white md:text-7xl">
            Every IT capability your business needs, <span className="font-serif font-medium italic text-gold-light">under one roof.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Software engineering, AI and data, cloud and infrastructure, business systems, security and support — {itCatalog.length} solutions
            delivered by one accountable team in Kochi for clients in India, the Gulf, Europe, North America and Asia-Pacific.
          </p>
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">{itStatsLabel}</p>
            <div className="mt-5 grid grid-cols-2 gap-8 md:grid-cols-4">
              {itStats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-4xl font-semibold text-white md:text-5xl">{s.value}</p>
                  <p className="mt-1.5 text-xs uppercase tracking-wide text-white/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl space-y-20">
          {itCategories.map((cat, ci) => {
            const items = itCatalog.filter((i) => i.category === cat.name);
            return (
              <div key={cat.name} id={cat.name.toLowerCase().replace(/[^a-z]+/g, "-")} className="grid gap-10 lg:grid-cols-[1fr_2.4fr]">
                <div>
                  <span className="font-mono text-xs text-gold">{String(ci + 1).padStart(2, "0")}</span>
                  <h2 className="mt-3 font-heading text-2xl font-semibold text-text-dark md:text-3xl">{cat.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{cat.description}</p>
                </div>
                <div className="grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 sm:grid-cols-2">
                  {items.map((item) => (
                    <Link key={item.slug} href={item.href} className="group flex flex-col bg-bg-light p-7 transition-colors hover:bg-white">
                      <div className="flex items-start justify-between">
                        <ItIcon name={item.icon} className="size-5 text-violet" />
                        <ArrowUpRight className="size-4 text-text-muted transition-colors group-hover:text-violet" />
                      </div>
                      <h3 className="mt-5 font-heading text-lg font-semibold text-text-dark">{item.name}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">Engagement models</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold text-white md:text-4xl">Work with us the way your business works</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {engagementModels.map((m) => (
              <div key={m.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="font-heading text-xl font-semibold text-white">{m.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-wide text-gold-light">{m.bestFor}</p>
                <p className="mt-5 text-sm leading-relaxed text-white/65">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-ivory px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Industry solutions</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold text-text-dark md:text-4xl">Built for how your industry operates</h2>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {industrySolutions.map((ind) => (
              <div key={ind.name} className="border-t border-text-dark/15 pt-5">
                <h3 className="font-heading text-base font-semibold text-text-dark">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Technology</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold text-text-dark md:text-4xl">A modern, proven stack</h2>
          <div className="mt-12 divide-y divide-text-dark/10 border-y border-text-dark/10">
            {technologyStack.map((g) => (
              <div key={g.group} className="grid gap-3 py-5 md:grid-cols-[220px_1fr] md:items-center">
                <p className="font-heading text-sm font-semibold text-text-dark">{g.group}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span key={t} className="rounded-full border border-text-dark/12 bg-white px-3.5 py-1.5 text-xs text-text-dark/75">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-text-dark/10 bg-white p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-lg font-semibold text-text-dark">Need customers as well as systems?</h3>
              <p className="mt-1 text-sm text-text-muted">SEO, AEO, performance marketing and content from the same team — explore Digital Services.</p>
            </div>
            <Link href="/services" className="inline-flex w-fit items-center gap-1.5 rounded-full bg-text-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet">
              Explore Digital Services <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <FaqBlock faqs={itHubFaqs} heading="IT Solutions: common questions" />

      <ClosingCta
        heading="One engineering partner. Every layer of your stack."
        subtext="Tell us what you're building, fixing or replacing. We'll recommend the right approach — even if it's smaller than you expected."
        whatsappMessage="Hi Versa Digital, I'd like to discuss an IT project."
      />
    </div>
  );
}
