import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { siteConfig } from "@/lib/data";
import { itCatalog } from "@/lib/it-services";
import { markets } from "@/lib/markets";
import { whatsappUrl } from "@/lib/whatsapp";
import { InstagramIcon, FacebookIcon, LinkedInIcon, YouTubeIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";

const serviceLinks = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "SEO", href: "/seo" },
  { label: "AEO — AI Search", href: "/aeo" },
  { label: "Social Media Marketing", href: "/smm" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Branding & Content", href: "/services/branding-content" },
  { label: "Packages & Pricing", href: "/packages" },
];

const FEATURED_IT = [
  "custom-software-development",
  "mobile-app-development",
  "generative-ai-llm-development",
  "ai-automation",
  "client-solutions",
  "cloud-devops",
  "cybersecurity-services",
  "dedicated-development-team",
];

const techLinks = FEATURED_IT.map((slug) => itCatalog.find((i) => i.slug === slug)).filter(
  (i): i is NonNullable<typeof i> => Boolean(i)
);

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
  { label: "Industries", href: "/industries" },
  { label: "Comparisons", href: "/compare" },
  { label: "Cost guides", href: "/cost-guides" },
  { label: "Glossary", href: "/glossary" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { Icon: InstagramIcon, href: siteConfig.instagramUrl, label: "Instagram" },
  { Icon: FacebookIcon, href: siteConfig.facebookUrl, label: "Facebook" },
  { Icon: LinkedInIcon, href: siteConfig.linkedinUrl, label: "LinkedIn" },
  { Icon: YouTubeIcon, href: siteConfig.youtubeUrl, label: "YouTube" },
  { Icon: WhatsAppIcon, href: whatsappUrl(), label: "WhatsApp" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer data-navbar-theme="dark" className="bg-bg-dark px-5 pb-8 pt-20 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-serif text-3xl italic leading-snug text-white md:text-4xl">
              Marketing that compounds. Software that runs the business.
            </p>
            <p className="mt-4 text-sm text-white/55">
              Serving clients in {markets.map((m) => m.shortName).join(", ")} and India from our delivery centre in Kochi.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-text-dark transition-colors hover:bg-gold-light"
          >
            Book a strategy call
          </Link>
        </div>

        <div className="grid gap-12 pt-14 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={36} onDark />
              <span className="font-heading text-[15px] font-semibold tracking-wide">VERSA DIGITAL</span>
            </Link>
            <p className="mt-3 text-sm text-white/55">{siteConfig.fullName}</p>
            <p className="mt-1 text-sm text-white/40">{siteConfig.tagline}</p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold-light hover:text-gold-light"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <Column title="Digital Services" links={serviceLinks} />
          <Column
            title="IT Solutions"
            links={[...techLinks.map((i) => ({ label: i.name, href: i.href })), { label: "All IT solutions →", href: "/it-solutions" }]}
          />
          <Column
            title="Markets"
            links={[...markets.map((m) => ({ label: m.country, href: `/global/${m.slug}` })), { label: "Global delivery →", href: "/global" }]}
          />
          <Column title="Company" links={companyLinks} />

          <div>
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white">
                  <Phone className="size-4 shrink-0 text-gold-light" /> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.businessEmail}`} className="flex items-center gap-2.5 break-all text-sm text-white/60 hover:text-white">
                  <Mail className="size-4 shrink-0 text-gold-light" /> {siteConfig.businessEmail}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 break-all text-sm text-white/60 hover:text-white">
                  <Mail className="size-4 shrink-0 text-gold-light" /> {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-light" /> {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-xs text-white/40 sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.fullName} | Part of {siteConfig.partOf}
          </p>
          <p>Built by Loopgen Technologies</p>
        </div>
      </div>
    </footer>
  );
}
