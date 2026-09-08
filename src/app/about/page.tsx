import type { Metadata } from "next";
import { Bot, BarChart3, Palette, ShieldCheck, Zap } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import { founders, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Versa Digital & IT Solutions is part of Versa Growth Ventures — Kerala's first AEO-driven digital services and IT solutions company, spanning marketing, AI automation and full business automation.",
};

const VALUES = [
  { icon: Bot, title: "AI-First", description: "We build every workflow around AI acceleration, not around resisting it." },
  { icon: BarChart3, title: "Data-Driven", description: "Every decision traces back to a number, not a hunch." },
  { icon: Palette, title: "Creative", description: "Premium visual storytelling — never generic, never templated." },
  { icon: ShieldCheck, title: "Transparent", description: "Clear reporting, honest timelines, no vanity metrics dressed up as results." },
  { icon: Zap, title: "Fast", description: "Speed is a competitive advantage we take seriously — for you and for us." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        label="/ ABOUT VERSA DIGITAL & IT SOLUTIONS"
        heading="We build digital brands that perform."
        subtext={`Part of ${siteConfig.partOf} — Kerala's first AEO management agency.`}
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-base leading-relaxed text-text-muted md:text-lg">
              Versa Digital was founded on a simple observation: most digital marketing in Kerala was
              still built for a search landscape that no longer exists. Businesses were investing in
              generic social media management and Google-only SEO while an entirely new discovery
              layer — AI answer engines — was quietly becoming how people actually found
              recommendations.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
              As part of Versa Growth Ventures, we built Versa Digital to close that gap — combining
              AI-powered production, strategic marketing discipline, and Kerala&apos;s first dedicated
              Answer Engine Optimization practice into one agency.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
              That same discipline led us further: the same businesses asking us to build their
              brand were also running on spreadsheets, disconnected tools, and manual processes.
              So we became Versa Digital &amp; IT Solutions — two portals under one roof. Digital
              Services grows your brand and pipeline. IT Solutions builds the SaaS products, AI
              automation and agentic AI projects, and custom ERP, CRM and HRMS systems that run
              your business day to day.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.15}>
              <div className="h-full rounded-2xl border border-violet/15 bg-white p-7 shadow-sm">
                <p className="font-mono text-xs font-semibold tracking-wider text-violet">MISSION</p>
                <p className="mt-3 font-heading text-xl font-bold text-text-dark">
                  We build digital brands that perform.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="h-full rounded-2xl border border-violet/15 bg-white p-7 shadow-sm">
                <p className="font-mono text-xs font-semibold tracking-wider text-violet">VISION</p>
                <p className="mt-3 font-heading text-xl font-bold text-text-dark">
                  Kerala&apos;s most results-driven agency.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-white md:text-4xl">
              Founders
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-3">
            {founders.map((founder) => (
              <StaggerItem key={founder.name}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-violet/20 font-heading text-xl font-bold text-violet-light">
                    {founder.name.charAt(0)}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-white">{founder.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-violet-light">{founder.role}</p>
                  <p className="mt-3 text-sm text-white/65">{founder.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Our values
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl border border-violet/15 bg-white p-5 text-center shadow-sm">
                  <v.icon className="mx-auto size-6 text-violet" />
                  <p className="mt-3 font-heading text-sm font-bold text-text-dark">{v.title}</p>
                  <p className="mt-2 text-xs text-text-muted">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
}
