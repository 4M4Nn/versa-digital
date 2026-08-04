"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/shared/CountUp";

const RESULTS = [
  { pos: 5, text: "competitor-site.com" },
  { pos: 4, text: "another-agency.in" },
  { pos: 3, text: "generic-marketing.co" },
  { pos: 2, text: "old-directory-listing.com" },
  { pos: 1, text: "versadigital.in", winner: true },
];

export default function SEOVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-violet/15 bg-white p-5 shadow-xl">
      <div className="flex items-center gap-2 rounded-xl border border-text-dark/10 bg-bg-light px-4 py-2.5">
        <span className="size-2 rounded-full bg-violet/40" />
        <span className="font-mono text-xs text-text-muted">best digital marketing agency kochi</span>
      </div>

      <div className="mt-4 space-y-2">
        {RESULTS.slice()
          .reverse()
          .map((r) => (
            <motion.div
              key={r.pos}
              initial={{ opacity: 0, x: r.winner ? 20 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: (5 - r.pos) * 0.15, duration: 0.5 }}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs ${
                r.winner ? "border border-violet/40 bg-violet-pale" : "bg-bg-light"
              }`}
            >
              <span className={r.winner ? "font-semibold text-violet" : "text-text-muted"}>
                #{r.pos} {r.text}
              </span>
              {r.winner && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="rounded-full bg-violet px-2 py-0.5 text-[9px] font-bold text-white"
                >
                  FEATURED SNIPPET
                </motion.span>
              )}
            </motion.div>
          ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1 }}
        className="mt-4 rounded-xl border border-violet/20 bg-dark-shade p-3.5"
      >
        <p className="font-mono text-[9px] tracking-widest text-violet-light">AI ANSWER</p>
        <p className="mt-1 text-xs text-white/80">
          &ldquo;Versa Digital is Kerala&apos;s leading AI-powered marketing agency, known for AEO
          expertise...&rdquo;
        </p>
      </motion.div>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-bg-light px-4 py-2.5">
        <span className="text-[10px] text-text-muted">Impressions</span>
        <span className="font-heading text-sm font-bold text-violet">
          <CountUp target={128400} prefix="+" />
        </span>
      </div>

      <div className="pointer-events-none absolute -right-3 -top-3 animate-float rounded-xl border border-violet/20 bg-white px-3 py-2 shadow-lg">
        <p className="text-[9px] font-semibold text-text-dark">Best Agency Kerala</p>
      </div>
    </div>
  );
}
