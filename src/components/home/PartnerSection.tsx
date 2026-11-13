import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homePartnerContent } from "@/lib/data";

export default function PartnerSection() {
  const c = homePartnerContent;
  return (
    <section data-navbar-theme="light" className="bg-ivory px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{c.label}</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-text-dark md:text-5xl">{c.heading}</h2>
          <p className="mt-6 text-base leading-relaxed text-text-muted md:text-lg">{c.body}</p>
          <div className="mt-10 flex flex-wrap gap-6">
            {c.ctas.map((cta) => (
              <Link key={cta.href} href={cta.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet hover:text-text-dark">
                {cta.label} <ArrowUpRight className="size-4" />
              </Link>
            ))}
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 sm:grid-cols-2">
          {c.audiences.map((a, i) => (
            <div key={a.title} className="bg-ivory p-7">
              <p className="font-mono text-xs text-text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-heading text-lg font-semibold text-text-dark">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
