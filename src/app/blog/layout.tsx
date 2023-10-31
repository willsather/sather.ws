import React, { ReactNode } from "react";
import { Box } from "@mui/material";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gap={{ xs: 1, md: 3 }}
      m={3}
    >
      <Box gridColumn={{ xs: "1/-1", md: "3/11" }}>{children}</Box>
    </Box>
  );
}
