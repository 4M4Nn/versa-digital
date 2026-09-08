import type { Metadata } from "next";
import Link from "next/link";
import { Search, Sparkles, Share2, Target, Video, Compass, MapPin, Code, Magnet, CheckCircle2, ArrowRight, Cpu } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { whatsappUrl } from "@/lib/whatsapp";
import { fullServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Digital Services",
  description:
    "Performance marketing, AI SEO/AEO, social media marketing, web development, lead generation, and branding & content — Versa Digital's full Digital Services portal.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  search: Search,
  sparkles: Sparkles,
  share2: Share2,
  target: Target,
  video: Video,
  compass: Compass,
  "map-pin": MapPin,
  code: Code,
  magnet: Magnet,
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        label="/ DIGITAL SERVICES"
        heading="Every service your brand needs to grow."
        subtext="Performance marketing, SEO/AEO, social, web development, lead generation and branding — one AI-powered team, working together."
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

                  <div className="mt-6 flex items-center gap-5">
                    {service.href && (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-dark hover:text-violet"
                      >
                        Learn More <ArrowRight className="size-4" />
                      </Link>
                    )}
                    <a
                      href={whatsappUrl(`Hi Versa Digital, I'd like to know more about ${service.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet hover:text-violet-light"
                    >
                      Get Started <ArrowRight className="size-4" />
                    </a>
                  </div>
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

      <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-16 md:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-9 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-violet/20">
                <Cpu className="size-6 text-violet-light" />
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold text-white">Also need IT solutions?</h2>
                <p className="mt-1 text-sm text-white/60">SaaS, AI automation, agentic AI, internal platforms, custom ERP/CRM/HRMS — explore our IT Solutions portal.</p>
              </div>
            </div>
            <Link
              href="/it-solutions"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-light"
            >
              Explore IT Solutions <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
