import type { Metadata } from "next";
import Link from "next/link";
import { Check, LayoutDashboard, Users, Eye, Zap } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Internal Platforms & Custom Dashboards",
  description:
    "Custom dashboards, admin panels, and operational tools built around how your team actually works — replacing spreadsheets with real-time visibility. Versa Digital, Kochi.",
};

const service = techOfferings.find((o) => o.id === "internal-platforms")!;

const WHY_ITEMS = [
  { icon: LayoutDashboard, title: "Built Around Your Workflow", description: "Not a generic template — a tool designed around how your specific team actually operates day to day." },
  { icon: Users, title: "Role-Based Access", description: "Every team member sees exactly what they need and nothing they don't, from field staff to leadership." },
  { icon: Eye, title: "Real-Time Visibility", description: "Leadership sees live operational data instead of waiting for a weekly report someone had to compile by hand." },
  { icon: Zap, title: "Faster Decisions", description: "One connected system replaces the spreadsheets and group chats that used to slow decisions down." },
];

export default function InternalPlatformsPage() {
  return (
    <div>
      <ServiceSchema
        name="Internal Platforms & Custom Dashboards"
        description={service.description}
        serviceType="Internal Business Software Development"
        url="/it-solutions/internal-platforms"
      />

      <PageHero
        label="/ INTERNAL PLATFORMS"
        heading="One system instead of five spreadsheets."
        subtext="Custom dashboards and internal tools built around how your team actually works — not a generic template you have to adapt to."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              What an internal platform actually replaces
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Most growing businesses end up running on a patchwork: one spreadsheet for
              inventory, another for staff schedules, a WhatsApp group for updates, and a
              founder who&apos;s the only one who actually knows the full picture. An internal
              platform replaces that patchwork with a single tool built specifically around your
              operations — inventory, scheduling, orders, approvals, whatever your business
              actually runs on.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Because it&apos;s built for your team specifically — not configured from a generic SaaS
              template — it fits the way you already work, rather than forcing your team to
              adapt to someone else&apos;s assumptions about how a business like yours should run.
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
              Our build process
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
              Internal Platforms often grow into a full{" "}
              <Link href="/it-solutions/client-solutions" className="font-semibold text-violet hover:text-violet-light">
                ERP, CRM or HRMS
              </Link>{" "}
              build, and pair naturally with{" "}
              <Link href="/it-solutions/ai-automation" className="font-semibold text-violet hover:text-violet-light">
                AI & Automation
              </Link>{" "}
              to remove manual data entry entirely.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Still running operations on spreadsheets?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Tell us how your team currently tracks its work — we&apos;ll show you what a purpose-built
            platform would look like.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss an internal platform for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Your Platform
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
