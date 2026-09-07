import Reveal from "@/components/shared/Reveal";
import OrbitGraphic from "@/components/shared/OrbitGraphic";

export default function SignatureSection() {
  return (
    <section
      data-navbar-theme="dark"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-bg-dark px-5 py-24 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-3xl" />
      </div>

      <OrbitGraphic
        tone="dark"
        className="absolute left-1/2 top-1/2 z-0 size-[480px] -translate-x-1/2 -translate-y-1/2 opacity-70 md:size-[640px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet-light">
            / STRATEGIZE. CREATE. SCALE.
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-4xl italic leading-tight text-white sm:text-5xl md:text-6xl">
            Brand and business, engineered together.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Everything Versa Digital builds — the campaigns, the content, the software — comes
            from one discipline: strategy first, execution that compounds.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
