import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free strategy call with Versa Digital. Call, WhatsApp, or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        label="/ GET STARTED"
        heading="Let's grow your brand."
        subtext="Book a free 30-minute strategy call — no commitment, just clarity."
      />
      <ContactSection />
    </div>
  );
}
