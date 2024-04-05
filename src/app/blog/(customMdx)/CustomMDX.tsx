import { MDXRemote } from "next-mdx-remote/rsc";
import PreBlock from "@/src/app/blog/(customMdx)/PreBlock";
import Image from "next/image";

import rehypeMdxCodeProps from "rehype-mdx-code-props";
import InlineCode from "@/src/app/blog/(customMdx)/InlineCode";
import Note from "@/src/app/blog/(customMdx)/Note";

export default function CustomMDX({ content }: { content: string }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        source={content}
        components={{
          h1: ({ ...props }) => <h2 {...props} className="mt-4" />,
          h2: ({ ...props }) => <h3 {...props} className="mt-4" />,
          h3: ({ ...props }) => <h4 {...props} className="mt-4" />,
          h4: ({ ...props }) => <h5 {...props} className="mt-4" />,
          h5: ({ ...props }) => <h6 {...props} className="mt-4" />,
          p: ({ ...props }) => (
            <p {...props} className="[&:not(:first-child)]:mt-4" />
          ),
          a: ({ ...props }) => <a {...props} className="underline" />,
          pre: ({ ...props }) => (
            <PreBlock {...props}>{props.children}</PreBlock>
          ),
          Image: ({ ...props }) => (
            <Image
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
              alt={props?.alt}
              {...props}
            />
          ),
          blockquote: ({ ...props }) => (
            <blockquote className="font-sans p-4 my-4 border-s-4 border-gray-300 bg-gray-50 rounded-sm">
              <div className="italic font-medium leading-relaxed text-gray-900">
                {props.children}
              </div>
            </blockquote>
          ),
          code: InlineCode,
          ul: ({ ...props }) => (
            <ul className="my-3 ml-6 list-disc" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="mt-4 ml-6 list-decimal" {...props} />
          ),
          li: ({ ...props }) => <li className="mt-2" {...props} />,
          Info: ({ children, ...props }) => (
            <Note type="Info" {...props}>
              {children}
            </Note>
          ),
          Success: ({ children, ...props }) => (
            <Note type="Success" {...props}>
              {children}
            </Note>
          ),
          Warning: ({ children, ...props }) => (
            <Note type="Warning" {...props}>
              {children}
            </Note>
          ),
          Danger: ({ children, ...props }) => (
            <Note type="Danger" {...props}>
              {children}
            </Note>
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
