"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import type { FC, ReactNode } from "react";
import CodeBlock from "@/src/app/blog/(customMdx)/CodeBlock";

export interface PreBlockProps {
  children: ReactNode | any;
  hideLineNumbers?: boolean;
  fileName?: string;
}

const PreBlock: FC<PreBlockProps> = ({ children, fileName }) => {
  return (
    <CodeBlock
      fileName={fileName}
      language={children.props.className}
      hideLineNumbers={children.props.hideLineNumbers}
    >
      {children.props.children}
    </CodeBlock>
  );
};

export default PreBlock;
