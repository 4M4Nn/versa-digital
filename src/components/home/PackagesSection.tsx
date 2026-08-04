"use client";

import Link from "next/link";
import { Check, X, Palette, PenTool, Megaphone, Smartphone, Search, BarChart3 } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import MarketingBackdrop from "@/components/shared/MarketingBackdrop";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import { growthPackages, allPlansInclude } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  palette: Palette,
  pen: PenTool,
  megaphone: Megaphone,
  smartphone: Smartphone,
  search: Search,
  chart: BarChart3,
};

const CARD_STYLE = {
  outline: "bg-white border-2 border-violet/30",
  filled: "bg-gradient-to-b from-violet to-dark-shade border-2 border-violet text-white lg:scale-[1.05]",
  dark: "bg-bg-dark border-2 border-gold/40 text-white",
};

export default function PackagesSection() {
  return (
    <section data-navbar-theme="light" className="relative overflow-hidden bg-bg-light/90 px-5 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-24 top-10 size-72 rounded-full bg-violet/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 size-80 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <MarketingBackdrop variant="b" tone="light" />
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet">
            / DIGITAL GROWTH PLANS
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
            Choose the strategy
            <br />
            that fits your business.
          </h2>
        </Reveal>
      </div>

      <StaggerGroup className="relative z-10 mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-center">
        {growthPackages.map((pkg) => {
          const dark = pkg.style === "filled" || pkg.style === "dark";
          return (
            <StaggerItem key={pkg.id}>
              <div className={cn("relative flex h-full flex-col rounded-3xl p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl", CARD_STYLE[pkg.style])}>
                {pkg.badge && (
                  <span
                    className={cn(
                      "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-bold tracking-wider",
                      pkg.featured ? "bg-gold text-white" : dark ? "bg-white text-bg-dark" : "bg-violet text-white"
                    )}
                  >
                    {pkg.badge}
                  </span>
                )}

                <h3 className={cn("mt-3 font-heading text-xl font-bold", dark ? "text-white" : "text-text-dark")}>
                  {pkg.name}
                </h3>
                <p className={cn("mt-1 text-sm", dark ? "text-white/70" : "text-text-muted")}>{pkg.description}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className={cn("font-heading text-3xl font-extrabold", dark ? "text-white" : "text-text-dark")}>
                    {pkg.price}
                  </span>
                  <span className={cn("text-sm", dark ? "text-white/60" : "text-text-muted")}>{pkg.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li
                      key={f.text}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        f.included ? (dark ? "text-white/90" : "text-text-dark") : dark ? "text-white/35" : "text-text-muted/60"
                      )}
                    >
                      {f.included ? (
                        <Check className={cn("mt-0.5 size-4 shrink-0", pkg.style === "dark" ? "text-gold" : dark ? "text-white" : "text-violet")} />
                      ) : (
                        <X className="mt-0.5 size-4 shrink-0 opacity-50" />
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-current/10 pt-4">
                  <p className={cn("text-[10px] font-semibold uppercase tracking-wider", dark ? "text-white/50" : "text-text-muted")}>
                    Ideal for
                  </p>
                  <p className={cn("mt-1 text-xs", dark ? "text-white/70" : "text-text-muted")}>
                    {pkg.idealFor.join(" · ")}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className={cn(
                    "mt-6 flex min-h-12 items-center justify-center rounded-full text-sm font-semibold transition-opacity hover:opacity-90",
                    pkg.style === "outline" && "border-2 border-violet text-violet",
                    pkg.style === "filled" && "bg-white text-violet",
                    pkg.style === "dark" && "bg-gold text-white"
                  )}
                >
                  {pkg.ctaLabel}
                </Link>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      <Reveal delay={0.2}>
        <div className="relative z-10 mx-auto mt-16 max-w-4xl text-center">
          <p className="text-sm font-semibold text-text-muted">All plans include —</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {allPlansInclude.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <span key={item.text} className="flex items-center gap-2 text-sm font-medium text-text-dark/80">
                  <Icon className="size-4 text-violet" /> {item.text}
                </span>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
