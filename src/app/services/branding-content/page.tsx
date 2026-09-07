import type { Metadata } from "next";
import { Compass, Video, Palette, MessageCircle, Camera, Film } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { fullServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Branding & Content — Strategy, Design & Video",
  description:
    "Brand positioning, visual identity, and premium content production — posters, reels, and AI-generated video, produced consistently every week by Versa Digital.",
};

const brandService = fullServices.find((s) => s.id === "brand-strategy")!;
const contentService = fullServices.find((s) => s.id === "content-video")!;

const BRAND_ITEMS = [
  { icon: Compass, title: "Positioning First", description: "Every visual and word we produce flows from a clear positioning framework, not guesswork." },
  { icon: Palette, title: "Visual Identity", description: "Colors, typography, and design guidelines that make your brand instantly recognizable." },
  { icon: MessageCircle, title: "A Consistent Voice", description: "The same tone across your website, social captions, and ads — never sounding like five different brands." },
];

const CONTENT_ITEMS = [
  { icon: Film, title: "Premium Posters & Reels", description: "Scroll-stopping visual content designed for how people actually consume social media." },
  { icon: Camera, title: "AI-Assisted + Camera Shoots", description: "AI-generated video content for speed, professional camera shoots for premium campaigns." },
  { icon: Video, title: "Consistent Weekly Output", description: "A content calendar that ships every week — not a burst of posts followed by silence." },
];

export default function BrandingContentPage() {
  return (
    <div>
      <ServiceSchema
        name="Branding & Content"
        description="Brand strategy, visual identity, and content & video production for growing businesses."
        serviceType="Branding and Content Production"
        url="/services/branding-content"
      />

      <PageHero
        label="/ BRANDING & CONTENT"
        heading="A brand worth remembering. Content that proves it."
        subtext="Positioning and visual identity that give every channel a stronger foundation — backed by content production that keeps showing up."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Brand Strategy
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
              A logo isn&apos;t a brand. Brand strategy is the positioning, voice, and visual system
              that makes every other channel — ads, social, your website — work harder because
              they&apos;re all pulling in the same direction. We start here with any new client
              relationship, because campaigns built on unclear positioning eventually plateau.
            </p>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {BRAND_ITEMS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-violet/15 bg-white p-6 shadow-sm">
                  <item.icon className="size-5 text-violet" />
                  <h3 className="mt-3 font-heading text-base font-bold text-text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl bg-violet-pale p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet">Our brand strategy process</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {brandService.process.map((step, i) => (
                  <div key={step} className="flex items-start gap-2.5 text-sm text-text-dark/80">
                    <span className="font-mono text-xs text-violet/60">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              Content & Video Production
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/65">
              Strategy means nothing without content that actually ships. We produce premium social
              posters, short-form reels, and AI-generated video content on a consistent weekly
              schedule — combining AI-assisted production for speed with professional camera shoots
              for campaigns that need it.
            </p>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {CONTENT_ITEMS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <item.icon className="size-5 text-violet-light" />
                  <h3 className="mt-3 font-heading text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-violet-light/30 bg-violet/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-light">What you get</p>
              <ul className="mt-4 space-y-2.5">
                {contentService.results.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Video className="mt-0.5 size-4 shrink-0 text-violet-light" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Ready for a brand that&apos;s consistent everywhere?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Tell us where your brand feels inconsistent today — we&apos;ll show you what a unified
            strategy and content system would look like.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to talk about branding and content.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Get Started
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
