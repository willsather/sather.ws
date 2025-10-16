import createMDX from "@next/mdx";
import rehypeShiki from "@shikijs/rehype";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import withVercelToolbar from "@vercel/toolbar/plugins/next";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // temporary redirect for any old, lingering urls pointing to /experience
  async redirects() {
    return [
      {
        source: "/experience/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/writing/:path*",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/archive",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypeShiki,
        {
          themes: { light: "one-dark-pro", dark: "one-dark-pro" },
          addLanguageClass: true,
          transformers: [
            transformerNotationDiff(),
            transformerNotationHighlight(),
          ],

          // hack to pass data props through shiki
          // https://github.com/shikijs/shiki/issues/629
          parseMetaString: (str) => {
            return Object.fromEntries(
              str.split(" ").reduce((prev, curr) => {
                const [key, value] = curr.split("=");
                const isNormalKey = /^[A-Z0-9]+$/i.test(key);
                if (isNormalKey) {
                  prev.push([key, value || true]);
                }
                return prev;
              }, []),
            );
          },
        },
      ],
      rehypeSlug, // add `id` to all headings
      rehypeMdxCodeProps, // provide custom props on `code` and `pre` blocks
    ],
  },
});

const configWithMDX = withMDX(nextConfig);
const configWithVercelToolbar = withVercelToolbar()(configWithMDX);

export default configWithVercelToolbar;
