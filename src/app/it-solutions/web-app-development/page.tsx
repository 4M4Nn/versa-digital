import type { Metadata } from "next";
import Link from "next/link";
import { Check, Monitor, Users, Zap, BarChart3 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/it-solutions/web-app-development" },
  title: "Web App Development — React & Next.js Portals | Versa Digital",
  description:
    "Customer portals, admin dashboards, booking systems and multi-role web apps built in React and Next.js. Production-ready from day one by Versa Digital, Kochi.",
};

const service = techOfferings.find((o) => o.id === "web-app-development")!;

const WHY_ITEMS = [
  { icon: Monitor, title: "More Than a Website", description: "Web apps handle authenticated sessions, multi-role access, real-time data and complex logic — things a CMS-based site was never meant to do." },
  { icon: Users, title: "Multi-Role Access", description: "Admin, staff, client, and partner views from one codebase — each seeing only what they should see." },
  { icon: Zap, title: "Sub-2s Load, Always", description: "Next.js server-side rendering and edge caching mean your users never wait for the app to wake up." },
  { icon: BarChart3, title: "Real-Time Data", description: "Live dashboards, instant notifications, and data that updates as your business moves — not on the next page refresh." },
];

export default function WebAppDevelopmentPage() {
  return (
    <div>
      <ServiceSchema
        name="Web App Development — React & Next.js"
        description={service.description}
        serviceType="Web Application Development"
        url="/it-solutions/web-app-development"
      />

      <PageHero
        label="/ WEB APP DEVELOPMENT"
        heading="When your business needs an app, not a website."
        subtext="Customer portals, admin dashboards, booking systems and multi-role tools — built in React and Next.js so they&apos;re fast, maintainable, and ready for real users from launch day."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              What makes it a web app, not a website
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              A website shows information. A web app does work. If your business needs users to
              log in, see data specific to them, take actions that update a database, or collaborate
              with other users — that&apos;s a web app, and it needs to be built as one from the start.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              We build in React and Next.js — the same stack that powers this site — with a
              fully typed API layer, role-based authentication, and a data model designed for
              how your business actually operates. The result is a system that scales with your
              user base without a rebuild at 10,000 users.
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
              Our build process
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
              Combine with{" "}
              <Link href="/it-solutions/mobile-app-development" className="font-semibold text-violet hover:text-violet-light">
                Mobile App Development
              </Link>{" "}
              to extend your web app to iOS and Android, or{" "}
              <Link href="/it-solutions/api-integrations" className="font-semibold text-violet hover:text-violet-light">
                API & Integrations
              </Link>{" "}
              to connect it to your existing business stack.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            What does your team need to do online?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Walk us through what your users need to do — we&apos;ll tell you exactly what the
            app needs and what it would take to build.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss a web app build.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Your Web App
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
