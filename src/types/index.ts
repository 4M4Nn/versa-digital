export interface NavLink {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
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
  author: string;
  body: string[];
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
