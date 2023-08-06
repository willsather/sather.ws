"use client";

import theme from "@/src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

const Experience = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "secondary.main",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
          <Typography variant="h1">EXPERIENCE</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
          <Link href="/files/resume.pdf">
            <Typography variant="h4" sx={{ color: "grey" }}>
              {"// check out my resume"}
            </Typography>
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Experience;
