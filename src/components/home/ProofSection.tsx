import { caseStudies, homeContent, testimonials } from "@/lib/data";

export default function ProofSection() {
  return (
    <section data-navbar-theme="light" className="bg-ivory px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">How we work</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 md:grid-cols-4">
          {homeContent.approach.map((step, i) => (
            <div key={step.title} className="bg-bg-light p-7">
              <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-text-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Results</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-text-dark md:text-5xl">Measured in outcomes, not activity.</h2>
          </div>
          <div className="divide-y divide-text-dark/10 border-y border-text-dark/10">
            {caseStudies.map((c) => (
              <div key={c.id} className="grid gap-4 py-7 sm:grid-cols-[140px_1fr] sm:items-baseline">
                <div>
                  <p className="font-heading text-5xl font-semibold text-violet">{c.metric}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-text-muted">{c.metricLabel}</p>
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-text-dark">{c.client}</p>
                  <p className="text-xs uppercase tracking-wide text-gold">{c.service}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-text-dark/10 bg-bg-light p-8">
              <blockquote className="flex-1 font-serif text-xl italic leading-relaxed text-text-dark">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 border-t border-text-dark/10 pt-4 text-sm">
                <span className="font-semibold text-text-dark">{t.name}</span>
                <span className="text-text-muted"> — {t.business}, {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
