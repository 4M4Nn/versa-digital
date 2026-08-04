export default function Ticker({ items }: { items: string[] }) {
  const content = items.join("   ·   ") + "   ·   ";

  return (
    <div className="overflow-hidden bg-dark-shade py-4">
      <div className="flex w-max animate-ticker">
        <span className="whitespace-nowrap px-4 font-mono text-xs tracking-[0.2em] text-white/80 sm:text-sm">
          {content}
        </span>
        <span className="whitespace-nowrap px-4 font-mono text-xs tracking-[0.2em] text-white/80 sm:text-sm" aria-hidden="true">
          {content}
        </span>
      </div>
    </div>
  );
}
