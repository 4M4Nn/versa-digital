"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { siteConfig } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex bg-violet md:hidden">
      <a
        href={`tel:${siteConfig.phoneHref}`}
        className="flex min-h-12 flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
      >
        <Phone className="size-4" /> Call
      </a>
      <a
        href={whatsappUrl("Hi Versa Digital, I'd like to know more.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 flex-1 items-center justify-center gap-2 border-l border-white/20 py-3.5 text-sm font-semibold text-white"
      >
        <WhatsAppIcon className="size-4" /> WhatsApp
      </a>
    </div>
  );
}
