"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, animate } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

const STORAGE_KEY = "versa-digital-loaded";
const BRAND_LETTERS = "VERSA DIGITAL".split("");
const TAGLINE = siteConfig.tagline;

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"checking" | "loading" | "splitting" | "done">("checking");
  const [counter, setCounter] = useState(0);
  const [typedTagline, setTypedTagline] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyLoaded = sessionStorage.getItem(STORAGE_KEY);

    // sessionStorage/matchMedia only exist client-side, so this can't be
    // computed during render without a server/client hydration mismatch —
    // an effect-gated skip is the correct, unavoidable pattern here.
    if (alreadyLoaded || reduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("done");
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "true");
    setPhase("loading");

    const counterControls = animate(0, 100, {
      duration: 2.1,
      ease: "easeInOut",
      onUpdate: (v) => setCounter(Math.round(v)),
    });

    let typeTimeout: ReturnType<typeof setTimeout>;
    const typeChar = (i: number) => {
      setTypedTagline(TAGLINE.slice(0, i));
      if (i < TAGLINE.length) {
        typeTimeout = setTimeout(() => typeChar(i + 1), 28);
      }
    };
    const typeStart = setTimeout(() => typeChar(0), 900);

    const splitTimer = setTimeout(() => setPhase("splitting"), 2400);
    const doneTimer = setTimeout(() => setPhase("done"), 3000);

    return () => {
      counterControls.stop();
      clearTimeout(typeStart);
      clearTimeout(typeTimeout);
      clearTimeout(splitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "checking" || phase === "done") return null;

  const splitting = phase === "splitting";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex">
        <motion.div
          className="relative flex h-full w-1/2 items-center justify-end overflow-hidden bg-bg-dark"
          animate={splitting ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-end"
            animate={{ opacity: splitting ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-1/2" />
          </motion.div>
        </motion.div>
        <motion.div
          className="relative flex h-full w-1/2 items-center justify-start overflow-hidden bg-bg-dark"
          animate={splitting ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="w-1/2" />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5"
          animate={{ opacity: splitting ? 0 : 1 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex size-20 items-center justify-center rounded-2xl bg-white p-2 shadow-2xl"
          >
            <Image src="/logo.jpg" alt="Versa Digital" width={64} height={64} className="rounded-xl" priority />
          </motion.div>

          <div className="flex gap-[2px] font-heading text-2xl font-bold tracking-[0.15em] text-white sm:text-3xl">
            {BRAND_LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.045, duration: 0.4 }}
              >
                {letter === " " ? " " : letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="h-[2px] w-[180px] bg-violet-light"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ transformOrigin: "left" }}
            transition={{ delay: 0.85, duration: 0.6, ease: "easeInOut" }}
          />

          <p className="h-5 font-mono text-xs tracking-[0.2em] text-white/60 sm:text-sm">
            {typedTagline}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 right-8 font-mono text-sm text-white/50"
          animate={{ opacity: splitting ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(counter).padStart(2, "0")}%
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
