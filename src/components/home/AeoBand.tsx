import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { homeContent } from "@/lib/data";

const ASSISTANTS = ["Google AI Overviews", "ChatGPT", "Gemini", "Perplexity", "Copilot"];

export default function AeoBand() {
  const { aeo } = homeContent;
  return (
    <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 py-24 md:px-8 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(40% 60% at 0% 50%, rgba(107,33,168,0.25) 0%, rgba(12,11,16,0) 70%)" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">{aeo.label}</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-white md:text-5xl">{aeo.heading}</h2>
          <p className="mt-6 text-base leading-relaxed text-white/65 md:text-lg">{aeo.body}</p>
          <ul className="mt-8 space-y-3">
            {aeo.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-white/80">
                <Check className="mt-0.5 size-4 shrink-0 text-gold-light" /> {p}
              </li>
            ))}
          </ul>
          <Link href={aeo.cta.href} className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light hover:text-white">
            {aeo.cta.label} <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Where buyers ask</p>
          <ul className="mt-6 divide-y divide-white/10">
            {ASSISTANTS.map((a, i) => (
              <li key={a} className="flex items-center justify-between py-4">
                <span className="font-heading text-lg text-white">{a}</span>
                <span className="font-mono text-xs text-white/35">{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-white/50">
            We track whether your brand is mentioned, cited or recommended for the questions your buyers ask — every month, in every market you target.
          </p>
        </div>
      </div>
    </section>
  );
}
