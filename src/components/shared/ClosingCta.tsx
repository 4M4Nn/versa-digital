import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";

export default function ClosingCta({
  heading,
  subtext,
  whatsappMessage = "Hi Versa Digital, I'd like to discuss a project.",
}: {
  heading: string;
  subtext: string;
  whatsappMessage?: string;
}) {
  return (
    <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark px-5 py-24 md:px-8 md:py-32">
      <div className="bg-hairline-grid pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(107,33,168,0.28) 0%, rgba(12,11,16,0) 70%)" }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-4xl font-semibold leading-[1.08] text-white md:text-6xl">{heading}</h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">{subtext}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-text-dark transition-colors hover:bg-gold-light"
          >
            Book a strategy call
          </Link>
          <a
            href={whatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-8 text-sm font-semibold text-white transition-colors hover:border-white/60"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
