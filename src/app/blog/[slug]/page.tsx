import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div data-navbar-theme="dark">
      <section className="relative h-72 md:h-96">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-bg-dark/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-5 pb-10 md:px-8">
          <span className="rounded-full bg-violet px-3 py-1 text-[10px] font-bold text-white">{post.category}</span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-white md:text-4xl">{post.title}</h1>
          <p className="mt-2 text-sm text-white/70">
            {post.date} · {post.author}
          </p>
        </div>
      </section>

      <article data-navbar-theme="light" className="bg-bg-light px-5 py-14 md:px-8">
        <div className="mx-auto max-w-2xl">
          {post.body.map((paragraph, i) => (
            <p key={i} className="mb-5 text-base leading-relaxed text-text-dark/85">
              {paragraph}
            </p>
          ))}

          <div className="mt-12 rounded-2xl border border-violet/15 bg-violet-pale p-7">
            <p className="font-heading text-lg font-bold text-text-dark">
              Ready to put this into practice for your business?
            </p>
            <a
              href={whatsappUrl(`Hi Versa Digital, I read "${post.title}" and would like to talk.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-light"
            >
              Book a Free Consultation <ArrowRight className="size-4" />
            </a>
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-heading text-xl font-bold text-text-dark">More insights</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-xl border border-text-dark/10 bg-white p-5 transition-colors hover:border-violet/40"
                  >
                    <span className="text-xs font-semibold text-violet">{p.category}</span>
                    <h3 className="mt-1 font-heading text-sm font-bold text-text-dark group-hover:text-violet">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
