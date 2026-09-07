"use client";

import { motion } from "framer-motion";
import { Star, Bot, TrendingUp } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import MagneticButton from "@/components/shared/MagneticButton";
import MarketingBackdrop from "@/components/shared/MarketingBackdrop";
import { whatsappUrl } from "@/lib/whatsapp";
import { trustBadges } from "@/lib/data";

const TRUST_ICONS = { star: Star, bot: Bot, trending: TrendingUp } as const;

const HEADLINE_LINES = [
  { text: "Marketing That", color: "text-text-dark" },
  { text: "Thinks.", color: "text-violet" },
  { text: "Performs.", color: "text-text-dark" },
  { text: "Scales.", color: "text-dark-shade" },
];

export default function Hero() {
  return (
    <section
      data-navbar-theme="light"
      className="relative isolate overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40"
    >
      {/* Announcement motion poster, playing behind a light tint so the
          headline stays fully readable. */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/announcement-motion.mp4"
      />
      <div className="absolute inset-0 -z-10 bg-bg-light/88" />

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -right-40 -top-40 size-[560px] rounded-full bg-violet/10 blur-3xl" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.05]" />
      </div>
      <MarketingBackdrop variant="a" tone="light" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[55%_45%] lg:gap-8">
        {/* LEFT */}
        <div>
          <Reveal>
            <span className="inline-block font-mono text-[11px] font-semibold tracking-[0.25em] text-violet">
              DIGITAL SERVICES & TECHNOLOGY
            </span>
          </Reveal>

          <h1 className="mt-5 font-heading text-[13vw] font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
            {HEADLINE_LINES.map((line, i) => (
              <span key={line.text} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${line.color}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.75, duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="mt-6 h-[3px] w-[180px] bg-gold"
          />

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted md:text-lg">
              We combine AI, creativity, and strategy to build digital brands that perform — and
              the SaaS, automation, and ERP/CRM/HRMS systems that run the business behind them.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton
                href={whatsappUrl("Hi Versa Digital, I'd like a free marketing audit.")}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 rounded-full bg-violet px-8 text-sm font-semibold text-white transition-colors hover:bg-violet-light"
              >
                Get Free Audit
              </MagneticButton>
              <MagneticButton
                href="#portfolio-results"
                className="min-h-12 rounded-full border-2 border-violet px-8 text-sm font-semibold text-violet transition-colors hover:bg-violet-pale"
              >
                See Our Work
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map((badge) => {
                const Icon = TRUST_ICONS[badge.icon as keyof typeof TRUST_ICONS];
                return (
                  <span key={badge.text} className="flex items-center gap-2 text-sm font-medium text-text-dark/80">
                    <Icon className="size-4 text-violet" /> {badge.text}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* RIGHT — motion poster visual */}
        <div className="relative mx-auto h-[440px] w-full max-w-sm lg:h-[520px] lg:max-w-none">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-violet/25 via-violet-light/10 to-transparent blur-2xl" />

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[2.2rem] border-[6px] border-text-dark bg-white shadow-2xl lg:h-[480px] lg:w-[250px]"
          >
            <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-text-dark" />
            <div className="flex h-full flex-col gap-2 overflow-hidden rounded-[1.7rem] p-3 pt-8">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.25 }}
                  className="flex items-center gap-2 rounded-xl bg-violet-pale p-2"
                >
                  <div className="size-8 shrink-0 rounded-full bg-violet/30" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 w-3/4 rounded-full bg-violet/25" />
                    <div className="h-2 w-1/2 rounded-full bg-violet/15" />
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-auto rounded-xl bg-text-dark p-3 text-center"
              >
                <p className="font-mono text-[10px] tracking-widest text-white/60">ENGAGEMENT</p>
                <p className="font-heading text-lg font-bold text-white">8.2%</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -left-2 top-6 animate-float rounded-2xl border border-violet/15 bg-white px-4 py-2.5 shadow-xl lg:left-0"
          >
            <p className="font-heading text-sm font-bold text-violet">↑ 847%</p>
            <p className="text-[10px] text-text-muted">Organic Growth</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute -right-2 top-1/3 animate-float-slow rounded-2xl border border-violet/15 bg-white px-4 py-2.5 shadow-xl lg:right-0"
          >
            <p className="font-heading text-sm font-bold text-gold">↑ 3.2x</p>
            <p className="text-[10px] text-text-muted">ROAS</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute -left-4 bottom-8 animate-float rounded-2xl border border-violet/15 bg-white px-4 py-2.5 shadow-xl lg:left-2"
          >
            <p className="font-heading text-sm font-bold text-violet">↑ 12K</p>
            <p className="text-[10px] text-text-muted">New Followers</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
