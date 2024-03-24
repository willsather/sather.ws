/* eslint-disable @typescript-eslint/no-explicit-any */

import { MDXRemote } from "next-mdx-remote/rsc";
import PreBlock from "@/src/app/blog/(customMdx)/PreBlock";
import Image from "next/image";

import rehypeMdxCodeProps from "rehype-mdx-code-props";
import InlineCode from "@/src/app/blog/(customMdx)/InlineCode";

export default function CustomMDX({ content }: { content: string }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        source={content}
        components={{
          h1: (props: any) => <h2 {...props} className="mt-4" />,
          h2: (props: any) => <h3 {...props} className="mt-4" />,
          h3: (props: any) => <h4 {...props} className="mt-4" />,
          h4: (props: any) => <h5 {...props} className="mt-4" />,
          h5: (props: any) => <h6 {...props} className="mt-4" />,
          p: (props: any) => <p {...props} className="mt-4" />,
          a: (props: any) => <a {...props} className="underline" />,
          pre: (props: any) => <PreBlock {...props}>{props.children}</PreBlock>,
          Image: (props: any) => (
            <Image
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
              alt={props?.alt}
              {...props}
            />
          ),
          blockquote: (props: any) => (
            <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 rounded-sm">
              <div className="italic font-medium leading-relaxed text-gray-900">
                {props.children}
              </div>
            </blockquote>
          ),
          code: InlineCode,
          li: (props: any) => (
            <li {...props}>
              <p {...props} />
            </li>
          ),
          Info: (props: any) => (
            <div className="my-3" role="alert">
              <div className="bg-sky-400 text-white font-bold rounded-t px-4 py-2">
                Note
              </div>
              <div className="border border-t-0 border-sky-400 rounded-b bg-sky-100 px-4 py-3 text-sky-700">
                {props.children}
              </div>
            </div>
          ),
          Success: (props: any) => (
            <div className="my-3" role="alert">
              <div className="bg-green-400 text-white font-bold rounded-t px-4 py-2">
                Success
              </div>
              <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
                {props.children}
              </div>
            </div>
          ),
          Warning: (props: any) => (
            <div className="my-3" role="alert">
              <div className="bg-amber-400 text-white font-bold rounded-t px-4 py-2">
                Warning
              </div>
              <div className="border border-t-0 border-amber-400 rounded-b bg-amber-100 px-4 py-3 text-amber-700">
                {props.children}
              </div>
            </div>
          ),
          Danger: (props: any) => (
            <div className="my-3" role="alert">
              <div className="bg-red-400 text-white font-bold rounded-t px-4 py-2">
                Error
              </div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                {props.children}
              </div>
            </div>
          ),
        }}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeMdxCodeProps],
            format: "mdx",
          },
        }}
      />
    </>
  );
}
