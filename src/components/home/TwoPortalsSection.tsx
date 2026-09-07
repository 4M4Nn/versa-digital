import Link from "next/link";
import { ArrowRight, Megaphone, Cpu } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { portals } from "@/lib/data";

const ICONS = { "digital-services": Megaphone, technology: Cpu } as const;

export default function TwoPortalsSection() {
  return (
    <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet-light">
              / TWO PORTALS, ONE PARTNER
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-white md:text-5xl">
              Digital Services & Technology.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/65 md:text-lg">
              We build the brand that gets you found, and the software that runs your
              business — end-to-end, under one roof.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {portals.map((portal, i) => {
            const Icon = ICONS[portal.id];
            return (
              <Reveal key={portal.id} delay={0.1 + i * 0.1}>
                <Link
                  href={portal.href}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-violet-light/40 hover:bg-white/[0.07] md:p-10"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-violet/20">
                    <Icon className="size-7 text-violet-light" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-white md:text-3xl">
                    {portal.label}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-violet-light">{portal.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">
                    {portal.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-violet-light">
                    Explore {portal.shortLabel} <ArrowRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
