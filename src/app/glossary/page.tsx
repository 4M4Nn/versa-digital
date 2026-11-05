import type { Metadata } from "next";
import ContentHub from "@/components/shared/ContentHub";
import { glossary } from "@/lib/content/glossary";

export const metadata: Metadata = {
  alternates: { canonical: "/glossary" },
  title: "Digital Marketing, AI & IT Glossary — AEO, GEO, RAG, ERP and More",
  description: "Plain-English definitions of AEO, GEO, AI Overviews, LLMs, RAG, agentic AI, schema markup, Core Web Vitals, hreflang, ERP, CRM, VAPT, CI/CD and other terms businesses need to know.",
};

export default function Page() {
  return (
    <ContentHub
      label="GLOSSARY"
      heading="Digital marketing, AI and IT terms — explained plainly."
      intro="Clear, answer-first definitions of the terms that matter when you buy marketing, AI and software services: AEO, GEO, RAG, agentic AI, ERP, VAPT and more."
      basePath="/glossary"
      trailName="Glossary"
      pages={glossary}
    />
  );
}
