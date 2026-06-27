import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  reactCompiler: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    minimumCacheTTL: 2678400, // 31 days
    qualities: [65, 75],
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [64, 128, 256, 384],
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
