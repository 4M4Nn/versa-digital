import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/shared/ContentPageView";
import { erpPages } from "@/lib/content/erp-solutions";

export const dynamicParams = false;

export function generateStaticParams() {
  return erpPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = erpPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/erp/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/erp/${page.slug}`, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = erpPages.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <ContentPageView
      page={page}
      schemaType="Service"
      ctaHeading="Let's map your ERP requirements."
      trail={[
        { name: "ERP Solutions", href: "/erp" },
        { name: page.title, href: `/erp/${page.slug}` },
      ]}
    />
  );
}
