import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import AeoIntroSection from "@/components/home/AeoIntroSection";
import MagneticButton from "@/components/shared/MagneticButton";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "AEO — Answer Engine Optimization | Kerala's First",
  description:
    "Versa Digital is Kerala's first Answer Engine Optimization (AEO) agency — making your business the answer ChatGPT, Perplexity, and Google AI give.",
};

const HOW_IT_WORKS = [
  { step: "01", title: "AI Visibility Audit", description: "We check what ChatGPT, Perplexity, and Google AI Overviews currently say about your business and industry." },
  { step: "02", title: "Structured Content & Schema", description: "We rebuild your content into clear, fact-based, machine-readable formats AI models can trust and cite." },
  { step: "03", title: "Trust Signal Building", description: "Consistent, accurate business information across every directory and platform AI models cross-reference." },
  { step: "04", title: "AI Answer Tracking", description: "We monitor what AI engines say about you over time and keep refining." },
];

const WHY_2026 = [
  "AI search usage has overtaken traditional search for a growing share of queries",
  "AI engines give ONE confident answer — not ten blue links to choose from",
  "Being the AI's answer means being the only option a customer hears",
  "Most competitors haven't started optimizing for this yet — the window is now",
];

export default function AeoPage() {
  return (
    <div>
      <PageHero
        label="/ AEO · KERALA'S FIRST"
        heading="Be the answer AI gives."
        subtext="Answer Engine Optimization is the discipline of making your business the trusted answer ChatGPT, Perplexity, and Google AI recommend."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              What is AEO?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
              Answer Engine Optimization is the practice of structuring your business&apos;s online
              presence so AI systems can understand, trust, and directly recommend you — the same
              way SEO optimizes for search engine results pages, AEO optimizes for the single
              answer an AI model gives.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Why AEO matters in 2026
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 space-y-3">
            {WHY_2026.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-violet" />
                  <p className="text-sm text-text-dark md:text-base">{point}</p>
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
              How AEO works
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {HOW_IT_WORKS.map((item) => (
              <StaggerItem key={item.step}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="font-mono text-xs text-violet-light">{item.step}</span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <AeoIntroSection />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Be first. Be the answer.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Kerala&apos;s AEO opportunity won&apos;t stay open forever. Get a free consultation on
            where your business stands today.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like an AEO consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Get AEO Consultation
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
