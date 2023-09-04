import { Box, Typography } from "@mui/material";
import React from "react";
import blogMetadata from "@/src/metadata/blog";
import { Metadata } from "next";
import AboutInformation from "@/src/app/about/aboutInformation";

export const metadata: Metadata = blogMetadata;

export default function About() {
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

      <AboutInformation />
    </Box>
  );
}
