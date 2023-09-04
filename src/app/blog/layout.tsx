import React, { ReactNode } from "react";
import { Box } from "@mui/material";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
      mx={{ xs: "15px", md: "20%" }}
      mb={8}
    >
      {children}
    </Box>
  );
}
