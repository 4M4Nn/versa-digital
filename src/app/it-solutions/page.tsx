import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Bot, LayoutDashboard, Network, CheckCircle2, ArrowRight, Megaphone } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  title: "IT Solutions — AI Automation, Custom ERP & CRM",
  description:
    "Versa Digital & IT Solutions builds SaaS & EdTech products, AI automation and agentic AI projects, internal platforms, and custom ERP/CRM/HRMS systems — end-to-end IT solutions from Kochi, Kerala.",
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "graduation-cap": GraduationCap,
  bot: Bot,
  "layout-dashboard": LayoutDashboard,
  network: Network,
};

export default function ItSolutionsPage() {
  return (
    <div>
      <ServiceSchema
        name="IT Solutions — AI Automation, Custom ERP & CRM"
        description="SaaS & EdTech product builds, AI automation and agentic AI projects, internal platforms, and custom ERP/CRM/HRMS systems delivered end-to-end by Versa Digital & IT Solutions."
        serviceType="IT Solutions & Business Automation"
        url="/it-solutions"
      />

      <PageHero
        label="/ IT SOLUTIONS"
        heading="IT Solutions that run your business."
        subtext="SaaS products, AI automation and agentic AI, internal platforms, and full custom ERP/CRM/HRMS systems — built end-to-end, so your business runs on one connected stack instead of a dozen disconnected tools."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Marketing gets you found. IT Solutions makes you run.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
              Most businesses we work with hit the same wall after their marketing starts working:
              the leads and orders arrive faster than their spreadsheets, WhatsApp threads, and
              disconnected software can handle. Our IT Solutions portal exists to close that gap —
              custom software, AI automation and agentic AI built or integrated around how your
              business actually operates, not a generic off-the-shelf template you have to bend
              your process around.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          {techOfferings.map((offering, i) => {
            const Icon = ICONS[offering.icon];
            return (
              <Reveal key={offering.id} delay={(i % 2) * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-violet/15 bg-white p-7 shadow-sm">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-violet-pale">
                    <Icon className="size-6 text-violet" />
                  </div>
                  <h2 className="mt-5 font-heading text-xl font-bold text-text-dark">{offering.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{offering.description}</p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet">Our Process</p>
                    <ol className="mt-2 space-y-1.5">
                      {offering.process.map((step, si) => (
                        <li key={step} className="flex items-start gap-2 text-sm text-text-dark/80">
                          <span className="font-mono text-xs text-violet/60">{String(si + 1).padStart(2, "0")}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-5 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet">Outcomes</p>
                    <ul className="mt-2 space-y-1.5">
                      {offering.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-text-dark/80">
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-violet" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {offering.href && (
                    <Link
                      href={offering.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet hover:text-violet-light"
                    >
                      Learn More <ArrowRight className="size-4" />
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-bg-dark px-5 py-16 md:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-9 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-violet/20">
                <Megaphone className="size-6 text-violet-light" />
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold text-white">Also need marketing?</h2>
                <p className="mt-1 text-sm text-white/60">Performance marketing, SEO/AEO, social, web development & lead generation — explore our Digital Services portal.</p>
              </div>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-light"
            >
              Explore Digital Services <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Not sure which technology fits your business?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Tell us how your team currently operates — we&apos;ll recommend the right system,
            no jargon, no over-selling.
          </p>
          <a
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss a technology solution for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center rounded-full bg-violet px-8 text-sm font-semibold text-white transition-colors hover:bg-violet-light"
          >
            Talk to Our Tech Team
          </a>
        </Reveal>
      </section>
    </div>
  );
}
