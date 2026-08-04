"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import CountUp from "@/components/shared/CountUp";

export default function VideoVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-violet/25 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative h-[420px] w-[210px] overflow-hidden rounded-[2rem] border-4 border-white/10 bg-gradient-to-br from-dark-shade to-bg-dark shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative flex size-14 items-center justify-center rounded-full bg-white/90"
          >
            <Play className="ml-0.5 size-6 fill-violet text-violet" />
            <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
          </motion.div>
        </div>

        <Sparkles className="absolute right-4 top-6 size-4 animate-pulse-glow text-gold" />
        <Sparkles className="absolute left-5 top-16 size-3 animate-pulse-glow text-violet-light" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/40 p-3 backdrop-blur-sm"
        >
          <p className="font-mono text-[9px] tracking-widest text-white/50">VIEWS</p>
          <p className="font-heading text-xl font-bold text-white">
            <CountUp target={1.2} suffix="M" decimals={1} />
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -left-6 top-10 size-10 animate-spin-slow rounded-full border-2 border-dashed border-violet-light/40"
        aria-hidden
      />
      <motion.div
        className="absolute -right-4 bottom-16 size-6 animate-spin-slow rounded-full border-2 border-dashed border-gold/40"
        aria-hidden
      />
    </div>
  );
}
