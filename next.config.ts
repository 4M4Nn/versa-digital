import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "versadigital.in" }],
        destination: "https://www.versadigital.in/:path*",
        permanent: true,
      },
      { source: "/technology", destination: "/it-solutions", permanent: true },
      { source: "/technology/:slug*", destination: "/it-solutions/:slug*", permanent: true },
    ];
  },
};

export default nextConfig;
