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
        source: "/industries-insights",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/industries-insights/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
