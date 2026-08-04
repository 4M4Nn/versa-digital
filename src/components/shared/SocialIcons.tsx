// lucide-react in this project doesn't ship brand/social icons, so these are
// hand-drawn inline SVGs kept minimal and stroke/fill-consistent with lucide.
import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.14C15.98 3.05 15.04 3 13.94 3c-2.3 0-3.87 1.4-3.87 3.98v2.62H7.31v3.2h2.76V21h3.43z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3v5.8h-4z" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2s-.21-1.5-.86-2.15c-.82-.87-1.74-.87-2.16-.92C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.13c-.42.05-1.34.05-2.16.92C2.6 5.7 2.4 7.2 2.4 7.2S2.16 8.97 2.16 10.74v1.65c0 1.77.24 3.54.24 3.54s.21 1.5.85 2.15c.82.87 1.9.84 2.38.94C7.2 19.2 12 19.24 12 19.24s3.6-.01 6.58-.14c.42-.05 1.34-.05 2.16-.92.65-.65.86-2.15.86-2.15s.24-1.77.24-3.54v-1.65c0-1.77-.24-3.54-.24-3.54zM9.96 14.5V8.9l5.4 2.8-5.4 2.8z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.86L2 22l5.32-1.28a9.9 9.9 0 0 0 4.72 1.2h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.83 14.24c-.25.7-1.24 1.29-2.02 1.46-.53.11-1.24.2-3.62-.78-2.99-1.24-4.91-4.28-5.06-4.48-.15-.2-1.22-1.62-1.22-3.1s.77-2.2 1.05-2.5c.25-.28.55-.35.73-.35s.37 0 .53.01c.17.01.4-.06.62.48.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.09.2-.14.32-.28.5-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.18 1.38z" />
    </svg>
  );
}
