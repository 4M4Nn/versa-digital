import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/shared/ContentPageView";
import { glossary } from "@/lib/content/glossary";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossary.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = glossary.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/glossary/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/glossary/${page.slug}`, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = glossary.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <ContentPageView
      page={page}
      schemaType="DefinedTerm"
      ctaHeading="Need help applying this?"
      trail={[
        { name: "Glossary", href: "/glossary" },
        { name: page.title, href: `/glossary/${page.slug}` },
      ]}
    />
  );
}
