"use client";

import type { FC, ReactNode } from "react";
import CodeBlock from "@/src/app/blog/(customMdx)/CodeBlock";

export interface PreBlockProps {
  children?: ReactNode | any; // eslint-disable-line @typescript-eslint/no-explicit-any
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
