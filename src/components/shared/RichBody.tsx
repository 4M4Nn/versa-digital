import type { ReactNode } from "react";

export default function RichBody({ body }: { body: string[] }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];

  const flush = () => {
    if (list.length === 0) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="mb-6 space-y-2.5 border-l border-gold/40 pl-5">
        {list.map((item) => (
          <li key={item} className="text-[16px] leading-relaxed text-text-dark/85">
            {item}
          </li>
        ))}
      </ul>
    );
    list = [];
  };

  body.forEach((p, i) => {
    if (p.startsWith("- ")) {
      list.push(p.slice(2));
      return;
    }
    flush();
    if (p.startsWith("## ")) {
      blocks.push(
        <h2 key={i} className="mb-4 mt-12 font-heading text-2xl font-semibold leading-snug text-text-dark first:mt-0 md:text-[1.7rem]">
          {p.slice(3)}
        </h2>
      );
    } else {
      blocks.push(
        <p key={i} className="mb-5 text-[16.5px] leading-[1.75] text-text-dark/85">
          {p}
        </p>
      );
    }
  });
  flush();

  return <>{blocks}</>;
}
