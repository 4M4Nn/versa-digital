import Link from "next/link";
import { homeContent, itStats } from "@/lib/data";
import { markets } from "@/lib/markets";

export default function HomeHero() {
  const { hero } = homeContent;
  return (
    <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
      <div className="bg-hairline-grid pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 60% at 82% 8%, rgba(107,33,168,0.38) 0%, rgba(12,11,16,0) 70%), radial-gradient(35% 45% at 10% 100%, rgba(176,141,87,0.16) 0%, rgba(12,11,16,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light">{hero.eyebrow}</p>
        <h1 className="mt-7 max-w-5xl font-heading text-[11vw] font-semibold leading-[0.98] text-white sm:text-6xl lg:text-[5.6rem]">
          {hero.headline}
          <span className="mt-2 block font-serif font-medium italic text-gold-light">{hero.accent}</span>
        </h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <p className="max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{hero.subtext}</p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex min-h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-text-dark transition-colors hover:bg-gold-light"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-8 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Serving clients in</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {markets.map((m) => (
                <Link key={m.slug} href={`/global/${m.slug}`} className="text-sm text-white/80 transition-colors hover:text-white">
                  {m.country}
                </Link>
              ))}
              <span className="text-sm text-white/80">India</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {itStats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-semibold text-white md:text-4xl">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase leading-snug tracking-wide text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
