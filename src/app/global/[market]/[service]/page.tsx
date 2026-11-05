import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/shared/ContentPageView";
import { getMarketService, marketServices } from "@/lib/content/market-services";
import { getMarket } from "@/lib/markets";

export const dynamicParams = false;

export function generateStaticParams() {
  return marketServices.map((s) => ({ market: s.market, service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ market: string; service: string }> }): Promise<Metadata> {
  const { market, service } = await params;
  const page = getMarketService(market, service);
  if (!page) return {};
  const url = `/global/${market}/${page.slug}`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { title: page.metaTitle, description: page.metaDescription, url, type: "website" },
  };
}

export default async function MarketServicePage({ params }: { params: Promise<{ market: string; service: string }> }) {
  const { market, service } = await params;
  const page = getMarketService(market, service);
  const m = getMarket(market);
  if (!page || !m) notFound();

  return (
    <ContentPageView
      page={page}
      schemaType="Service"
      ctaHeading={`Let's grow your business in ${m.shortName}.`}
      trail={[
        { name: "Global", href: "/global" },
        { name: m.country, href: `/global/${m.slug}` },
        { name: page.eyebrow.split(" · ")[1] ?? page.title, href: `/global/${m.slug}/${page.slug}` },
      ]}
    />
  );
}
