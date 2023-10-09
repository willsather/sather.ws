import { Box, Typography } from "@mui/material";
import JobList from "@/src/app/experience/jobList";
import { Metadata } from "next";
import experienceMetadata from "@/src/metadata/experience";
import ExternalLink from "@/src/app/experience/link";

export const metadata: Metadata = experienceMetadata;

export default function ExperiencePage() {
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
        <ExternalLink href="/files/resume.pdf" text="check out my resume." />
      </Box>

      <JobList />
    </Box>
  );
}
