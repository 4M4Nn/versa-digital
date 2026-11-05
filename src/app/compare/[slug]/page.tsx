import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/shared/ContentPageView";
import { comparisons } from "@/lib/content/comparisons";

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisons.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = comparisons.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/compare/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/compare/${page.slug}`, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = comparisons.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <ContentPageView
      page={page}
      schemaType="Article"
      ctaHeading="Still deciding? Ask an expert."
      trail={[
        { name: "Comparisons", href: "/compare" },
        { name: page.title, href: `/compare/${page.slug}` },
      ]}
    />
  );
}
