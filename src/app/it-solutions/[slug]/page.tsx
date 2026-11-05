import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ClosingCta from "@/components/shared/ClosingCta";
import FaqBlock from "@/components/shared/FaqBlock";
import ItIcon from "@/components/shared/ItIcon";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { getItService, itCatalog, itServices } from "@/lib/it-services";
import { markets } from "@/lib/markets";

export const dynamicParams = false;

export function generateStaticParams() {
  return itServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getItService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/it-solutions/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/it-solutions/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ItServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getItService(slug);
  if (!service) notFound();

  const related = itCatalog.filter((i) => i.category === service.category && i.slug !== service.slug).slice(0, 4);

  return (
    <div>
      <ServiceSchema name={service.name} description={service.metaDescription} serviceType={service.name} url={`/it-solutions/${service.slug}`} />

      <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="bg-hairline-grid pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(50% 70% at 85% 0%, rgba(107,33,168,0.32) 0%, rgba(12,11,16,0) 70%)" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "IT Solutions", href: "/it-solutions" }, { name: service.name, href: `/it-solutions/${service.slug}` }]} />
          <div className="mt-10 flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full border border-white/15">
              <ItIcon name={service.icon} className="size-5 text-gold-light" />
            </span>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
              {service.category} · {service.name}
            </p>
          </div>
          <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] text-white md:text-6xl">{service.heroHeading}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{service.heroSubtext}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-text-dark transition-colors hover:bg-gold-light">
              Discuss your project
            </Link>
            <Link href="/it-solutions" className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-8 text-sm font-semibold text-white transition-colors hover:border-white/60">
              All IT solutions
            </Link>
          </div>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Overview</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-text-dark md:text-4xl">{service.shortDescription}</h2>
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-text-muted">
            {service.overview.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-ivory px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Capabilities</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold leading-tight text-text-dark md:text-4xl">What we deliver</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((c, i) => (
              <div key={c.title} className="bg-bg-light p-8">
                <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-dark">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">How we work</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">A clear path from brief to production</h2>
            <ol className="mt-10 space-y-0 border-l border-white/15">
              {service.process.map((step, i) => (
                <li key={step} className="relative pb-8 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 size-[9px] rounded-full bg-gold-light" />
                  <span className="font-mono text-xs text-white/40">Step {i + 1}</span>
                  <p className="mt-1 font-heading text-lg font-semibold text-white">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">Outcomes</p>
              <ul className="mt-5 space-y-3.5">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-[15px] text-white/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-light" /> {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">Technologies</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/75">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-text-dark/10 bg-white p-8 md:p-10">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Delivered worldwide</p>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-text-muted">
            We deliver {service.name.toLowerCase()} for clients across{" "}
            {markets.map((m, i) => (
              <span key={m.slug}>
                <Link href={`/global/${m.slug}`} className="font-medium text-text-dark underline decoration-text-dark/20 underline-offset-4 hover:decoration-violet">
                  {m.country}
                </Link>
                {i < markets.length - 2 ? ", " : i === markets.length - 2 ? " and " : ""}
              </span>
            ))}
            , with working hours planned around your time zone.
          </p>
        </div>
      </section>

      <FaqBlock faqs={service.faqs} heading={`${service.name}: common questions`} />

      {related.length > 0 && (
        <section data-navbar-theme="light" className="bg-ivory px-5 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Related solutions</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link key={r.slug} href={r.href} className="group flex flex-col rounded-xl border border-text-dark/10 bg-bg-light p-6 transition-colors hover:border-text-dark/25">
                  <ItIcon name={r.icon} className="size-5 text-violet" />
                  <span className="mt-4 font-heading text-base font-semibold text-text-dark">{r.name}</span>
                  <span className="mt-2 line-clamp-3 text-sm text-text-muted">{r.description}</span>
                  <ArrowUpRight className="mt-4 size-4 text-text-muted transition-colors group-hover:text-violet" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ClosingCta
        heading="Let's scope it properly."
        subtext={`Tell us what you need from ${service.name.toLowerCase()} — we'll come back with an honest view on approach, timeline and cost.`}
        whatsappMessage={`Hi Versa Digital, I'd like to discuss ${service.name}.`}
      />
    </div>
  );
}
