"use client";

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

const PreBlock: FC<PreBlockProps> = ({
  children,
  fileName,
  lines,
  words,
  showLineNumbers,
}) => {
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
};

export default PreBlock;
