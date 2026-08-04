import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/shared/Ticker";
import StatementSection from "@/components/home/StatementSection";
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
import { services, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Versa Digital — Kerala's #1 AI Digital Marketing Agency",
  description:
    "Kerala's first AEO management agency. AI-powered SEO, social media, performance marketing and content creation. Kochi, Kerala.",
};

const TICKER_ITEMS = [
  "AI SEO",
  "AEO MANAGEMENT",
  "SOCIAL MEDIA",
  "META ADS",
  "CONTENT CREATION",
  "BRAND STRATEGY",
  "PERFORMANCE MARKETING",
  "VIDEO PRODUCTION",
  "KERALA'S FIRST AEO AGENCY",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker items={TICKER_ITEMS} />
      <StatementSection />
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
            "@type": "MarketingAgency",
            name: siteConfig.name,
            description: siteConfig.type,
            url: "https://www.versadigital.in",
            telephone: siteConfig.phone,
            email: siteConfig.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jogeo Building, Chembumukku",
              addressLocality: "Kakkanad, Kochi",
              addressRegion: "Kerala",
              postalCode: "682021",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </>
  );
}
