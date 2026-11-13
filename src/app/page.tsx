import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import PracticesSection from "@/components/home/PracticesSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import AeoBand from "@/components/home/AeoBand";
import PartnerSection from "@/components/home/PartnerSection";
import MarketsSection from "@/components/home/MarketsSection";
import ProofSection from "@/components/home/ProofSection";
import InsightsSection from "@/components/home/InsightsSection";
import FaqBlock from "@/components/shared/FaqBlock";
import ClosingCta from "@/components/shared/ClosingCta";
import { GLOBAL_AREA_SERVED } from "@/components/shared/ServiceSchema";
import { globalFaqs, portals, siteConfig } from "@/lib/data";

const SITE_URL = "https://www.versadigital.in";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: { absolute: "Versa Digital & IT Solutions — Digital Marketing, SEO/AEO & IT Solutions for UAE, UK, USA & India" },
  description:
    "Premium digital marketing, SEO and AEO, custom software, AI automation and full IT solutions for businesses in the UAE, UK, USA, Saudi Arabia, Canada, Australia and India — delivered by one senior team from Kochi.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PracticesSection />
      <CapabilitiesSection />
      <PartnerSection />
      <AeoBand />
      <MarketsSection />
      <ProofSection />
      <InsightsSection />
      <FaqBlock faqs={globalFaqs.slice(0, 5)} heading="Questions international clients ask us" label="FAQ" />
      <ClosingCta
        heading="Let's build what's next."
        subtext="A 30-minute call with a senior strategist or engineer — in your time zone, with a clear next step at the end."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: siteConfig.fullName,
            alternateName: siteConfig.name,
            description: siteConfig.positioning,
            url: SITE_URL,
            telephone: siteConfig.phone,
            email: siteConfig.businessEmail,
            logo: `${SITE_URL}/icon.png`,
            image: `${SITE_URL}/logo.jpg`,
            slogan: siteConfig.tagline,
            address: {
              "@type": "PostalAddress",
              streetAddress: "3rd Floor, Jogeo Building, Chembumukku",
              addressLocality: "Kakkanad, Kochi",
              addressRegion: "Kerala",
              postalCode: "682021",
              addressCountry: "IN",
            },
            areaServed: GLOBAL_AREA_SERVED.map((name) => ({ "@type": "Country", name })),
            knowsLanguage: ["en", "ar", "ml", "hi"],
            sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl, siteConfig.linkedinUrl, siteConfig.youtubeUrl],
            parentOrganization: { "@type": "Organization", name: siteConfig.partOf },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Versa Digital & IT Solutions",
              itemListElement: portals.map((portal) => ({
                "@type": "OfferCatalog",
                name: portal.label,
                url: `${SITE_URL}${portal.href}`,
                description: portal.description,
              })),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.fullName,
            url: SITE_URL,
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
          }),
        }}
      />
    </>
  );
}
