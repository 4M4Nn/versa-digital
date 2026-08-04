import type { Metadata } from "next";
import Link from "next/link";
import { Search, Sparkles, Share2, Target, Video, Compass, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { whatsappUrl } from "@/lib/whatsapp";
import { fullServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI SEO, AEO, social media marketing, performance marketing, content production, brand strategy, and local SEO — Versa Digital's full service breakdown.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  sparkles: Sparkles,
  share2: Share2,
  target: Target,
  video: Video,
  compass: Compass,
  "map-pin": MapPin,
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        label="/ WHAT WE DO"
        heading="Every service your brand needs to grow."
        subtext="Seven disciplines, one AI-powered team — strategy, creative, and performance working together."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {fullServices.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.id} delay={(i % 2) * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-violet/15 bg-white p-7 shadow-sm">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-violet-pale">
                    <Icon className="size-6 text-violet" />
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-bold text-text-dark">{service.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{service.description}</p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet">Our Process</p>
                    <ol className="mt-2 space-y-1.5">
                      {service.process.map((step, si) => (
                        <li key={step} className="flex items-start gap-2 text-sm text-text-dark/80">
                          <span className="font-mono text-xs text-violet/60">{String(si + 1).padStart(2, "0")}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-5 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet">Results</p>
                    <ul className="mt-2 space-y-1.5">
                      {service.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-text-dark/80">
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-violet" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={whatsappUrl(`Hi Versa Digital, I'd like to know more about ${service.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet hover:text-violet-light"
                  >
                    Get Started <ArrowRight className="size-4" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mx-auto mt-14 max-w-lg text-center">
            <Link
              href="/packages"
              className="inline-flex min-h-12 items-center rounded-full bg-violet px-8 text-sm font-semibold text-white transition-colors hover:bg-violet-light"
            >
              See Pricing Packages
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
