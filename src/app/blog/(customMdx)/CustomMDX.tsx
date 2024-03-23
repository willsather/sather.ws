/* eslint-disable @typescript-eslint/no-explicit-any */

import { MDXRemote } from "next-mdx-remote/rsc";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Typography from "@mui/material/Typography";
import CustomLink from "@/src/app/blog/(customMdx)/CustomLink";
import PreBlock from "@/src/app/blog/(customMdx)/PreBlock";
import Image from "next/image";
import BlockQuote from "@/src/app/blog/(customMdx)/BlockQuote";
import InlineCode from "@/src/app/blog/(customMdx)/InlineCode";

import rehypeMdxCodeProps from "rehype-mdx-code-props";

export default function CustomMDX({ content }: { content: string }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        source={content}
        components={{
          h1: (props: any) => <Typography {...props} variant="h2" mt={4} />,
          h2: (props: any) => <Typography {...props} variant="h3" mt={4} />,
          h3: (props: any) => <Typography {...props} variant="h4" mt={4} />,
          h4: (props: any) => <Typography {...props} variant="h5" mt={4} />,
          h5: (props: any) => <Typography {...props} variant="h6" mt={4} />,
          p: (props: any) => <Typography {...props} variant="body1" mt={4} />,
          a: (props: any) => <CustomLink {...props} />,
          pre: (props: any) => <PreBlock {...props}>{props.children}</PreBlock>,
          Image: (props: any) => (
            <Image
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
              alt={props?.alt}
              {...props}
            />
          ),
          blockQuote: BlockQuote,
          code: InlineCode,
          li: (props: any) => (
            <li {...props}>
              <Typography {...props} variant="body1" />
            </li>
          ),
          Info: (props: any) => (
            <Alert severity="info" {...props} sx={{ my: 2 }}>
              <AlertTitle>
                <strong>Note</strong>
              </AlertTitle>
              {props.children}
            </Alert>
          ),
          Success: (props: any) => (
            <Alert severity="success" {...props} sx={{ my: 2 }}>
              <AlertTitle>
                <strong>Success</strong>
              </AlertTitle>
              {props.children}
            </Alert>
          ),
          Warning: (props: any) => (
            <Alert severity="warning" {...props} sx={{ my: 2 }}>
              <AlertTitle>
                <strong>Warning</strong>
              </AlertTitle>
              {props.children}
            </Alert>
          ),
          Error: (props: any) => (
            <Alert severity="error" {...props} sx={{ my: 2 }}>
              <AlertTitle>
                <strong>Error</strong>
              </AlertTitle>
              {props.children}
            </Alert>
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
