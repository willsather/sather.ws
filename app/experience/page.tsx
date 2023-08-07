"use client";

import theme from "@/src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import React from "react";
import ExternalLink from "@/src/components/shared/link";
import Jobs from "@/app/experience/jobs";

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

        <Box sx={{ display: "flex", justifyContent: "center" }} mt={{ xs: 2, md: 8 }}>
          <ExternalLink href="/files/resume.pdf" text="// check out my resume" />
        </Box>

        <Jobs />
      </Box>
    </ThemeProvider>
  );
};

export default Experience;
