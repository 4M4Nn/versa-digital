"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import MarketingBackdrop from "@/components/shared/MarketingBackdrop";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import { seoPackages } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function SeoPackagesSection() {
  return (
    <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -right-20 top-10 size-80 rounded-full bg-violet/15 blur-3xl" />
        <div className="absolute -left-24 bottom-0 size-72 rounded-full bg-violet-light/10 blur-3xl" />
      </div>
      <MarketingBackdrop variant="d" tone="dark" />
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet-light">
            / SEO PACKAGES
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
            Dominate search results.
          </h2>
        </Reveal>
      </div>

      <StaggerGroup className="relative z-10 mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {seoPackages.map((pkg) => (
          <StaggerItem key={pkg.id}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
                pkg.badge ? "border-violet-light bg-white/[0.06]" : "border-white/10 bg-white/[0.03]"
              )}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-light px-4 py-1 text-[10px] font-bold tracking-wider text-white">
                  {pkg.badge}
                </span>
              )}
              <h3 className="mt-3 font-heading text-xl font-bold text-white">{pkg.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-3xl font-extrabold text-white">{pkg.price}</span>
                <span className="text-sm text-white/50">{pkg.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-violet-light" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-white/10 pt-4 text-xs text-white/50">
                Ideal for: {pkg.idealFor}
              </p>

              <Link
                href="/contact"
                className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-violet text-sm font-semibold text-white transition-colors hover:bg-violet-light"
              >
                Get Started
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
