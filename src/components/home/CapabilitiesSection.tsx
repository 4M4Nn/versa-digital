import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { itCatalog, itCategories } from "@/lib/it-services";

export default function CapabilitiesSection() {
  return (
    <section data-navbar-theme="light" className="bg-ivory px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Full-stack IT</p>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold leading-[1.08] text-text-dark md:text-5xl">
              {itCatalog.length} IT solutions. One accountable partner.
            </h2>
          </div>
          <Link href="/it-solutions" className="inline-flex w-fit items-center gap-1.5 rounded-full bg-text-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet">
            See every capability <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-text-dark/10 bg-text-dark/10 md:grid-cols-2 lg:grid-cols-5">
          {itCategories.map((cat) => (
            <div key={cat.name} className="bg-bg-light p-7">
              <h3 className="font-heading text-base font-semibold text-text-dark">{cat.name}</h3>
              <ul className="mt-5 space-y-2.5">
                {itCatalog
                  .filter((i) => i.category === cat.name)
                  .map((i) => (
                    <li key={i.slug}>
                      <Link href={i.href} className="text-[13.5px] leading-snug text-text-muted transition-colors hover:text-violet">
                        {i.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
