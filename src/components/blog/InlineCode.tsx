"use client";

import { useTheme, darken } from "@mui/material";
import type { FC, ReactNode } from "react";

export interface InlineCodeProps {
  children?: ReactNode;
}

const InlineCode: FC<InlineCodeProps> = (props) => {
  const { children } = props;

  const { palette } = useTheme();

  return (
    <code
      style={{
        backgroundColor: darken(palette.background.default, 0.07),
        borderRadius: "0.25rem",
        padding: "0.1rem 0.25rem 0.1rem 0.25rem",
        lineHeight: "1rem",
      }}
    >
      {children}
    </code>
  );
};

export default InlineCode;
