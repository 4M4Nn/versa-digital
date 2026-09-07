import type { Metadata } from "next";
import { Magnet, Filter, MessageSquare, Repeat } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { fullServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lead Generation — Funnels That Convert",
  description:
    "Landing pages, funnels, and campaigns engineered to turn traffic into qualified leads in your CRM or WhatsApp. Versa Digital's lead generation service, Kochi.",
};

const service = fullServices.find((s) => s.id === "lead-generation")!;

const WHY_ITEMS = [
  { icon: Filter, title: "Built for Qualified Leads", description: "Every funnel is designed to filter for buying intent, not just collect names and numbers." },
  { icon: MessageSquare, title: "Delivered Where You Work", description: "Leads land directly in your CRM or WhatsApp — no manual exporting or checking a dashboard." },
  { icon: Repeat, title: "Retargeting Built In", description: "Visitors who don't convert the first time are brought back with retargeting, not lost for good." },
  { icon: Magnet, title: "Offer-First Strategy", description: "The right offer converts more than the prettiest design — we start there, every time." },
];

export default function LeadGenerationPage() {
  return (
    <div>
      <ServiceSchema
        name="Lead Generation"
        description={service.description}
        serviceType="Lead Generation Campaign Management"
        url="/services/lead-generation"
      />

      <PageHero
        label="/ LEAD GENERATION"
        heading="Traffic is easy. Qualified leads are the job."
        subtext="Landing pages, funnels, and campaigns engineered specifically to convert visitors into leads you can actually close."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              What lead generation means at Versa Digital
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Lead generation is a different discipline from brand awareness — it&apos;s not about
              how many people see your ad, it&apos;s about how many of them hand over their name,
              phone number, and intent to buy. That takes a dedicated landing page built around one
              offer, one clear next step, and a form (or WhatsApp click) that&apos;s frictionless.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              We build the funnel, run the traffic behind it, and route every lead straight into your
              CRM or WhatsApp — then score and qualify what comes in, so your sales team spends time
              on the leads actually worth calling.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Why our funnels convert
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
              Our lead generation process
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
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-light">Results you can expect</p>
              <ul className="mt-4 space-y-2.5">
                {service.results.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-white/85">
                    <Magnet className="mt-0.5 size-4 shrink-0 text-violet-light" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Ready for a funnel that actually fills your pipeline?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Tell us about your business and your current lead flow — we&apos;ll map out exactly what
            a dedicated lead generation funnel would look like for you.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to talk about lead generation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Get Started
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
