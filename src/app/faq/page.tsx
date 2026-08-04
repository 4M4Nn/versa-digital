import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Versa Digital's services, pricing, and process.",
};

export default function FaqPage() {
  return (
    <div>
      <PageHero label="/ FAQ" heading="Questions, answered." subtext="Everything you need to know before getting started." />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question} className="data-[state=open]:border-violet/40">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>
    </div>
  );
}
