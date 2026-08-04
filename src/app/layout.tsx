import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
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

const siteUrl = "https://www.versadigital.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Versa Digital — Kerala's #1 AI Digital Marketing Agency",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Kerala's first AEO management agency. AI-powered SEO, social media, performance marketing and content creation. Kochi, Kerala.",
  keywords: [
    "Digital marketing Kerala",
    "AEO agency Kerala",
    "SEO Kochi",
    "social media marketing Kerala",
    "AI marketing agency",
    "Versa Digital",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Versa Digital — Kerala's #1 AI Digital Marketing Agency",
    description:
      "Kerala's first AEO management agency. AI-powered SEO, social media, performance marketing and content creation.",
    images: [{ url: "/logo.jpg", width: 1254, height: 1254, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary",
    title: "Versa Digital — Kerala's #1 AI Digital Marketing Agency",
    description: "Kerala's first AEO management agency. AI-powered marketing that thinks, performs, scales.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg-light font-body text-text-dark antialiased">
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
