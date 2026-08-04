"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import CountUp from "@/components/shared/CountUp";

const PLATFORMS = ["Instagram", "Facebook", "LinkedIn"];

export default function SocialVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-lg justify-center gap-3">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-violet/20 blur-3xl" />

      {PLATFORMS.map((platform, i) => (
        <motion.div
          key={platform}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className={`w-[30%] shrink-0 rounded-[1.4rem] border-4 border-white/10 bg-dark-shade p-2.5 shadow-2xl ${
            i === 1 ? "translate-y-[-14px]" : ""
          }`}
        >
          <p className="mb-2 text-center font-mono text-[8px] tracking-widest text-white/40">{platform}</p>
          <div className="space-y-2">
            {[0, 1].map((j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15 + j * 0.2 }}
                className="rounded-lg bg-white/5 p-2"
              >
                <div className="aspect-square w-full rounded-md bg-gradient-to-br from-violet/40 to-violet-light/20" />
                <div className="mt-1.5 flex items-center gap-1">
                  <Heart className="size-2.5 fill-violet-light text-violet-light" />
                  <span className="text-[8px] text-white/60">Amazing post!</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-violet-light/30 bg-white/95 px-5 py-2.5 shadow-xl"
      >
        <p className="text-center font-mono text-[9px] tracking-widest text-text-muted">ENGAGEMENT RATE</p>
        <p className="text-center font-heading text-xl font-bold text-violet">
          <CountUp target={8.2} suffix="%" duration={1.4} decimals={1} />
        </p>
      </motion.div>
    </div>
  );
}
