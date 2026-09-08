import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import LoadingScreen from "@/components/layout/LoadingScreen";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { siteConfig } from "@/lib/data";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
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
  weight: ["500", "600"],
  style: ["italic", "normal"],
});

const siteUrl = "https://www.versadigital.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Versa Digital & IT Solutions — Digital Services & IT Solutions, Kerala",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Kerala's first AEO-driven digital services and IT solutions company. Performance marketing, SEO/AEO, social media, web development and lead generation — plus AI automation, agentic AI projects, custom ERP & CRM development. Kochi, Kerala.",
  keywords: [
    "Digital marketing Kerala",
    "AEO agency Kerala",
    "GEO generative engine optimization",
    "SEO Kochi",
    "social media marketing Kerala",
    "AI marketing agency",
    "web development Kerala",
    "IT solutions Kerala",
    "IT solutions company Kochi",
    "AI automation company Kerala",
    "agentic AI projects",
    "AI agentic development",
    "custom ERP development Kerala",
    "CRM development Kerala",
    "ERP CRM HRMS Kerala",
    "SaaS development Kochi",
    "Versa Digital",
    "Versa Digital IT Solutions",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Versa Digital & IT Solutions — Digital Services & IT Solutions, Kerala",
    description:
      "Kerala's first AEO-driven digital services and IT solutions company. Digital marketing that scales your brand, and IT solutions that run your business — custom ERP, CRM, AI automation, agentic AI and SaaS products.",
    images: [{ url: "/logo.jpg", width: 1254, height: 1254, alt: siteConfig.fullName }],
  },
  twitter: {
    card: "summary",
    title: "Versa Digital & IT Solutions — Digital Services & IT Solutions, Kerala",
    description: "AI-powered digital marketing and full IT solutions — SEO/AEO, ads, content, AI automation, agentic AI, custom ERP & CRM.",
  },
  alternates: { canonical: "/" },
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
    <html lang="en" className={`${bricolage.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}>
      <body className="bg-bg-light font-body text-text-dark antialiased bg-grain">
        <LoadingScreen />
        <SmoothScrollProvider>
          <Navbar />
          <main className="pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileStickyBar />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
