import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ClosingCta from "@/components/shared/ClosingCta";
import FaqBlock from "@/components/shared/FaqBlock";
import { globalFaqs } from "@/lib/data";
import { markets, marketsIntro } from "@/lib/markets";

export const metadata: Metadata = {
  alternates: { canonical: "/global" },
  title: "Global Digital Marketing & IT Solutions Partner — UAE, UK, USA & More",
  description:
    "Versa Digital & IT Solutions serves businesses in the UAE, UK, USA, Saudi Arabia, Qatar, Canada, Australia and Singapore with SEO, AEO, performance marketing, software engineering and AI automation — delivered from Kochi, India.",
  keywords: [
    "offshore digital marketing agency India",
    "offshore software development company India",
    "outsource SEO to India",
    "IT outsourcing company India",
    "digital agency for UAE UK USA",
  ],
};

const REGIONS = ["Gulf", "Europe", "North America", "Asia-Pacific"] as const;

export default function GlobalPage() {
  return (
    <div>
      <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="bg-hairline-grid pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(55% 70% at 20% 0%, rgba(176,141,87,0.22) 0%, rgba(12,11,16,0) 70%)" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Global", href: "/global" }]} />
          <p className="mt-10 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">{marketsIntro.label}</p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] text-white md:text-6xl">{marketsIntro.heading}</h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{marketsIntro.subtext}</p>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl space-y-16">
          {REGIONS.map((region) => {
            const list = markets.filter((m) => m.region === region);
            if (list.length === 0) return null;
            return (
              <div key={region}>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{region}</p>
                <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 md:grid-cols-2 lg:grid-cols-3">
                  {list.map((m) => (
                    <Link key={m.slug} href={`/global/${m.slug}`} className="group flex flex-col bg-bg-light p-8 transition-colors hover:bg-white">
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-xs text-text-muted">{m.isoCode} · {m.currency}</span>
                        <ArrowUpRight className="size-4 text-text-muted transition-colors group-hover:text-violet" />
                      </div>
                      <h2 className="mt-6 font-heading text-2xl font-semibold text-text-dark">{m.country}</h2>
                      <p className="mt-1 text-sm text-text-muted">{m.cities.slice(0, 4).join(" · ")}</p>
                      <p className="mt-5 text-sm leading-relaxed text-text-dark/75">{m.overlap}</p>
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
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">How we work internationally</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold text-white md:text-4xl">Offshore value, without offshore friction</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {marketsIntro.principles.map((p) => (
              <div key={p.title} className="bg-bg-dark p-8">
                <h3 className="font-heading text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={globalFaqs} heading="Working with an offshore partner: your questions answered" label="Global FAQ" />

      <ClosingCta
        heading="Wherever you are, let's talk."
        subtext="Tell us your market, your goals and your timeline. We'll schedule a call in your time zone."
        whatsappMessage="Hi Versa Digital, I'm contacting you from outside India and would like to discuss a project."
      />
    </div>
  );
}
