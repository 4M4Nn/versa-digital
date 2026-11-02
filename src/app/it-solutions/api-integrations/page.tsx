import type { Metadata } from "next";
import Link from "next/link";
import { Check, Plug, RefreshCw, Bell, FileCode } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/it-solutions/api-integrations" },
  title: "API & Integrations — Connect Your Business Stack | Versa Digital",
  description:
    "Payment gateways, WhatsApp, CRMs, ERPs, logistics platforms and third-party APIs connected to your website, app or internal system. Zero manual data entry between systems.",
};

const service = techOfferings.find((o) => o.id === "api-integrations")!;

const WHY_ITEMS = [
  { icon: RefreshCw, title: "Zero Manual Data Entry", description: "Data flows automatically between your tools — no copying between systems, no end-of-day CSV exports, no sync errors." },
  { icon: Bell, title: "Real-Time Webhooks", description: "Payment confirmations, order status updates and CRM events that fire instantly, with error handling and retry logic built in." },
  { icon: Plug, title: "Any Stack, Any API", description: "Razorpay, Shiprocket, WhatsApp Business, Zoho CRM, Tally, SAP, custom REST or GraphQL — we connect whatever you use." },
  { icon: FileCode, title: "Documented & Maintainable", description: "Every integration is documented — data flow diagrams, error handling notes, test coverage — so you can maintain it after we hand it over." },
];

export default function ApiIntegrationsPage() {
  return (
    <div>
      <ServiceSchema
        name="API & Integrations — Business Stack Connectivity"
        description={service.description}
        serviceType="API Integration Services"
        url="/it-solutions/api-integrations"
      />

      <PageHero
        label="/ API & INTEGRATIONS"
        heading="Your tools, talking to each other."
        subtext="Payment gateways, WhatsApp, CRMs, ERPs, logistics platforms and third-party APIs wired into your website, app or internal system — so data flows automatically across your entire stack."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              When to invest in integrations
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              The most common sign that integrations are overdue: someone on your team is manually
              moving data between tools. A payment comes through and someone updates the CRM. An
              order is placed and someone sends a WhatsApp message. A form is submitted and someone
              enters it into a spreadsheet. Each of these is a manual step that introduces delay,
              risk of error, and a dependency on a person remembering to do it.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              We audit your current tools, map the data flows you actually need, and build the
              connections that replace the manual steps. The scope ranges from a single webhook
              (payment gateway → order system) to a multi-system middleware layer that orchestrates
              data across five or six platforms in real time.
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
              Our integration process
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
              API integrations are almost always built alongside{" "}
              <Link href="/it-solutions/custom-software-development" className="font-semibold text-violet hover:text-violet-light">
                Custom Software
              </Link>{" "}
              or{" "}
              <Link href="/it-solutions/web-app-development" className="font-semibold text-violet hover:text-violet-light">
                Web App Development
              </Link>{" "}
              — connecting a new system to the tools that already run your business.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Which tools are you moving data between manually?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            List the tools and the data you need flowing between them — we&apos;ll scope the
            integration and tell you what it would take to automate it.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss API integrations for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Your Integrations
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
