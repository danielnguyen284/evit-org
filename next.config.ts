import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evit-org.com',
      },
      {
        protocol: 'https',
        hostname: 'evitconsulting.com',
      },
    ],
  },
};

export default nextConfig;
