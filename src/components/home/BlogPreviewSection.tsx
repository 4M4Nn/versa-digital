"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import MarketingBackdrop from "@/components/shared/MarketingBackdrop";
import { StaggerGroup, StaggerItem } from "@/components/shared/StaggerReveal";
import { blogPosts } from "@/lib/data";

export default function BlogPreviewSection() {
  return (
    <section data-navbar-theme="light" className="relative overflow-hidden bg-bg-light/90 px-5 py-20 md:px-8 md:py-28">
      <MarketingBackdrop variant="c" tone="light" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4 text-center sm:text-left">
          <div>
            <Reveal>
              <span className="font-mono text-[11px] font-semibold tracking-[0.25em] text-violet">
                / KNOWLEDGE HUB
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-heading text-4xl font-extrabold text-text-dark md:text-5xl">
                Insights from our desk.
              </h2>
            </Reveal>
          </div>
          <Link href="/blog" className="hidden items-center gap-1.5 text-sm font-semibold text-violet hover:text-violet-light sm:flex">
            View all posts <ArrowRight className="size-4" />
          </Link>
        </div>

        <StaggerGroup className="mt-14 grid gap-7 md:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl border border-text-dark/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
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
                  <p className="text-xs text-text-muted">{post.date}</p>
                  <h3 className="mt-2 font-heading text-base font-bold text-text-dark group-hover:text-violet">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-text-muted">{post.excerpt}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
