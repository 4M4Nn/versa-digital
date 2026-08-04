import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import PackagesSection from "@/components/home/PackagesSection";
import SeoPackagesSection from "@/components/home/SeoPackagesSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { growthPackages, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Versa Digital's Digital Growth Plans and SEO packages — transparent pricing from ₹2,999/month for SEO to ₹50,000/month for complete digital marketing.",
};

const packageFaqs = faqs.filter((f) =>
  /cost|contract|upgrade|package|plan/i.test(f.question)
);

export default function PackagesPage() {
  return (
    <div>
      <PageHero
        label="/ PRICING"
        heading="Transparent plans. Real results."
        subtext="No hidden fees, no long-term lock-in on monthly plans. Pick what fits, upgrade whenever you're ready."
      />

      <PackagesSection />
      <SeoPackagesSection />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Compare Digital Growth Plans
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-text-dark/10">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-white text-left">
                    <th className="px-5 py-4 font-heading text-text-dark">Feature</th>
                    {growthPackages.map((pkg) => (
                      <th key={pkg.id} className="px-5 py-4 text-center font-heading text-text-dark">
                        {pkg.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {growthPackages[2].features.map((row) => (
                    <tr key={row.key} className="border-t border-text-dark/10 bg-white/60 even:bg-white">
                      <td className="px-5 py-3.5 text-text-dark/80">{row.text}</td>
                      {growthPackages.map((pkg) => {
                        const feature = pkg.features.find((f) => f.key === row.key);
                        return (
                          <td key={pkg.id} className="px-5 py-3.5 text-center">
                            {feature?.included ? (
                              <Check className="mx-auto size-4 text-violet" />
                            ) : (
                              <X className="mx-auto size-4 text-text-muted/40" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 pb-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Package FAQs
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-10 space-y-3">
              {packageFaqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
