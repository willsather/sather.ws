import { Box, Typography } from "@mui/material";
import React from "react";
import About from "@/src/app/about/about";
import { Metadata } from "next";
import aboutMetadata from "@/src/metadata/about";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Typography variant="h1">ABOUT</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={4}>
        <Typography variant="h4">hi, i&apos;m will.</Typography>
      </Box>

      <About />
    </Box>
  );
}
