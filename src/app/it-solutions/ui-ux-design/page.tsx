import type { Metadata } from "next";
import Link from "next/link";
import { Check, PenTool, Users, BarChart3, Layers } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/it-solutions/ui-ux-design" },
  title: "UI/UX Design — Product Design That Converts | Versa Digital",
  description:
    "User research, wireframes, interactive prototypes and a complete design system — for mobile apps, web platforms and business software. Design validated with real users before a line of code is written.",
};

const service = techOfferings.find((o) => o.id === "ui-ux-design")!;

const WHY_ITEMS = [
  { icon: Users, title: "Validated Before Build", description: "Designs tested with real users before development begins — so expensive assumptions are caught in Figma, not in production." },
  { icon: PenTool, title: "Design System, Not a File", description: "A consistent component library that developers implement once and designers extend — not a one-off screen set that breaks on every new feature." },
  { icon: BarChart3, title: "Higher Conversion", description: "UX improvements to onboarding, checkout and key flows that measurably increase the actions you want users to take." },
  { icon: Layers, title: "Dev-Ready Handoff", description: "Annotated specs, interaction notes and responsive breakpoints — so development starts without a single &apos;how should this work?&apos; meeting." },
];

export default function UiUxDesignPage() {
  return (
    <div>
      <ServiceSchema
        name="UI/UX Design — Product & Interface Design"
        description={service.description}
        serviceType="UI/UX Design Services"
        url="/it-solutions/ui-ux-design"
      />

      <PageHero
        label="/ UI/UX DESIGN"
        heading="Design that converts users into customers."
        subtext="User research, wireframes, interactive prototypes and a complete design system — for mobile apps, web platforms or business software. Validated with real users before a line of code is written."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold text-text-dark md:text-4xl">
              Why design before development
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              The most expensive design decisions are the ones made in code. A user flow that
              feels obvious in a wireframe and turns out to be wrong when real users try it costs
              hours in Figma to fix — and weeks in development. We do the discovery work upfront
              so the assumptions that need to be wrong are wrong in the prototype, not in the product.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              We design for your actual users — understanding their mental models, the contexts
              they&apos;re in when they use the product, and what they&apos;re trying to accomplish —
              then translate that into an interface that makes the right action obvious at every step.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-semibold text-text-dark md:text-4xl">
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
            <h2 className="text-center font-heading text-3xl font-semibold text-white md:text-4xl">
              Our design process
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
              UI/UX Design feeds directly into{" "}
              <Link href="/it-solutions/mobile-app-development" className="font-semibold text-violet hover:text-violet-light">
                Mobile App
              </Link>{" "}
              or{" "}
              <Link href="/it-solutions/web-app-development" className="font-semibold text-violet hover:text-violet-light">
                Web App Development
              </Link>{" "}
              — the design system handoff is built into the process so development starts with a complete component set.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-text-dark md:text-4xl">
            What are you trying to make easier for your users?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Describe the product or the problem — we&apos;ll walk you through what a UX-first
            approach would look like and where the highest-impact design work typically sits.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss UI/UX design for a product.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Your Design
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
