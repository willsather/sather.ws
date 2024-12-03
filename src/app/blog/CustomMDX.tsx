import rehypeShiki from "@shikijs/rehype";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeSlug from "rehype-slug";

import a from "./(components)/a";
import blockquote from "./(components)/blockquote";
import h1 from "./(components)/h1";
import h2 from "./(components)/h2";
import h3 from "./(components)/h3";
import h4 from "./(components)/h4";
import h5 from "./(components)/h5";
import hr from "./(components)/hr";
import img from "./(components)/img";
import li from "./(components)/li";
import ol from "./(components)/ol";
import p from "./(components)/p";
import pre from "./(components)/pre";
import ul from "./(components)/ul";

import Component from "@/app/blog/(components)/component";
import Note, {
  ErrorBlock,
  InfoBlock,
  SuccessBlock,
  WarningBlock,
} from "@/app/blog/(components)/note";

export default function CustomMDX({ content }: { content: string }) {
  return (
    <>
      {/* @ts-expect-error Server Component (Not supported yet?) */}
      <MDXRemote
        source={content}
        components={{
          h1,
          h2,
          h3,
          h4,
          h5,
          p,
          a,
          pre,
          img,
          Image: img,
          blockquote,
          hr,
          ul,
          ol,
          li,
          Component,
          Note,
          Info: InfoBlock,
          Success: SuccessBlock,
          Warning: WarningBlock,
          Error: ErrorBlock,
        }}
        options={{
          mdxOptions: {
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
                  parseMetaString: (str: string) => {
                    return Object.fromEntries(
                      str.split(" ").reduce(
                        (prev, curr) => {
                          const [key, value] = curr.split("=");
                          const isNormalKey = /^[A-Z0-9]+$/i.test(key);
                          if (isNormalKey) {
                            prev.push([key, value || true]);
                          }
                          return prev;
                        },
                        [] as [string, string | true][],
                      ),
                    );
                  },
                },
              ],
              rehypeSlug, // add `id` to all headings
              rehypeMdxCodeProps, // provide custom props on `code` and `pre` blocks
            ],
            format: "mdx",
          },
        }}
      />
    </>
  );
}
