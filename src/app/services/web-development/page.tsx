import type { Metadata } from "next";
import Link from "next/link";
import { Code, Zap, Smartphone, Search, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { fullServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Web Development — Fast, SEO-Ready Websites",
  description:
    "Mobile-first websites and web apps built on modern frameworks, engineered for speed, conversions, and SEO/AEO from day one. Versa Digital, Kochi, Kerala.",
};

const service = fullServices.find((s) => s.id === "web-development")!;

const WHY_ITEMS = [
  { icon: Zap, title: "Built for Speed", description: "Sub-2-second load times, not a bloated template that fights Google's ranking signals." },
  { icon: Smartphone, title: "Mobile-First by Default", description: "Most of your traffic is on a phone — we design and test there first, not as an afterthought." },
  { icon: Search, title: "SEO & AEO Foundations", description: "Structured metadata, clean headings, and schema markup are part of the build, not a later add-on." },
  { icon: Code, title: "Modern, Maintainable Code", description: "Built on current frameworks so your site stays fast and secure as it grows — no dated stacks." },
];

export default function WebDevelopmentPage() {
  return (
    <div>
      <ServiceSchema
        name="Web Development"
        description={service.description}
        serviceType="Website & Web Application Development"
        url="/services/web-development"
      />

      <PageHero
        label="/ WEB DEVELOPMENT"
        heading="A website built to convert, not just exist."
        subtext="Fast, mobile-first websites and web apps — designed for visitors and structured for search engines and AI answer engines alike."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              More than a digital brochure
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              A website that just looks good but loads slowly or confuses Google is a liability, not
              an asset. We build every site mobile-first on a modern framework, with clean sitemaps,
              proper heading structure, and metadata baked in from the first commit — so the same
              site that impresses a visitor also earns its place in search results.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Whether it&apos;s a marketing site, a landing page for a campaign, or a full web
              application with logins and a database behind it, the same discipline applies:
              performance first, content structured for both humans and search engines, and a build
              that&apos;s actually maintainable once you hand it over.
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
              Our web development process
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
                    <Zap className="mt-0.5 size-4 shrink-0 text-violet-light" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-16 md:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-3xl border border-violet/15 bg-white p-9 text-center shadow-sm md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="font-heading text-lg font-bold text-text-dark">Need more than a website?</h2>
              <p className="mt-1 text-sm text-text-muted">
                For SaaS products, internal tools, or full business systems, see our Technology portal.
              </p>
            </div>
            <Link
              href="/technology"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-light"
            >
              Explore Technology <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="dark" className="bg-gradient-to-br from-violet to-dark-shade px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
            Let&apos;s build a website that actually performs.
          </h2>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to talk about a website build.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-white px-8 text-sm font-semibold text-violet hover:opacity-90"
          >
            Start Your Website
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
