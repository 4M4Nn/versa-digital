import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on AEO, AI marketing, and performance advertising from the Versa Digital team.",
};

export default function BlogPage() {
  return (
    <div>
      <PageHero label="/ KNOWLEDGE HUB" heading="Insights from our desk." />

      <section data-navbar-theme="light" className="bg-bg-light px-5 py-20 md:px-8 md:py-24">
        <StaggerGroup className="mx-auto grid max-w-6xl gap-7 md:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-text-dark/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-bg-dark/80 px-3 py-1 text-[10px] font-bold text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-text-muted">
                    {post.date} · {post.author}
                  </p>
                  <h2 className="mt-2 font-heading text-base font-bold text-text-dark group-hover:text-violet">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm text-text-muted">{post.excerpt}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-violet">
                    Read more <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </div>
  );
}
