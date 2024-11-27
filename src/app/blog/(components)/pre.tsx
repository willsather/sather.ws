import type { HTMLAttributes } from "react";

// export default function Pre({
//   children,
//   ...props
// }: HTMLAttributes<HTMLPreElement>) {
//   return <pre {...props}>{children}</pre>;
// }

import type { FC, ReactNode } from "react";

import CodeBlock from "@/app/blog/(components)/CodeBlock";

export interface PreBlockProps {
  // biome-ignore lint/suspicious/noExplicitAny: : children can be anything in the markdown
  children?: ReactNode | any;
  lines?: (number | string)[];
  words?: string[];
  showLineNumbers?: boolean;
  fileName?: string;
}

export default function PreBlock({
  children,
  fileName,
  lines,
  words,
  showLineNumbers,
}: PreBlockProps) {
  return (
    <CodeBlock
      language={children.props.className}
      showLineNumbers={showLineNumbers}
      lines={lines}
      words={words}
      fileName={fileName}
    >
      {children.props.children}
    </CodeBlock>
  );
}
