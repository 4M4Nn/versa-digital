import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/shared/ContentPageView";
import { outsourcingPages } from "@/lib/content/outsourcing";

export const dynamicParams = false;

export function generateStaticParams() {
  return outsourcingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = outsourcingPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/outsourcing/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/outsourcing/${page.slug}`, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = outsourcingPages.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <ContentPageView
      page={page}
      schemaType="Service"
      ctaHeading="Need a delivery partner behind your next contract?"
      trail={[
        { name: "Outsourcing", href: "/outsourcing" },
        { name: page.title, href: `/outsourcing/${page.slug}` },
      ]}
    />
  );
}
