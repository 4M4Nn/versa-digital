"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MarketingBackdrop from "@/components/shared/MarketingBackdrop";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const LINES: { text: string; accent?: boolean }[] = [
  { text: "Your competitors are" },
  { text: "already using AI marketing." },
  { text: "Every day you wait," },
  { text: "they get further ahead." },
  { text: "Versa Digital closes that gap. Fast.", accent: true },
];

export default function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".statement-word", sectionRef.current);
      const accentWords = gsap.utils.toArray<HTMLElement>(".statement-word-accent", sectionRef.current);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=140%",
          pin: true,
          scrub: 0.6,
        },
      });

      tl.to(words, { color: "#FFFFFF", stagger: 0.06, ease: "none" })
        .to(accentWords, { color: "#9333EA", stagger: 0.06, ease: "none" }, "<")
        .fromTo(
          ".statement-goldline",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.4, ease: "power1.out" }
        )
        .to(".statement-signature", { opacity: 1, duration: 0.3 }, "<0.1");
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} data-navbar-theme="dark" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-dark px-5 py-24 md:px-8">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-3xl animate-pulse-glow" />
      </div>
      <MarketingBackdrop variant="c" tone="dark" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="font-heading text-[7vw] font-bold leading-[1.25] sm:text-[42px] md:text-[52px]">
          {LINES.map((line, li) => (
            <span key={li} className="block">
              {line.text.split(" ").map((word, wi) => (
                <span
                  key={wi}
                  className={line.accent ? "statement-word statement-word-accent" : "statement-word"}
                  style={{ color: "rgba(255,255,255,0.06)" }}
                >
                  {word}{" "}
                </span>
              ))}
            </span>
          ))}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="statement-goldline h-[2px] w-[140px] origin-center scale-x-0 bg-gold" />
          <p className="statement-signature font-mono text-xs tracking-[0.2em] text-white/50 opacity-0">
            — VERSA DIGITAL
          </p>
        </div>
      </div>
    </section>
  );
}
