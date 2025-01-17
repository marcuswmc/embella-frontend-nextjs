import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'microsites.cupraofficial.pt',
      },
    ],
  },
};

export default nextConfig;
