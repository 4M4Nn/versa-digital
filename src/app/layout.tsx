import type { Metadata } from "next";
import { Inter_Tight, Plus_Jakarta_Sans, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { siteConfig } from "@/lib/data";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
});

const siteUrl = "https://www.versadigital.in";
const defaultTitle = "Versa Digital & IT Solutions — Digital Marketing, SEO/AEO & IT Solutions";
const defaultDescription =
  "Premium digital marketing, SEO and AEO, custom software, AI automation and full IT solutions for businesses in the UAE, UK, USA, Saudi Arabia, Canada, Australia and India — delivered by one senior team from Kochi.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: defaultDescription,
  keywords: [
    "digital marketing agency",
    "AEO agency",
    "answer engine optimisation",
    "generative engine optimization",
    "SEO agency for UAE businesses",
    "offshore SEO agency UK",
    "offshore software development company India",
    "IT solutions company",
    "custom software development",
    "mobile app development company",
    "AI automation agency",
    "agentic AI development",
    "custom ERP development",
    "CRM development",
    "dedicated developers India",
    "digital marketing agency Dubai",
    "IT outsourcing India",
    "Digital marketing Kerala",
    "IT solutions company Kochi",
    "Versa Digital",
    "Versa Digital IT Solutions",
  ],
  authors: [{ name: siteConfig.fullName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AE", "en_IN"],
    url: siteUrl,
    siteName: siteConfig.fullName,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: "/logo.jpg", width: 1254, height: 1254, alt: siteConfig.fullName }],
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: "SEO & AEO, performance marketing, custom software, AI automation and IT solutions for the UAE, UK, USA and India.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}>
      <body className="bg-bg-light font-body text-text-dark antialiased bg-grain">
        <SmoothScroll />
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
