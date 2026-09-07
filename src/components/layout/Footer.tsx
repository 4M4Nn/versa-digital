import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { siteConfig } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from "@/components/shared/SocialIcons";

const serviceLinks = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "AI SEO + AEO", href: "/seo" },
  { label: "Social Media Marketing", href: "/smm" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Branding & Content", href: "/services/branding-content" },
];

const techLinks = [
  { label: "SaaS & EdTech", href: "/technology/saas-edtech" },
  { label: "AI & Automation", href: "/technology/ai-automation" },
  { label: "Internal Platforms", href: "/technology/internal-platforms" },
  { label: "ERP, CRM & HRMS", href: "/technology/client-solutions" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { Icon: InstagramIcon, href: siteConfig.instagramUrl, label: "Instagram" },
  { Icon: FacebookIcon, href: siteConfig.facebookUrl, label: "Facebook" },
  { Icon: LinkedInIcon, href: siteConfig.linkedinUrl, label: "LinkedIn" },
  { Icon: YouTubeIcon, href: siteConfig.youtubeUrl, label: "YouTube" },
  { Icon: WhatsAppIcon, href: whatsappUrl(), label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer data-navbar-theme="dark" className="bg-bg-dark px-5 pb-8 pt-16 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={38} onDark />
            <span className="font-heading text-base font-bold tracking-wide">VERSA DIGITAL</span>
          </Link>
          <p className="mt-3 text-sm text-white/60">{siteConfig.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
            {siteConfig.positioning}. {siteConfig.subTagline}.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-violet-light hover:text-violet-light"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-violet-light">
            Digital Services
          </h4>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-violet-light">
            Technology
          </h4>
          <ul className="mt-4 space-y-2.5">
            {techLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-violet-light">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-violet-light">
            Contact
          </h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white">
                <Phone className="size-4 shrink-0 text-violet-light" /> {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white">
                <Mail className="size-4 shrink-0 text-violet-light" /> {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-white/60">
              <MapPin className="mt-0.5 size-4 shrink-0 text-violet-light" /> {siteConfig.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6">
        <div className="flex flex-col items-center gap-2 text-center text-xs text-white/40 sm:flex-row sm:justify-between sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Versa Digital | Part of {siteConfig.partOf}
          </p>
          <p>Built by Loopgen Technologies</p>
        </div>
      </div>
    </footer>
  );
}
