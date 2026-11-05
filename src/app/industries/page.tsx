import type { Metadata } from "next";
import ContentHub from "@/components/shared/ContentHub";
import { industries } from "@/lib/content/industries";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries We Serve — Real Estate, Healthcare, Education, E-commerce & More",
  description: "Digital marketing and IT solutions for real estate, healthcare, education, e-commerce, hospitality, logistics, professional services, SaaS, manufacturing and financial services across the UAE, UK, USA and India.",
};

export default function Page() {
  return (
    <ContentHub
      label="INDUSTRIES"
      heading="Marketing and technology, built for your industry."
      intro="How we combine digital growth and IT solutions for real estate, healthcare, education, e-commerce, hospitality, logistics, professional services, SaaS, manufacturing and financial services."
      basePath="/industries"
      trailName="Industries"
      pages={industries}
    />
  );
}
