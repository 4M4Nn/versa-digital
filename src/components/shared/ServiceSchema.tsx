import { siteConfig } from "@/lib/data";

const SITE_URL = "https://www.versadigital.in";

export default function ServiceSchema({
  name,
  description,
  serviceType,
  url,
  areaServed = "Kerala, India",
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed?: string;
}) {
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
          areaServed,
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: SITE_URL,
            telephone: siteConfig.phone,
            email: siteConfig.email,
          },
        }),
      }}
    />
  );
}
