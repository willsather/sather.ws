import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeSlug from "rehype-slug";

import Component from "@/app/blog/(components)/component";
import Note, {
  ErrorBlock,
  InfoBlock,
  SuccessBlock,
  WarningBlock,
} from "@/app/blog/(components)/note";
import a from "./(components)/a";
import blockquote from "./(components)/blockquote";
import code from "./(components)/code";
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

export default function CustomMDX({ content }: { content: string }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
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
          img: img,
          Image: img,
          blockquote,
          code,
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
              rehypeSlug, // add `id` to all headings
              rehypeMdxCodeProps,
            ],
            format: "mdx",
          },
        }}
      />
    </>
  );
}
