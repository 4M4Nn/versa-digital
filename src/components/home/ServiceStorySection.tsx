"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SEOVisual from "@/components/home/visuals/SEOVisual";
import SocialVisual from "@/components/home/visuals/SocialVisual";
import AdsVisual from "@/components/home/visuals/AdsVisual";
import VideoVisual from "@/components/home/visuals/VideoVisual";
import type { ServiceStory } from "@/types";
import { cn } from "@/lib/utils";

const VISUALS: Record<string, React.ComponentType> = {
  "seo-aeo": SEOVisual,
  smm: SocialVisual,
  performance: AdsVisual,
  "content-video": VideoVisual,
};

const BG_CLASS = {
  light: "bg-bg-light",
  dark: "bg-bg-dark",
  pale: "bg-violet-pale",
};

const TEXT_CLASS = {
  light: { label: "text-violet", heading: "text-text-dark", body: "text-text-muted", check: "text-violet" },
  dark: { label: "text-violet-light", heading: "text-white", body: "text-white/65", check: "text-violet-light" },
  pale: { label: "text-violet", heading: "text-text-dark", body: "text-text-dark/70", check: "text-violet" },
};

export default function ServiceStorySection({ service }: { service: ServiceStory }) {
  const Visual = VISUALS[service.id];
  const theme = TEXT_CLASS[service.background];
  const navTheme = service.background === "dark" ? "dark" : "light";

  return (
    <section
      data-navbar-theme={navTheme}
      className={cn("relative overflow-hidden px-5 py-20 md:px-8 md:py-28", BG_CLASS[service.background])}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16",
          service.reversed && "lg:[&>*:first-child]:order-2"
        )}
      >
        <Reveal>
          <Visual />
        </Reveal>

        <div>
          <Reveal>
            <span className={cn("font-mono text-[11px] font-semibold tracking-[0.25em]", theme.label)}>
              {service.number} / {service.label.toUpperCase()}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className={cn("mt-4 font-heading text-4xl font-extrabold leading-[1.05] md:text-5xl", theme.heading)}>
              {service.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <div className="mt-5 space-y-3">
            {service.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <p className={cn("text-base leading-relaxed", theme.body)}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <ul className="mt-6 space-y-2.5">
              {service.results.map((r) => (
                <li key={r} className={cn("flex items-start gap-2.5 text-sm font-medium", theme.heading)}>
                  <CheckCircle2 className={cn("mt-0.5 size-4 shrink-0", theme.check)} />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.5}>
            <Link
              href={service.ctaHref}
              className={cn(
                "mt-7 inline-flex min-h-12 items-center rounded-full px-7 text-sm font-semibold transition-colors",
                service.background === "dark"
                  ? "bg-white text-bg-dark hover:bg-white/90"
                  : "bg-violet text-white hover:bg-violet-light"
              )}
            >
              {service.ctaLabel}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
