"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section data-navbar-theme="light" className="bg-violet-pale px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet">
            / CLIENT VOICES
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
            They trusted us.
            <br />
            Results followed.
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-14 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-violet/15 bg-white p-8 shadow-lg md:p-10"
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-text-dark">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-violet font-heading text-sm font-bold text-white">
                  {initials(t.name)}
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-text-dark">{t.name}</p>
                  <p className="text-xs text-text-muted">
                    {t.business} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-violet" : "w-2 bg-violet/25"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
