"use client";

import Reveal from "@/components/shared/Reveal";
import MagneticButton from "@/components/shared/MagneticButton";
import { whatsappUrl } from "@/lib/whatsapp";

export default function CtaBannerSection() {
  return (
    <section
      data-navbar-theme="dark"
      className="relative overflow-hidden bg-gradient-to-br from-violet to-dark-shade px-5 py-24 text-center md:px-8"
    >
      <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Ready to grow
            <br />
            your brand with AI?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-md text-base text-white/80">
            Book a free 30-minute strategy call. No commitment. Just clarity.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="/contact"
              className="min-h-12 rounded-full bg-white px-8 text-sm font-semibold text-violet transition-opacity hover:opacity-90"
            >
              Book Free Consultation
            </MagneticButton>
            <MagneticButton
              href={whatsappUrl("Hi Versa Digital, I'd like to book a free strategy call.")}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-12 rounded-full border-2 border-white px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              WhatsApp Us
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
