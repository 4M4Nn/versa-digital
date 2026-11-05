import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/shared/ContentPageView";
import { industries } from "@/lib/content/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = industries.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/industries/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/industries/${page.slug}`, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = industries.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <ContentPageView
      page={page}
      schemaType="Service"
      ctaHeading="Let's talk about your industry."
      trail={[
        { name: "Industries", href: "/industries" },
        { name: page.title, href: `/industries/${page.slug}` },
      ]}
    />
  );
}
