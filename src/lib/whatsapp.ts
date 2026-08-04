import { siteConfig } from "@/lib/data";

export interface WhatsAppLeadData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
}

export function openWhatsApp(data?: WhatsAppLeadData) {
  const url = data
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
        `Hello Versa Digital,\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${
          data.email || "N/A"
        }\n\nService: ${data.service || "General"}\n\nPlease contact me.`
      )}`
    : whatsappUrl();
  window.open(url, "_blank", "noopener,noreferrer");
}

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
