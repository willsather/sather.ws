"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import type { CSSProperties, FC, ReactNode } from "react";
import CodeBlock from "@/src/app/blog/(customMdx)/CodeBlock";

export interface PreBlockProps {
  children: ReactNode | any;
  hideLineNumbers?: boolean;
  styles?: CSSProperties;
  fileName?: string;
}

const PreBlock: FC<PreBlockProps> = ({ children, fileName, styles }) => {
  return (
    <CodeBlock
      styles={styles}
      fileName={fileName}
      language={children.props.className}
      hideLineNumbers={true}
    >
      {children.props.children}
    </CodeBlock>
  );
};

export default PreBlock;
