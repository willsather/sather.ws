import withVercelToolbar from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: false,
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
        source: "/archive",
        destination: "/thoughts",
        permanent: true,
      },
      {
        source: "/writing/:path*",
        destination: "/thoughts/:path*",
        permanent: true,
      },
      {
        source: "/blog/posts/:path*",
        destination: "/thoughts/:path*",
        permanent: true,
      },
      {
        source: "/blog/rss.xml",
        destination: "/thoughts/rss.xml",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/thoughts",
        permanent: true,
      },
      {
        source: "/blog/tags/:path*",
        destination: "/thoughts",
        permanent: true,
      },
    ];
  },
};

const configWithVercelToolbar = withVercelToolbar()(nextConfig);

export default configWithVercelToolbar;
