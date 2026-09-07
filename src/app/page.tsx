import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/shared/Ticker";
import FixedBackgroundVideo from "@/components/shared/FixedBackgroundVideo";
import SplitVideoReveal from "@/components/shared/SplitVideoReveal";
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
import { services, siteConfig, portals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Versa Digital — Digital Services & Technology, Kerala",
  description:
    "Kerala's first AEO-driven digital services and technology company. Performance marketing, SEO/AEO, social media & web development — plus SaaS, AI automation and ERP/CRM/HRMS builds. Kochi, Kerala.",
};

const TICKER_ITEMS = [
  "AI SEO",
  "AEO MANAGEMENT",
  "SOCIAL MEDIA",
  "META ADS",
  "WEB DEVELOPMENT",
  "AI AUTOMATION",
  "SAAS & EDTECH",
  "ERP / CRM / HRMS",
  "PERFORMANCE MARKETING",
  "KERALA'S FIRST AEO AGENCY",
];

export default function HomePage() {
  return (
    <>
      <FixedBackgroundVideo src="/brand-motion.mp4" />
      <Hero />
      <Ticker items={TICKER_ITEMS} />
      <SplitVideoReveal src="/brand-motion.mp4" />
      <StatementSection />
      <TwoPortalsSection />
      {services.map((service) => (
        <ServiceStorySection key={service.id} service={service} />
      ))}
      <PackagesSection />
      <SeoPackagesSection />
      <AeoIntroSection />
      <WhyUsSection />
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
            name: siteConfig.name,
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
