"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";
import { Box, Typography } from "@mui/material";
import SocialLinks from "./socialLinks";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "secondary.main",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
          <Typography variant="h1">WILL SATHER</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
          <Typography variant="h4">livin&apos; the dream :)</Typography>
        </Box>

        <SocialLinks />
      </Box>
    </ThemeProvider>
  );
}
