import type { Metadata } from "next";
import Link from "next/link";
import { Check, Network, Building2, Database, Users2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Custom ERP & CRM Development, HRMS",
  description:
    "Custom ERP development, CRM development, and HRMS systems built or integrated around your business — unifying sales, finance, operations, and HR on one platform. Versa Digital & IT Solutions, Kochi.",
};

const service = techOfferings.find((o) => o.id === "client-solutions")!;

const WHY_ITEMS = [
  { icon: Building2, title: "Every Department, One Platform", description: "Sales, finance, operations, and HR run on the same connected system instead of five disconnected tools." },
  { icon: Database, title: "No More Manual Re-Entry", description: "Data entered once flows automatically to every department that needs it — no re-typing, no mismatched records." },
  { icon: Users2, title: "Built or Integrated, Your Choice", description: "A fully custom system where you need it, integrated with proven platforms where that's the smarter call." },
  { icon: Network, title: "Full Business Visibility", description: "Leadership sees the real state of the business — sales pipeline to payroll — in one place, in real time." },
];

export default function ClientSolutionsPage() {
  return (
    <div>
      <ServiceSchema
        name="Custom ERP & CRM Development, HRMS"
        description={service.description}
        serviceType="Custom ERP and CRM Development"
        url="/it-solutions/client-solutions"
      />

      <PageHero
        label="/ CUSTOM ERP & CRM"
        heading="Custom ERP, CRM & HRMS — full business automation."
        subtext="End-to-end systems that connect sales, finance, operations, and HR into one platform, built or integrated around how your business actually runs."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              What full business automation means
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              As a business grows past its first few employees, the tools that got it started —
              spreadsheets, WhatsApp, disconnected accounting software — start actively costing
              time and money. An ERP (Enterprise Resource Planning) system connects operations,
              inventory, and finance. A CRM keeps every customer and sales conversation in one
              place. An HRMS handles attendance, payroll, and staff records without a folder of
              paperwork. Full business automation means these three systems talking to each
              other, not living as three separate silos.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              We don&apos;t force every client into the same off-the-shelf software. Where an
              established platform genuinely fits your business, we integrate and configure it
              properly. Where your process is specific enough that a generic tool would mean
              constant workarounds, we build a custom system around exactly how you operate.
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
              Our implementation process
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
              Full automation projects usually start with{" "}
              <Link href="/it-solutions/internal-platforms" className="font-semibold text-violet hover:text-violet-light">
                Internal Platforms
              </Link>{" "}
              for a specific team, then expand company-wide, with{" "}
              <Link href="/it-solutions/ai-automation" className="font-semibold text-violet hover:text-violet-light">
                AI & Automation
              </Link>{" "}
              layered in to remove manual work across every module.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Ready to run your business on one platform?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Tell us how sales, operations, and HR currently work — we&apos;ll map out exactly what an
            ERP, CRM, or HRMS build would look like for you.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss an ERP/CRM/HRMS solution for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Full Automation
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
