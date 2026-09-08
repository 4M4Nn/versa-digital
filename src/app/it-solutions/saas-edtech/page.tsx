import type { Metadata } from "next";
import Link from "next/link";
import { Check, Layers, Rocket, ShieldCheck, BarChart3 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  title: "SaaS & EdTech Product Development",
  description:
    "End-to-end SaaS and EdTech product builds — from MVP to a scalable, multi-tenant platform with subscription billing and analytics. Built by Versa Digital, Kochi.",
};

const service = techOfferings.find((o) => o.id === "saas-edtech")!;

const WHY_ITEMS = [
  { icon: Rocket, title: "MVP to Market, Fast", description: "A working, sellable product in weeks — built to validate demand, not sit in development for a year." },
  { icon: Layers, title: "Multi-Tenant From Day One", description: "Architecture built to serve hundreds of customers on one codebase, not rebuilt later when you scale." },
  { icon: ShieldCheck, title: "Billing & Access Built In", description: "Subscription billing, role-based access, and usage limits wired in — not bolted on after launch." },
  { icon: BarChart3, title: "Analytics From Launch", description: "Product usage and business metrics tracked from day one, so you know what's working." },
];

export default function SaasEdtechPage() {
  return (
    <div>
      <ServiceSchema
        name="SaaS & EdTech Product Development"
        description={service.description}
        serviceType="Software Product Development"
        url="/it-solutions/saas-edtech"
      />

      <PageHero
        label="/ SAAS & EDTECH"
        heading="Your product, built to scale from day one."
        subtext="End-to-end SaaS and EdTech product builds — from first prototype to a multi-tenant platform your customers pay for every month."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              What we actually build
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Whether you&apos;re a software business building your first product or an education
              provider turning offline courses into a learning platform, the underlying
              engineering problem is the same: a system that serves many customers or students
              from one codebase, keeps their data cleanly separated, and can bill them
              automatically every month without you chasing a single invoice.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              We build on modern, production-proven frameworks — the same stack this site itself
              runs on — so what ships isn&apos;t a fragile prototype, but a product ready for real
              users and real payments from launch day.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Why it matters
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                  <item.icon className="size-5 text-violet" />
                  <h3 className="mt-3 font-heading text-base font-bold text-text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.description}</p>
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
              Our product build process
            </h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.process.map((step, i) => (
              <StaggerItem key={step}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="font-mono text-xs text-violet-light">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white">{step}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-violet-light/30 bg-violet/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-light">What you get</p>
              <ul className="mt-4 space-y-2.5">
                {service.results.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-violet-light" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-16 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-violet/15 bg-white p-8 text-center shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet">Pairs well with</p>
            <p className="mt-2 text-text-muted">
              Once your product is live, our{" "}
              <Link href="/it-solutions/ai-automation" className="font-semibold text-violet hover:text-violet-light">
                AI & Automation
              </Link>{" "}
              team can build onboarding and support agents, and{" "}
              <Link href="/services/lead-generation" className="font-semibold text-violet hover:text-violet-light">
                Lead Generation
              </Link>{" "}
              can start filling your funnel from day one.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Have a product idea?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Tell us what you&apos;re building — we&apos;ll give you an honest read on scope, timeline,
            and what an MVP would actually take.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss a SaaS/EdTech product build.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Your Product
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
