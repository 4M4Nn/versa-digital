import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function InsightsSection() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section data-navbar-theme="light" className="bg-bg-light px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Insights</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-text-dark md:text-5xl">Thinking from our desk.</h2>
          </div>
          <Link href="/blog" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-violet hover:text-violet-light">
            All insights <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ivory">
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                {post.category} · {post.date}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-text-dark transition-colors group-hover:text-violet">{post.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-text-muted">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
