"use client";

import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import { whyPillars } from "@/lib/data";

export default function WhyUsSection() {
  return (
    <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet">
              / WHY VERSA DIGITAL
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
              Not just an agency.
              <br />
              Your growth partner.
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {whyPillars.map((pillar) => (
            <StaggerItem key={pillar}>
              <div className="flex h-full items-center justify-center rounded-2xl border border-violet/15 bg-white px-4 py-6 text-center shadow-sm">
                <span className="font-heading text-sm font-bold text-text-dark">{pillar}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <p className="mt-20 text-center font-heading text-4xl font-extrabold leading-tight text-dark-shade md:text-6xl">
            Strategize.
            <br />
            Create.
            <br />
            Scale.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-text-muted">
              &ldquo;Versa Digital combines creativity, AI, and performance marketing to help
              brands build visibility, generate quality leads, and achieve measurable business
              growth across every digital platform.&rdquo;
            </p>
            <p className="mt-4 font-semibold text-text-dark">
              We don&apos;t just manage social media — we build digital brands that perform.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
