import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    disableStaticImages: true,
  },
};

export default nextConfig;
