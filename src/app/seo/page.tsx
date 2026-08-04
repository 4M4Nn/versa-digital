import type { Metadata } from "next";
import { Check, TrendingUp } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import SeoPackagesSection from "@/components/home/SeoPackagesSection";
import MagneticButton from "@/components/shared/MagneticButton";
import SEOVisual from "@/components/home/visuals/SEOVisual";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "AI SEO Services in Kerala",
  description:
    "Rank higher on Google with Versa Digital's AI-powered SEO services — technical audits, keyword strategy, content, and link building for Kerala businesses.",
};

const WHY_ITEMS = [
  { title: "More Qualified Traffic", description: "Rank for the exact terms your customers search, not just any traffic." },
  { title: "Compounding Growth", description: "Unlike ads, SEO results build on themselves month over month." },
  { title: "Trust & Credibility", description: "Ranking organically signals authority that paid ads can't replicate." },
  { title: "Long-Term ROI", description: "The best cost-per-lead channel once momentum builds." },
];

const PROCESS = [
  { step: "01", title: "Technical & Competitor Audit", description: "We analyze your site's technical health and where competitors are beating you." },
  { step: "02", title: "Keyword & Content Strategy", description: "Research-backed keyword targeting mapped to real buyer intent." },
  { step: "03", title: "On-Page + Off-Page Optimization", description: "Content, structure, and authority-building link work." },
  { step: "04", title: "Monthly Reporting & Refinement", description: "Transparent reporting on rankings, traffic, and what's next." },
];

const RESULTS = ["3x organic traffic in 90 days", "Top 3 Google rankings for target keywords", "Higher quality, higher-intent leads", "Sustainable, compounding growth"];

export default function SeoPage() {
  return (
    <div>
      <PageHero
        label="/ AI SEO"
        heading="Rank higher. Get found first."
        subtext="Search engine optimization built on data, not guesswork — for businesses that want to own page one."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SEOVisual />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
                What is SEO, really?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                Search Engine Optimization is the practice of structuring your website and content
                so Google understands what you offer and trusts you enough to rank you above
                competitors — for the exact searches your customers are already typing.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                Done right, it&apos;s the highest-ROI marketing channel available: the traffic keeps
                arriving long after the work is done, unlike ads that stop the moment you stop
                paying.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Why SEO matters for your business
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                  <TrendingUp className="size-5 text-violet" />
                  <h3 className="mt-3 font-heading text-base font-bold text-text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-white md:text-4xl">
              Our SEO process
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {PROCESS.map((p) => (
              <StaggerItem key={p.step}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="font-mono text-xs text-violet-light">{p.step}</span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{p.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-violet-light/30 bg-violet/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-light">Results you can expect</p>
              <ul className="mt-4 space-y-2.5">
                {RESULTS.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-violet-light" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <SeoPackagesSection />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Want to know where you actually stand?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Get a free SEO audit — no strings attached. We&apos;ll show you exactly where you&apos;re
            losing traffic to competitors.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like a free SEO audit.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Get Free SEO Audit
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
