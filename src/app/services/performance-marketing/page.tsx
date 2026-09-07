import type { Metadata } from "next";
import { Target, TrendingUp, Gauge, Wallet } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { fullServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Performance Marketing — Meta & Google Ads",
  description:
    "Meta Ads, Google Ads, and LinkedIn Ads managed for real conversions, not vanity metrics. Versa Digital's performance marketing delivers 4x average ROAS for Kerala businesses.",
};

const service = fullServices.find((s) => s.id === "performance")!;

const WHY_ITEMS = [
  { icon: Target, title: "Intent, Not Just Reach", description: "Google Ads captures customers already searching. Meta Ads creates demand before they know they're looking." },
  { icon: Gauge, title: "Real Conversion Tracking", description: "Every campaign is wired to actual conversions — leads, calls, WhatsApp messages — not just clicks." },
  { icon: Wallet, title: "Every Rupee Accountable", description: "You see exactly what each channel and creative is producing, down to cost per lead." },
  { icon: TrendingUp, title: "Optimized Daily", description: "Bids, budgets, and creative are adjusted continuously — not reviewed once a month." },
];

export default function PerformanceMarketingPage() {
  return (
    <div>
      <ServiceSchema
        name="Performance Marketing"
        description={service.description}
        serviceType="Paid Advertising Management"
        url="/services/performance-marketing"
      />

      <PageHero
        label="/ PERFORMANCE MARKETING"
        heading="Every rupee tracked. Every result guaranteed."
        subtext="Meta, Google, and LinkedIn Ads engineered around real conversions — not vanity impressions."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              What performance marketing actually means
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Performance marketing is paid advertising judged only by measurable outcomes — leads,
              calls, sales — not likes or impressions. We run Meta Ads to capture attention where
              your audience is already scrolling, and Google Ads to capture the customers who are
              already searching for exactly what you sell. LinkedIn Ads round this out for B2B and
              service businesses targeting decision-makers directly.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Most businesses waste ad spend on campaigns nobody is actually tracking against a real
              conversion. Every campaign we launch starts with conversion tracking wired correctly —
              so the numbers we report are the numbers that moved your business forward.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              Why performance marketing works
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
              Our performance marketing process
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
                    <TrendingUp className="mt-0.5 size-4 shrink-0 text-violet-light" /> {r}
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
            Want a free audit of your current ad spend?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            We&apos;ll show you exactly where your budget is being wasted — and what a
            conversion-tracked campaign would look like instead.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like a free ads audit.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Get Free Ads Audit
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
