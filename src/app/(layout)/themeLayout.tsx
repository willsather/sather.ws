"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";

export default function ThemeLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
