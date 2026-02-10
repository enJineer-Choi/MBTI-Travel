import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable webpack cache to avoid large cache files in Cloudflare Pages
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  // Disable source maps in production to save space
  productionBrowserSourceMaps: false,
};

export default nextConfig;
