"use client";

import type { CSSProperties, FC, ReactNode } from "react";
import CodeBlock from "@/src/components/blog/CodeBlock";

export interface PreBlockProps {
  children: ReactNode | any;
  hideLineNumbers?: boolean;
  styles?: CSSProperties;
}

const PreBlock: FC<PreBlockProps> = (props) => {
  const { children, styles, hideLineNumbers } = props;

  return (
    <CodeBlock styles={styles} language={children.props.className} hideLineNumbers={true}>
      {children.props.children}
    </CodeBlock>
  );
};

export default PreBlock;
