import { MDXRemote } from "next-mdx-remote/rsc";
import { Typography } from "@mui/material";
import Link from "@/src/components/blog/Link";
import PreBlock from "@/src/components/blog/PreBlock";
import Image from "next/image";
import BlockQuote from "@/src/components/blog/BlockQuote";
import InlineCode from "@/src/components/blog/InlineCode";
import Note from "@/src/components/blog/Note";

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
          a: (props: any) => <Link {...props} />,
          pre: (props: any) => <PreBlock {...props} />,
          Image: (props: any) => <Image {...props} style={{ width: "100%", height: "auto" }} loading="lazy" />,
          blockQuote: BlockQuote,
          code: InlineCode,
          li: (props: any) => (
            <li {...props}>
              <Typography {...props} variant="body1" />
            </li>
          ),
          Note: Note,
        }}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
            format: "mdx",
          },
        }}
      />
    </>
  );
}
