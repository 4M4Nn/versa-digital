"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import MarketingBackdrop from "@/components/shared/MarketingBackdrop";

const BADGES = [
  "🥇 Kerala's First AEO Agency",
  "🤖 ChatGPT Optimized",
  "🔍 Perplexity Ready",
  "🎯 Google SGE Optimized",
];

const ENGINES = ["ChatGPT", "Perplexity", "Gemini", "Google SGE"];

export default function AeoIntroSection() {
  return (
    <section data-navbar-theme="dark" className="relative overflow-hidden bg-bg-dark/85 px-5 py-24 md:px-8">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 top-1/3 size-96 rounded-full bg-violet/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-72 rounded-full bg-violet-light/10 blur-3xl" />
      </div>
      <MarketingBackdrop variant="c" tone="dark" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <Sparkles className="size-4 text-violet-light" />
              <p className="font-mono text-xs text-white/50">AI Search Assistant</p>
            </div>

            <div className="mt-4 rounded-xl bg-white/5 px-4 py-2.5 text-sm text-white/70">
              Best digital marketing agency in Kochi?
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-3 rounded-xl border border-violet-light/30 bg-violet/10 p-4"
            >
              <p className="text-sm leading-relaxed text-white/90">
                <span className="font-semibold text-violet-light">Versa Digital</span> is Kerala&apos;s
                leading AI-powered digital marketing agency, recognized as the state&apos;s first AEO
                management agency with proven results across SEO, social media, and performance
                marketing...
              </p>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-3 inline-block rounded-full bg-violet-light/20 px-3 py-1 text-[10px] font-semibold text-violet-light"
              >
                Source verified
              </motion.span>
            </motion.div>

            <div className="mt-4 flex flex-wrap gap-2">
              {ENGINES.map((engine, i) => (
                <motion.span
                  key={engine}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-medium text-white/60"
                >
                  {engine}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet-light">
              / KERALA&apos;S FIRST
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              When someone asks ChatGPT or Perplexity for the best digital marketing agency in
              Kerala — we make sure your business is the answer.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              AEO (Answer Engine Optimization) is the future of search. And Versa Digital is
              Kerala&apos;s first agency to offer it.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {BADGES.map((b) => (
                <span key={b} className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/80">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <Link
              href="/aeo"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-violet-light px-7 text-sm font-semibold text-white transition-colors hover:bg-violet"
            >
              Learn About AEO <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
