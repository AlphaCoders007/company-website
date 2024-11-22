import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/**", // This allows any path from this hostname
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // This allows any path from this hostname
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
