import { siteConfig } from "@/lib/data";

const SITE_URL = "https://www.versadigital.in";

export const GLOBAL_AREA_SERVED = [
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Saudi Arabia",
  "Qatar",
  "Canada",
  "Australia",
  "Singapore",
  "India",
];

export default function ServiceSchema({
  name,
  description,
  serviceType,
  url,
  areaServed = GLOBAL_AREA_SERVED,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed?: string | string[];
}) {
  const areas = (Array.isArray(areaServed) ? areaServed : [areaServed]).map((a) => ({ "@type": "Country", name: a }));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name,
          description,
          serviceType,
          url: `${SITE_URL}${url}`,
          areaServed: areas,
          provider: {
            "@type": "Organization",
            name: siteConfig.fullName,
            url: SITE_URL,
            telephone: siteConfig.phone,
            email: siteConfig.businessEmail,
          },
        }),
      }}
    />
  );
}
