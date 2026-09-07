"use client";

import { motion, type Variants } from "framer-motion";
import { Circle, Diamond, Hexagon, Asterisk, Plus, Triangle, Square, CircleDot, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackdropPiece {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  top: string;
  left: string;
  size: number;
  rotate?: number;
  anim: "animate-float" | "animate-float-slow" | "animate-drift";
}

// Abstract, minimal shapes rather than literal marketing-app icons — reads
// as an editorial motif instead of a scatter of social-media clipart.
const VARIANTS: Record<string, BackdropPiece[]> = {
  a: [
    { Icon: Circle, top: "10%", left: "6%", size: 26, rotate: -8, anim: "animate-float" },
    { Icon: Hexagon, top: "18%", left: "90%", size: 30, rotate: 6, anim: "animate-float-slow" },
    { Icon: Diamond, top: "72%", left: "8%", size: 22, rotate: 12, anim: "animate-drift" },
    { Icon: CircleDot, top: "82%", left: "88%", size: 22, rotate: -10, anim: "animate-float" },
    { Icon: Triangle, top: "40%", left: "94%", size: 20, anim: "animate-float-slow" },
    { Icon: Asterisk, top: "6%", left: "78%", size: 24, rotate: 8, anim: "animate-drift" },
    { Icon: Sparkles, top: "55%", left: "3%", size: 18, anim: "animate-float" },
    { Icon: Plus, top: "90%", left: "40%", size: 18, rotate: -6, anim: "animate-float-slow" },
  ],
  b: [
    { Icon: Triangle, top: "12%", left: "10%", size: 24, rotate: -6, anim: "animate-float" },
    { Icon: Square, top: "78%", left: "6%", size: 20, rotate: 10, anim: "animate-drift" },
    { Icon: Circle, top: "20%", left: "92%", size: 26, rotate: -4, anim: "animate-float-slow" },
    { Icon: Diamond, top: "60%", left: "94%", size: 22, anim: "animate-float" },
    { Icon: Sparkles, top: "85%", left: "82%", size: 18, rotate: 8, anim: "animate-drift" },
    { Icon: Hexagon, top: "8%", left: "82%", size: 22, anim: "animate-float" },
    { Icon: Asterisk, top: "45%", left: "4%", size: 20, rotate: -8, anim: "animate-float-slow" },
  ],
  c: [
    { Icon: Asterisk, top: "14%", left: "8%", size: 28, rotate: 6, anim: "animate-float" },
    { Icon: Hexagon, top: "76%", left: "10%", size: 26, rotate: -8, anim: "animate-drift" },
    { Icon: Circle, top: "10%", left: "88%", size: 24, anim: "animate-float-slow" },
    { Icon: Triangle, top: "82%", left: "90%", size: 22, rotate: 10, anim: "animate-float" },
    { Icon: Square, top: "50%", left: "95%", size: 18, anim: "animate-drift" },
    { Icon: Diamond, top: "40%", left: "3%", size: 18, rotate: -6, anim: "animate-float-slow" },
    { Icon: CircleDot, top: "92%", left: "45%", size: 20, anim: "animate-float" },
  ],
  d: [
    { Icon: Sparkles, top: "8%", left: "12%", size: 22, anim: "animate-float" },
    { Icon: CircleDot, top: "70%", left: "5%", size: 24, rotate: 8, anim: "animate-drift" },
    { Icon: Circle, top: "16%", left: "90%", size: 22, rotate: -6, anim: "animate-float-slow" },
    { Icon: Diamond, top: "86%", left: "85%", size: 26, anim: "animate-float" },
    { Icon: Plus, top: "48%", left: "92%", size: 18, rotate: 10, anim: "animate-drift" },
    { Icon: Asterisk, top: "38%", left: "4%", size: 20, anim: "animate-float-slow" },
  ],
};

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const pieceVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function MarketingBackdrop({
  variant = "a",
  tone = "light",
}: {
  variant?: "a" | "b" | "c" | "d";
  tone?: "light" | "dark";
}) {
  const pieces = VARIANTS[variant];
  const colorClass = tone === "dark" ? "text-violet-light" : "text-violet";

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {pieces.map((piece, i) => {
        const isGold = i % 5 === 4;
        return (
          <motion.div
            key={i}
            variants={pieceVariants}
            className="absolute opacity-[0.14]"
            style={{ top: piece.top, left: piece.left, rotate: piece.rotate ?? 0 }}
          >
            <div className={piece.anim}>
              <piece.Icon
                className={cn(isGold ? "text-gold" : colorClass)}
                style={{ width: piece.size, height: piece.size }}
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
