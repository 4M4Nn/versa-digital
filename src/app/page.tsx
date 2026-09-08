import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/shared/Ticker";
import SignatureSection from "@/components/home/SignatureSection";
import StatementSection from "@/components/home/StatementSection";
import TwoPortalsSection from "@/components/home/TwoPortalsSection";
import ServiceStorySection from "@/components/home/ServiceStorySection";
import PackagesSection from "@/components/home/PackagesSection";
import SeoPackagesSection from "@/components/home/SeoPackagesSection";
import AeoIntroSection from "@/components/home/AeoIntroSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ResultsSection from "@/components/home/ResultsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import CtaBannerSection from "@/components/home/CtaBannerSection";
import ContactSection from "@/components/home/ContactSection";
import GoldDivider from "@/components/shared/GoldDivider";
import { services, siteConfig, portals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Versa Digital & IT Solutions — Digital Services & IT Solutions, Kerala",
  description:
    "Kerala's first AEO-driven digital services and IT solutions company. Performance marketing, SEO/AEO, social media & web development — plus AI automation, agentic AI, custom ERP & CRM development. Kochi, Kerala.",
};

const TICKER_ITEMS = [
  "AI SEO",
  "AEO MANAGEMENT",
  "SOCIAL MEDIA",
  "META ADS",
  "WEB DEVELOPMENT",
  "AI AUTOMATION",
  "AGENTIC AI",
  "CUSTOM ERP & CRM",
  "SAAS & EDTECH",
  "PERFORMANCE MARKETING",
  "KERALA'S FIRST AEO AGENCY",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker items={TICKER_ITEMS} />
      <SignatureSection />
      <GoldDivider />
      <StatementSection />
      <TwoPortalsSection />
      {services.map((service) => (
        <ServiceStorySection key={service.id} service={service} />
      ))}
      <PackagesSection />
      <SeoPackagesSection />
      <AeoIntroSection />
      <WhyUsSection />
      <GoldDivider />
      <ResultsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CtaBannerSection />
      <ContactSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.fullName,
            alternateName: siteConfig.name,
            description: siteConfig.positioning,
            url: "https://www.versadigital.in",
            telephone: siteConfig.phone,
            email: siteConfig.email,
            logo: "https://www.versadigital.in/icon.png",
            image: "https://www.versadigital.in/icon.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3rd Floor, Jogeo Building, Chembumukku",
              addressLocality: "Kakkanad, Kochi",
              addressRegion: "Kerala",
              postalCode: "682021",
              addressCountry: "IN",
            },
            parentOrganization: { "@type": "Organization", name: siteConfig.partOf },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Versa Digital Portals",
              itemListElement: portals.map((portal) => ({
                "@type": "OfferCatalog",
                name: portal.label,
                url: `https://www.versadigital.in${portal.href}`,
                description: portal.description,
              })),
            },
          }),
        }}
      />
    </>
  );
}
