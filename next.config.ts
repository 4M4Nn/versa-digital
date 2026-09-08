import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      { source: "/technology", destination: "/it-solutions", permanent: true },
      { source: "/technology/:slug*", destination: "/it-solutions/:slug*", permanent: true },
    ];
  },
};

export default nextConfig;
