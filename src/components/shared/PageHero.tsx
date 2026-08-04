import Reveal from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export default function PageHero({
  label,
  heading,
  subtext,
  dark = true,
}: {
  label: string;
  heading: string;
  subtext?: string;
  dark?: boolean;
}) {
  return (
    <section
      data-navbar-theme={dark ? "dark" : "light"}
      className={cn(
        "relative overflow-hidden px-5 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-40",
        dark ? "bg-bg-dark" : "bg-bg-light"
      )}
    >
      {dark && (
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-violet/20 blur-3xl" />
      )}
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <span className={cn("font-mono text-[11px] font-semibold tracking-[0.25em]", dark ? "text-violet-light" : "text-violet")}>
            {label}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className={cn("mt-4 font-heading text-4xl font-extrabold leading-tight md:text-6xl", dark ? "text-white" : "text-text-dark")}>
            {heading}
          </h1>
        </Reveal>
        {subtext && (
          <Reveal delay={0.2}>
            <p className={cn("mx-auto mt-5 max-w-xl text-base md:text-lg", dark ? "text-white/70" : "text-text-muted")}>
              {subtext}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
