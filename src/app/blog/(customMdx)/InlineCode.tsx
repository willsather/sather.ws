"use client";

import type { FC, ReactNode } from "react";

export interface InlineCodeProps {
  children?: ReactNode;
}

const InlineCode: FC<InlineCodeProps> = (props) => {
  const { children } = props;

  return (
    <code className="font-mono text-sm py-0.5 px-1 rounded-md bg-gray-200">
      {children}
    </code>
  );
};

export default InlineCode;
