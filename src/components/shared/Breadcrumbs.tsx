import Link from "next/link";

const SITE_URL = "https://www.versadigital.in";

export default function Breadcrumbs({ items, dark = true }: { items: { name: string; href: string }[]; dark?: boolean }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={dark ? "text-white/50" : "text-text-muted"}>
        <ol className="flex flex-wrap items-center gap-1.5 text-xs">
          {all.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span className={dark ? "text-white/80" : "text-text-dark"}>{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: all.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              item: `${SITE_URL}${item.href === "/" ? "/" : item.href}`,
            })),
          }),
        }}
      />
    </>
  );
}
