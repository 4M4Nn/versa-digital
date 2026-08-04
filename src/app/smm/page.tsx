import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import SocialVisual from "@/components/home/visuals/SocialVisual";
import MagneticButton from "@/components/shared/MagneticButton";
import { whatsappUrl } from "@/lib/whatsapp";
import { growthPackages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description:
    "Instagram, Facebook, LinkedIn, YouTube, and Google Business Profile management from Versa Digital — premium content that stops the scroll.",
};

const PLATFORMS = [
  { name: "Meta (Instagram + Facebook)", description: "Daily content, community management, and Meta Ads across your most active audience." },
  { name: "LinkedIn", description: "B2B-focused content and thought leadership for founders and service businesses." },
  { name: "YouTube", description: "Shorts and long-form video management to build a lasting content library." },
  { name: "Google Business Profile", description: "Local visibility, reviews, and posts that drive nearby customers to choose you." },
];

const CONTENT_TYPES = ["Premium social media posters", "Short-form reels & shorts", "AI-generated video content", "Special day & festival creatives", "Story and highlight design", "Caption writing with AI assistance"];

const PROCESS = [
  { step: "01", title: "Brand voice & content pillars" },
  { step: "02", title: "Monthly content calendar" },
  { step: "03", title: "Daily posting & community management" },
  { step: "04", title: "Monthly growth report" },
];

export default function SmmPage() {
  return (
    <div>
      <PageHero
        label="/ SOCIAL MEDIA MARKETING"
        heading="Content that stops the scroll."
        subtext="Premium visual storytelling across every platform your audience actually spends time on."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <SocialVisual />
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Platform by platform
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {PLATFORMS.map((p) => (
              <StaggerItem key={p.name}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-text-dark">{p.name}</h3>
                  <p className="mt-2 text-sm text-text-muted">{p.description}</p>
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
              What we create
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT_TYPES.map((c) => (
              <StaggerItem key={c}>
                <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-violet-light" /> {c}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.2}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((p) => (
                <div key={p.step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="font-mono text-xs text-violet-light">{p.step}</span>
                  <p className="mt-2 text-sm font-semibold text-white">{p.title}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              SMM is included in every Digital Growth Plan
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              Social media management scales with your plan — from Starter&apos;s Meta-only setup to
              Unlimited&apos;s complete multi-platform management.
            </p>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {growthPackages.map((pkg) => (
              <StaggerItem key={pkg.id}>
                <div className="rounded-2xl border border-violet/15 bg-white p-6 text-left shadow-sm">
                  <p className="font-heading text-lg font-bold text-text-dark">{pkg.name}</p>
                  <p className="mt-1 text-sm text-violet">
                    {pkg.price} {pkg.period}
                  </p>
                  <p className="mt-3 text-sm text-text-muted">
                    {pkg.features.find((f) => f.key === "posters")?.text} ·{" "}
                    {pkg.features.find((f) => f.key === "reels")?.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <Link
              href="/packages"
              className="mt-8 inline-block text-sm font-semibold text-violet hover:text-violet-light"
            >
              See full package details →
            </Link>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-gradient-to-br from-violet to-dark-shade px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
            Let&apos;s make your feed impossible to scroll past.
          </h2>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to talk about social media marketing.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-white px-8 text-sm font-semibold text-violet hover:opacity-90"
          >
            Get Started
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
