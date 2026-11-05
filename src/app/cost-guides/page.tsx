import type { Metadata } from "next";
import ContentHub from "@/components/shared/ContentHub";
import { costGuides } from "@/lib/content/cost-guides";

export const metadata: Metadata = {
  alternates: { canonical: "/cost-guides" },
  title: "Cost Guides 2026 — App, Website, E-commerce, ERP, Cloud & SEO Pricing",
  description: "Indicative 2026 cost guides for app development in the UAE, business websites, e-commerce stores, custom ERP, cloud migration and SEO/AEO services — with cost drivers and planning tips.",
};

export default function Page() {
  return (
    <ContentHub
      label="COST GUIDES"
      heading="What things really cost — before you ask for quotes."
      intro="Indicative 2026 pricing for apps, websites, e-commerce, ERP, cloud migration and SEO/AEO, with the drivers that move the number up or down."
      basePath="/cost-guides"
      trailName="Cost guides"
      pages={costGuides}
    />
  );
}
