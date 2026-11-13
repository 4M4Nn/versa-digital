import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/shared/ContentPageView";
import { projectCases } from "@/lib/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectCases.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = projectCases.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/projects/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url: `/projects/${page.slug}`, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = projectCases.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <ContentPageView
      page={page}
      schemaType="Article"
      ctaHeading="Have a similar project in your pipeline?"
      trail={[
        { name: "Projects", href: "/projects" },
        { name: page.title, href: `/projects/${page.slug}` },
      ]}
    />
  );
}
