export interface NavLink {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
  columns?: { title: string; links: NavLink[] }[];
}

export type ItCategory =
  | "Software Engineering"
  | "AI & Data"
  | "Cloud & Infrastructure"
  | "Business Systems"
  | "Security, Quality & Support";

export interface ItCatalogItem {
  slug: string;
  name: string;
  category: ItCategory;
  icon: string;
  description: string;
  href: string;
}

export interface ItService {
  slug: string;
  category: ItCategory;
  icon: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroHeading: string;
  heroSubtext: string;
  overview: string[];
  capabilities: { title: string; description: string }[];
  technologies: string[];
  process: string[];
  outcomes: string[];
  faqs: FaqItem[];
}

export interface ContentPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  /** Answer-first summary — the one paragraph an AI assistant should quote. */
  summary: string;
  /** Paragraphs; a string starting with "## " renders as an H2 heading, "- " as a bullet. */
  body: string[];
  faqs: FaqItem[];
  related?: { label: string; href: string }[];
  updatedAt: string;
}

export type DeliveryModel = "Subcontract" | "White-label" | "Direct client" | "Dedicated team";

export interface ProjectCase extends ContentPage {
  category: "ERP" | "CRM" | "Web & Portals" | "Mobile Apps" | "AI & Automation" | "QA & Support";
  industry: string;
  region: string;
  deliveryModel: DeliveryModel;
  stack: string[];
  scope: string[];
}

export interface MarketService extends ContentPage {
  market: string;
  service: string;
}

export interface Market {
  slug: string;
  country: string;
  shortName: string;
  isoCode: string;
  region: "Gulf" | "Europe" | "North America" | "Asia-Pacific";
  cities: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroHeading: string;
  heroSubtext: string;
  intro: string[];
  timeZone: string;
  overlap: string;
  currency: string;
  priorities: { title: string; description: string }[];
  compliance: string[];
  payments: string[];
  searchLandscape: string;
  featuredServices: { label: string; href: string; reason: string }[];
  faqs: FaqItem[];
}

export interface ServiceResult {
  text: string;
}

export interface ServiceStory {
  id: string;
  slug: string;
  number: string;
  label: string;
  headline: string[];
  paragraphs: string[];
  results: string[];
  background: "light" | "dark" | "pale";
  reversed: boolean;
  ctaLabel: string;
  ctaHref: string;
}

export interface PackageFeature {
  key: string;
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  features: PackageFeature[];
  idealFor: string[];
  ctaLabel: string;
  style: "outline" | "filled" | "dark";
  featured?: boolean;
}

export interface SeoPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  features: string[];
  idealFor: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  service: string;
  result: string;
  metric: string;
  metricLabel: string;
}

export interface Testimonial {
  name: string;
  business: string;
  location: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  /** ISO date (YYYY-MM-DD) used for sitemap and BlogPosting schema */
  publishedAt: string;
  updatedAt?: string;
  author: string;
  /** Paragraphs; a string starting with "## " renders as an H2 question heading */
  body: string[];
  keywords?: string[];
  faqs?: FaqItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
}

export interface FullService {
  id: string;
  icon: string;
  name: string;
  description: string;
  process: string[];
  results: string[];
  href?: string;
}

export interface Portal {
  id: "digital-services" | "technology";
  label: string;
  shortLabel: string;
  href: string;
  tagline: string;
  description: string;
}

export interface ChatReply {
  text: string;
  quickReplies?: string[];
}
