"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const STRIP_COUNT = 10;
const STRIP_TONES = ["bg-bg-dark", "bg-dark-shade", "bg-violet"];

export default function SplitVideoReveal({
  src,
  caption = "Comes to life.",
}: {
  src: string;
  caption?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const strips = gsap.utils.toArray<HTMLElement>(".reveal-strip", sectionRef.current);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=125%",
          pin: true,
          scrub: 0.6,
        },
      });

      strips.forEach((strip, i) => {
        const direction = i % 2 === 0 ? -1 : 1;
        tl.to(
          strip,
          { yPercent: direction * 115, duration: 1, ease: "none" },
          i * 0.02
        );
      });

      tl.fromTo(
        ".reveal-caption",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" },
        ">-0.3"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      data-navbar-theme="dark"
      className="relative h-screen w-full overflow-hidden bg-bg-dark"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={src}
      />

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-5">
        <p className="reveal-caption text-center font-heading text-[11vw] font-bold uppercase leading-none tracking-tight text-white opacity-0 sm:text-6xl md:text-7xl">
          {caption}
        </p>
      </div>

      <div className="absolute inset-0 z-10 flex">
        {Array.from({ length: STRIP_COUNT }).map((_, i) => (
          <div
            key={i}
            className={`reveal-strip h-full flex-1 ${STRIP_TONES[i % STRIP_TONES.length]}`}
          />
        ))}
      </div>
    </section>
  );
}
