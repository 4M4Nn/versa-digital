import type { Metadata } from "next";
import ContentHub from "@/components/shared/ContentHub";
import { comparisons } from "@/lib/content/comparisons";

export const metadata: Metadata = {
  alternates: { canonical: "/compare" },
  title: "Technology & Marketing Comparisons — Odoo vs Zoho, Flutter vs React Native, SEO vs AEO",
  description: "Independent comparisons for business buyers: SEO vs AEO, Odoo vs Zoho, React Native vs Flutter, Shopify vs WooCommerce, AWS vs Azure vs Google Cloud, Next.js vs WordPress and more.",
};

export default function Page() {
  return (
    <ContentHub
      label="COMPARISONS"
      heading="Honest comparisons to help you choose."
      intro="Side-by-side guides to the decisions businesses face — platforms, frameworks, cloud providers and engagement models — written by the team that implements them."
      basePath="/compare"
      trailName="Comparisons"
      pages={comparisons}
    />
  );
}
