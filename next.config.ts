import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/get-started",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/insights",
        destination: "/industries-insights",
        permanent: true,
      },
      {
        source: "/insights/:slug",
        destination: "/industries-insights/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
