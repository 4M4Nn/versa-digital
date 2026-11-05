import type { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

export default function FaqBlock({
  faqs,
  heading = "Frequently asked questions",
  label = "FAQ",
  dark = false,
  withSchema = true,
}: {
  faqs: FaqItem[];
  heading?: string;
  label?: string;
  dark?: boolean;
  withSchema?: boolean;
}) {
  return (
    <section
      data-navbar-theme={dark ? "dark" : "light"}
      className={cn("px-5 py-20 md:px-8 md:py-28", dark ? "bg-bg-dark text-white" : "bg-bg-light")}
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <p className={cn("font-mono text-[11px] font-semibold uppercase tracking-[0.25em]", dark ? "text-gold-light" : "text-gold")}>{label}</p>
          <h2 className={cn("mt-4 font-heading text-3xl font-semibold leading-tight md:text-4xl", dark ? "text-white" : "text-text-dark")}>{heading}</h2>
        </div>
        <div className={cn("divide-y border-y", dark ? "divide-white/10 border-white/10" : "divide-text-dark/10 border-text-dark/10")}>
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary
                className={cn(
                  "flex cursor-pointer list-none items-start justify-between gap-6 font-heading text-base font-semibold md:text-lg [&::-webkit-details-marker]:hidden",
                  dark ? "text-white" : "text-text-dark"
                )}
              >
                {faq.question}
                <span className={cn("mt-1 text-xl leading-none transition-transform group-open:rotate-45", dark ? "text-gold-light" : "text-gold")}>+</span>
              </summary>
              <p className={cn("mt-3 max-w-2xl text-[15px] leading-relaxed", dark ? "text-white/65" : "text-text-muted")}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      )}
    </section>
  );
}
