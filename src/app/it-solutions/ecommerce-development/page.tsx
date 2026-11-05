import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShoppingCart, CreditCard, Search, BarChart3 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import MagneticButton from "@/components/shared/MagneticButton";
import ServiceSchema from "@/components/shared/ServiceSchema";
import { whatsappUrl } from "@/lib/whatsapp";
import { techOfferings } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/it-solutions/ecommerce-development" },
  title: "E-commerce Development — Shopify, WooCommerce & Custom Stores | Versa Digital",
  description:
    "Online stores built to sell and scale. Shopify and WooCommerce done properly, or a fully custom e-commerce platform — Razorpay, PayU & UPI payments, SEO-ready product structure.",
};

const service = techOfferings.find((o) => o.id === "ecommerce-development")!;

const WHY_ITEMS = [
  { icon: ShoppingCart, title: "Conversion-Optimised From Day One", description: "Product pages, category layouts, and checkout flows designed to convert visitors, not just display products." },
  { icon: CreditCard, title: "Indian Payments, Properly Wired", description: "Razorpay, PayU and UPI integrated correctly — with order confirmation, refund handling, and webhook reliability tested." },
  { icon: Search, title: "SEO-Ready Product Structure", description: "Category URLs, schema markup, canonical tags and page speed baked in so your products rank from launch." },
  { icon: BarChart3, title: "Inventory & Orders Connected", description: "Stock management, fulfilment status and analytics connected so you don't run the store from a spreadsheet." },
];

export default function EcommerceDevelopmentPage() {
  return (
    <div>
      <ServiceSchema
        name="E-commerce Development — Online Store Build"
        description={service.description}
        serviceType="E-commerce Development"
        url="/it-solutions/ecommerce-development"
      />

      <PageHero
        label="/ E-COMMERCE DEVELOPMENT"
        heading="An online store that sells from launch day."
        subtext="Shopify or WooCommerce done properly, or a fully custom e-commerce platform — catalogue, cart, Indian payment gateway, logistics integration, and SEO-ready from day one."
      />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold text-text-dark md:text-4xl">
              Platform-first or fully custom — we build both
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              For most businesses selling online, Shopify or WooCommerce is the right call —
              faster to launch, well-supported, and capable of handling serious volume when
              configured correctly. Most &quot;bad&quot; e-commerce stores aren&apos;t bad because of the
              platform; they&apos;re bad because no one spent time on the product photography, the
              category structure, the checkout flow, or the payment gateway configuration.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              For businesses with complex catalogue logic, multiple vendor models, B2B pricing tiers,
              or subscription requirements that don&apos;t fit a standard platform, we build custom — a
              Next.js storefront backed by a proper inventory and order management system.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-semibold text-text-dark md:text-4xl">
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
            <h2 className="text-center font-heading text-3xl font-semibold text-white md:text-4xl">
              Our e-commerce build process
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
              <Link href="/seo" className="font-semibold text-violet hover:text-violet-light">
                SEO/AEO
              </Link>{" "}
              to make your products rank and answer search queries, and{" "}
              <Link href="/services/performance-marketing" className="font-semibold text-violet hover:text-violet-light">
                Performance Marketing
              </Link>{" "}
              to drive qualified traffic from day one.
            </p>
          </div>
        </Reveal>
      </section>

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 text-center md:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-text-dark md:text-4xl">
            Ready to sell online properly?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Tell us about your catalogue, your customers and how you handle orders now —
            we&apos;ll recommend the right platform and build approach.
          </p>
          <MagneticButton
            href={whatsappUrl("Hi Versa Digital, I'd like to discuss an e-commerce store build.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white hover:bg-violet-light"
          >
            Discuss Your Store
          </MagneticButton>
        </Reveal>
      </section>
    </div>
  );
}
