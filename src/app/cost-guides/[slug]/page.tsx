import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/shared/ContentPageView";
import { costGuides } from "@/lib/content/cost-guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return costGuides.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = costGuides.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/cost-guides/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/cost-guides/${page.slug}`, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = costGuides.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <ContentPageView
      page={page}
      schemaType="Article"
      ctaHeading="Get a fixed quote for your project."
      trail={[
        { name: "Cost guides", href: "/cost-guides" },
        { name: page.title, href: `/cost-guides/${page.slug}` },
      ]}
    />
  );
}
