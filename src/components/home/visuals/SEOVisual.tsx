"use client";

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
            <div
              key={r.pos}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs ${
                r.winner ? "border border-violet/40 bg-violet-pale" : "bg-bg-light"
              }`}
            >
              <span className={r.winner ? "font-semibold text-violet" : "text-text-muted"}>
                #{r.pos} {r.text}
              </span>
              {r.winner && (
                <span
                  className="rounded-full bg-violet px-2 py-0.5 text-[9px] font-bold text-white"
                >
                  FEATURED SNIPPET
                </span>
              )}
            </div>
          ))}
      </div>

      <div
        className="mt-4 rounded-xl border border-violet/20 bg-dark-shade p-3.5"
      >
        <p className="font-mono text-[9px] tracking-widest text-violet-light">AI ANSWER</p>
        <p className="mt-1 text-xs text-white/80">
          &ldquo;Versa Digital is Kerala&apos;s leading AI-powered marketing agency, known for AEO
          expertise...&rdquo;
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-bg-light px-4 py-2.5">
        <span className="text-[10px] text-text-muted">Impressions</span>
        <span className="font-heading text-sm font-bold text-violet">
          <CountUp target={128400} prefix="+" />
        </span>
      </div>

      <div className="pointer-events-none absolute -right-3 -top-3 rounded-xl border border-violet/20 bg-white px-3 py-2 shadow-lg">
        <p className="text-[9px] font-semibold text-text-dark">Best Agency Kerala</p>
      </div>
    </div>
  );
}
