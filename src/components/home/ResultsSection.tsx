"use client";

import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import { caseStudies } from "@/lib/data";

export default function ResultsSection() {
  return (
    <section id="portfolio-results" data-navbar-theme="dark" className="scroll-mt-20 bg-bg-dark px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet-light">
            / PROOF OF WORK
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
            Results we delivered.
          </h2>
        </Reveal>
      </div>

      <StaggerGroup className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {caseStudies.map((cs) => (
          <StaggerItem key={cs.id}>
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-violet-light/40">
              <span className="font-heading text-4xl font-extrabold text-violet-light">{cs.metric}</span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/40">
                {cs.metricLabel}
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-white">{cs.client}</h3>
              <p className="mt-1 text-xs font-medium text-violet-light">{cs.service}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{cs.result}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
