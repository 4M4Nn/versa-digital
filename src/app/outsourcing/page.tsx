import type { Metadata } from "next";
import ContentHub from "@/components/shared/ContentHub";
import FaqBlock from "@/components/shared/FaqBlock";
import { outsourcingPages } from "@/lib/content/outsourcing";
import { outsourcingFaqs, outsourcingModels, outsourcingPrinciples } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/outsourcing" },
  title: "IT Outsourcing & Subcontracting Partner — White-Label, Dedicated Teams & ODC",
  description:
    "Versa Digital & IT Solutions is an outsourcing and subcontracting partner for large IT companies, system integrators and agencies — white-label development, ERP subcontracting, dedicated teams, staff augmentation, QA and L2/L3 support from Kochi, India.",
  keywords: [
    "IT outsourcing company India",
    "software subcontracting",
    "white label development partner",
    "IT subcontractor Kerala",
    "outsourced software development",
    "offshore development partner",
  ],
};

export default function Page() {
  return (
    <ContentHub
      label="OUTSOURCING & SUBCONTRACTING"
      heading="The delivery team behind other IT companies' contracts."
      intro="Large IT companies, system integrators, consultancies and agencies subcontract ERP, software, AI, QA and support work to our Kochi engineering team. You keep the client and the brand — we deliver to your process, under NDA."
      basePath="/outsourcing"
      trailName="Outsourcing"
      pages={outsourcingPages}
      ctaHeading="Need extra delivery capacity for a contract?"
      ctaSubtext="Share the scope or SOW. We reply with a team plan and indicative pricing within two working days."
    >
      <section data-navbar-theme="light" className="bg-ivory px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">How we partner</p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-tight text-text-dark md:text-4xl">
            Four ways to work with us as your subcontractor.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 sm:grid-cols-2 lg:grid-cols-4">
            {outsourcingModels.map((m) => (
              <div key={m.name} className="flex flex-col bg-ivory p-7">
                <h3 className="font-heading text-lg font-semibold text-text-dark">{m.name}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">{m.bestFor}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{m.description}</p>
              </div>
            ))}
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outsourcingPrinciples.map((p) => (
              <li key={p.title} className="border-t border-text-dark/15 pt-4">
                <p className="font-heading text-base font-semibold text-text-dark">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FaqBlock faqs={outsourcingFaqs} heading="Subcontracting questions from IT companies" label="FAQ" />
    </ContentHub>
  );
}
