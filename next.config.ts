import withVercelToolbar from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    rules: {
      "*.mdx": {
        loaders: ["turbopack-mdx-loader"],
        as: "*.tsx",
      },
    },
  },

  // temporary redirect for any old, lingering urls
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/experience/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/posts/:path*",
        destination: "/writing/:path*",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/archive",
        permanent: true,
      },
      {
        source: "/blog/tags/:path*",
        destination: "/archive",
        permanent: true,
      },
    ];
  },
};

const configWithVercelToolbar = withVercelToolbar()(nextConfig);

export default configWithVercelToolbar;
