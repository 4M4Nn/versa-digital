"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import ContactForm from "@/components/shared/ContactForm";
import MarketingBackdrop from "@/components/shared/MarketingBackdrop";
import { siteConfig } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export default function ContactSection() {
  return (
    <section data-navbar-theme="light" className="relative overflow-hidden bg-bg-light/90 px-5 py-20 md:px-8 md:py-28">
      <MarketingBackdrop variant="d" tone="light" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet">
              / GET IN TOUCH
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
              Let&apos;s talk growth.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 space-y-4">
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-3 text-text-dark hover:text-violet">
                <Phone className="size-5 text-violet" /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-text-dark hover:text-violet">
                <Mail className="size-5 text-violet" /> {siteConfig.email}
              </a>
              <div className="flex items-start gap-3 text-text-dark">
                <MapPin className="mt-0.5 size-5 shrink-0 text-violet" /> {siteConfig.address}
              </div>
              <a
                href={whatsappUrl("Hi Versa Digital, I'd like to know more.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-light"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-text-dark/10">
              <iframe
                title="Versa Digital location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
