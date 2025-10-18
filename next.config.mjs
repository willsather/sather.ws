import withVercelToolbar from "@vercel/toolbar/plugins/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
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
