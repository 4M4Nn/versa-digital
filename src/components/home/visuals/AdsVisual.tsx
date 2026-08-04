"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/shared/CountUp";

const BARS = [40, 65, 50, 80, 95];

export default function AdsVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-dark-shade p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-widest text-white/50">CAMPAIGN DASHBOARD</p>
        <span className="size-2 animate-pulse-glow rounded-full bg-emerald-400" />
      </div>

      <div className="mt-5 flex items-end gap-2.5" style={{ height: 110 }}>
        {BARS.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
            className={`flex-1 rounded-t-md ${
              i === BARS.length - 1 ? "bg-gold" : "bg-violet-light/70"
            }`}
          />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="rounded-xl bg-white/5 p-3"
        >
          <p className="text-[9px] text-white/40">ROAS</p>
          <p className="font-heading text-lg font-bold text-emerald-400">
            <CountUp target={4.2} suffix="x" decimals={1} />
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75 }}
          className="rounded-xl bg-white/5 p-3"
        >
          <p className="text-[9px] text-white/40">CPL</p>
          <p className="font-heading text-lg font-bold text-gold">
            <CountUp target={45} prefix="₹" />
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="pointer-events-none absolute -right-3 top-1/3 animate-float rounded-xl border border-white/10 bg-white px-3 py-2 shadow-lg"
      >
        <p className="text-[9px] font-semibold text-violet">Meta · Google</p>
        <p className="text-[9px] text-text-muted">Conversion +18%</p>
      </motion.div>
    </div>
  );
}
