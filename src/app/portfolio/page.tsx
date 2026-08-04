import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import MagneticButton from "@/components/shared/MagneticButton";
import { caseStudies } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Real results from real Kerala businesses — IPB Kochi, Brew & Bloom Coffee, and Future Optima IT share their growth with Versa Digital.",
};

const DETAILS: Record<string, { before: string; after: string; summary: string }> = {
  "ipb-kochi": {
    before: "Low Instagram engagement, no AI search visibility",
    after: "5x reach in 60 days, ranked for banking courses on AI search",
    summary:
      "IPB Kochi needed to reach a younger audience considering banking career courses. We rebuilt their content strategy around student-focused storytelling and layered in AEO to capture the growing number of students researching courses through AI tools.",
  },
  "brew-bloom": {
    before: "Inconsistent posting, low website traffic, few WhatsApp inquiries",
    after: "3x leads, doubled website traffic, WhatsApp inquiries up 200%",
    summary:
      "Brew & Bloom Coffee wanted their online presence to match their in-store experience. A full digital marketing engagement — content, ads, and a refreshed web presence — turned casual followers into regular customers.",
  },
  "future-optima": {
    before: "Minimal organic traffic, no consistent SEO strategy",
    after: "200+ monthly organic leads, top 3 ranking for IT courses Kerala",
    summary:
      "Future Optima IT competes in a crowded IT training market. A dedicated SEO and content strategy targeting course-specific search intent turned their website into their strongest lead source.",
  },
};

export default function PortfolioPage() {
  return (
    <div>
      <PageHero
        label="/ PROOF OF WORK"
        heading="Real businesses. Real growth."
        subtext="Every result below is from an actual Versa Digital client engagement."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl space-y-8">
          {caseStudies.map((cs, i) => {
            const detail = DETAILS[cs.id];
            return (
              <Reveal key={cs.id} delay={i * 0.1}>
                <div className="overflow-hidden rounded-3xl border border-violet/15 bg-white shadow-sm">
                  <div className="grid gap-0 md:grid-cols-[1fr_1.4fr]">
                    <div className="flex flex-col justify-center bg-dark-shade p-8 text-center md:text-left">
                      <p className="font-heading text-2xl font-black text-white">{cs.client}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-violet-light">
                        {cs.service}
                      </p>
                      <p className="mt-6 font-heading text-5xl font-extrabold text-violet-light">{cs.metric}</p>
                      <p className="text-xs text-white/50">{cs.metricLabel}</p>
                    </div>

                    <div className="p-8">
                      <p className="text-sm leading-relaxed text-text-muted">{detail.summary}</p>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl bg-bg-light p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Before</p>
                          <p className="mt-1 text-sm text-text-dark/80">{detail.before}</p>
                        </div>
                        <div className="rounded-xl bg-violet-pale p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-violet">After</p>
                          <p className="mt-1 text-sm font-medium text-text-dark">{detail.after}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section data-navbar-theme="dark" className="bg-gradient-to-br from-violet to-dark-shade px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
            Your business could be next.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Book a free strategy call and let&apos;s talk about what growth looks like for you.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to start a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-violet hover:opacity-90"
          >
            Start Your Project <ArrowRight className="size-4" />
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
