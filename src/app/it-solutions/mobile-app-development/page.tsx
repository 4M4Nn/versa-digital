import type { Metadata } from "next";
import Link from "next/link";
import { Check, Smartphone, Globe, Zap, ShieldCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/it-solutions/mobile-app-development" },
  title: "Mobile App Development — iOS & Android | Versa Digital",
  description:
    "iOS, Android and cross-platform mobile apps built on React Native and Flutter. Customer apps, booking platforms, field tools and B2B portals — built to App Store standards by Versa Digital, Kochi.",
};

const service = techOfferings.find((o) => o.id === "mobile-app-development")!;

const WHY_ITEMS = [
  { icon: Smartphone, title: "One Codebase, Both Stores", description: "React Native and Flutter let us ship to iOS and Android simultaneously — faster launch, lower cost, single maintenance track." },
  { icon: Globe, title: "Offline-Capable by Design", description: "Field tools and customer apps that work without a reliable connection, syncing automatically when the network returns." },
  { icon: Zap, title: "App Store Approval, Handled", description: "We manage the submission process for both Google Play and the App Store — metadata, screenshots, review responses." },
  { icon: ShieldCheck, title: "Production-Grade Security", description: "Biometric auth, encrypted local storage, and secure API communication built in from the first line of code." },
];

export default function MobileAppDevelopmentPage() {
  return (
    <div>
      <ServiceSchema
        name="Mobile App Development — iOS & Android"
        description={service.description}
        serviceType="Mobile Application Development"
        url="/it-solutions/mobile-app-development"
      />

      <PageHero
        label="/ MOBILE APP DEVELOPMENT"
        heading="Apps your customers actually use — on iOS and Android."
        subtext="From customer-facing booking apps and loyalty platforms to internal field tools and B2B portals — built on React Native or Flutter so you ship to both stores from one codebase."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
              What we build
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              Most businesses need a mobile app for one of three reasons: their customers expect it,
              their field teams need it offline, or their B2B partners want a branded portal that
              isn&apos;t a browser tab. We build all three — and the approach is the same in every
              case: understand your actual workflow first, then build the smallest app that solves the
              real problem.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              We work in React Native and Flutter — cross-platform frameworks that produce genuinely
              native performance without maintaining two separate codebases. For apps where platform-
              specific hardware features matter (camera, health sensors, NFC), we build native iOS and
              Android modules alongside the shared layer.
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
              Our app build process
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
              Add{" "}
              <Link href="/it-solutions/api-integrations" className="font-semibold text-violet hover:text-violet-light">
                API & Integrations
              </Link>{" "}
              to connect your app to your CRM, ERP or payment gateway, and{" "}
              <Link href="/it-solutions/ui-ux-design" className="font-semibold text-violet hover:text-violet-light">
                UI/UX Design
              </Link>{" "}
              for a user experience validated before a line of code is written.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-text-dark md:text-4xl">
            Have an app idea?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Tell us what the app needs to do and who will use it — we&apos;ll give you an honest
            read on scope, timeline and whether cross-platform fits your requirements.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss a mobile app build.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Your App
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
