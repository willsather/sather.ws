import { Box, Typography } from "@mui/material";
import React from "react";
import ExternalLink from "@/src/components/shared/link";
import Jobs from "@/src/app/experience/jobs";

export default function Experience() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Typography variant="h1">EXPERIENCE</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={{ xs: 2, md: 4 }}>
        <ExternalLink href="/files/resume.pdf" text="// check out my resume" />
      </Box>

      <Jobs />
    </Box>
  );
}
