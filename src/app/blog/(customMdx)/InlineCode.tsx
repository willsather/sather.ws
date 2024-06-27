"use client";

import type { FC, ReactNode } from "react";

export interface InlineCodeProps {
  children?: ReactNode;
}

const InlineCode: FC<InlineCodeProps> = (props) => {
  const { children } = props;

  return (
    <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm">
      {children}
    </code>
  );
};

export default InlineCode;
