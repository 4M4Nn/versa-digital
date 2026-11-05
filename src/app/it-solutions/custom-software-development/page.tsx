import type { Metadata } from "next";
import Link from "next/link";
import { Check, Code2, Shield, TrendingUp, Wrench } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/it-solutions/custom-software-development" },
  title: "Custom Software Development — Bespoke Business Software | Versa Digital",
  description:
    "Bespoke software built precisely around your business workflow. When off-the-shelf tools require too many workarounds, we build exactly what you need — no licence fees, no feature-gating.",
};

const service = techOfferings.find((o) => o.id === "custom-software-development")!;

const WHY_ITEMS = [
  { icon: Code2, title: "Built Around Your Workflow", description: "No compromises. The software works exactly as your team works, not the other way around." },
  { icon: Shield, title: "No Vendor Lock-in", description: "You own the code. No monthly licence fees to a platform you depend on and can't leave." },
  { icon: TrendingUp, title: "Competitive Advantage", description: "Competitors using the same off-the-shelf tools can't replicate what you built specifically for your model." },
  { icon: Wrench, title: "Long-Term Support", description: "We build to maintain — clean architecture, documentation, and a support relationship after launch." },
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <div>
      <ServiceSchema
        name="Custom Software Development"
        description={service.description}
        serviceType="Custom Software Development"
        url="/it-solutions/custom-software-development"
      />

      <PageHero
        label="/ CUSTOM SOFTWARE DEVELOPMENT"
        heading="Software that fits your business exactly."
        subtext="When off-the-shelf tools require too many workarounds — or your competitive edge depends on how your system works — we build it precisely around how you operate."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold text-text-dark md:text-4xl">
              When custom software is the right call
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Most businesses start with off-the-shelf software. It works — until it doesn&apos;t.
              The moment you&apos;re running 12 tools stitched together with spreadsheets, or paying
              for features you don&apos;t use while missing the one feature that actually matters to
              your business, the economics of custom software start to make sense.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              We&apos;ve built custom inventory management systems, hiring workflows, operations
              dashboards, logistics platforms, and internal tools that replaced clusters of
              disconnected software. The common thread: the businesses that built them got faster,
              not slower, and they stopped paying five recurring licences every month.
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
              Our development process
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
              Combine with{" "}
              <Link href="/it-solutions/ai-automation" className="font-semibold text-violet hover:text-violet-light">
                AI & Automation
              </Link>{" "}
              to add intelligent workflows to your custom system, or{" "}
              <Link href="/it-solutions/api-integrations" className="font-semibold text-violet hover:text-violet-light">
                API & Integrations
              </Link>{" "}
              to connect it to your existing tools from day one.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-text-dark md:text-4xl">
            Tell us what you&apos;re trying to replace.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Describe how your team operates today — the tools, the manual steps, the frustrations.
            We&apos;ll tell you what a custom build would actually look like.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss a custom software build for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Your Software
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
