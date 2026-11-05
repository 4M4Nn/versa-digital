import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { markets, marketsIntro } from "@/lib/markets";

export default function MarketsSection() {
  return (
    <section data-navbar-theme="light" className="bg-bg-light px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Global delivery</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-text-dark md:text-5xl">
              Built for your market. Aligned to your clock.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-text-muted">{marketsIntro.subtext}</p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((m) => (
            <Link key={m.slug} href={`/global/${m.slug}`} className="group flex min-h-48 flex-col bg-bg-light p-7 transition-colors hover:bg-white">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-text-muted">{m.isoCode}</span>
                <ArrowUpRight className="size-4 text-text-muted transition-colors group-hover:text-violet" />
              </div>
              <h3 className="mt-auto pt-10 font-heading text-xl font-semibold text-text-dark">{m.country}</h3>
              <p className="mt-1 text-xs text-text-muted">{m.cities.slice(0, 3).join(" · ")}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {marketsIntro.principles.map((p) => (
            <div key={p.title} className="border-t border-text-dark/15 pt-5">
              <h3 className="font-heading text-[15px] font-semibold text-text-dark">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
