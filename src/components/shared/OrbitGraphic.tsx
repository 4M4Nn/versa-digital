import { cn } from "@/lib/utils";

export default function OrbitGraphic({ className, tone = "dark" }: { className?: string; tone?: "light" | "dark" }) {
  const ring = tone === "dark" ? "border-white/10" : "border-text-dark/10";
  const ringGold = "border-gold/30";
  const ringViolet = tone === "dark" ? "border-violet-light/25" : "border-violet/20";

  return (
    <div className={cn("pointer-events-none relative", className)}>
      <div className={cn("absolute inset-0 rounded-full border", ring)} />
      <div className={cn("absolute inset-[8%] animate-spin-slow rounded-full border border-dashed", ringViolet)} />
      <div
        className={cn("absolute inset-[18%] rounded-full border border-dashed", ringGold)}
        style={{ animation: "spin 22s linear infinite reverse" }}
      />
      <div className={cn("absolute inset-[32%] rounded-full border", ring)} />

      {/* Orbit nodes */}
      <div className="absolute inset-[8%] animate-spin-slow">
        <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-light shadow-[0_0_16px_2px_rgba(147,51,234,0.6)]" />
      </div>
      <div className="absolute inset-[18%]" style={{ animation: "spin 22s linear infinite reverse" }}>
        <span className="absolute left-full top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_14px_2px_rgba(245,158,11,0.55)]" />
      </div>

      {/* Center core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-[14%] animate-pulse-glow rounded-full bg-gradient-to-br from-violet-light to-violet blur-[1px]" />
      </div>
    </div>
  );
}
