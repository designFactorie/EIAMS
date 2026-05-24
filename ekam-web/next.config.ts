import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/EIAMS',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
