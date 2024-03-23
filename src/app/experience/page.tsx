import { Typography } from "@mui/material";
import JobList from "@/src/app/experience/jobList";
import { Metadata } from "next";
import experienceMetadata from "@/src/metadata/experience";
import ExternalLink from "@/src/app/experience/link";

export const metadata: Metadata = experienceMetadata;

export default function ExperiencePage() {
  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-10">
        <Typography variant="h1">EXPERIENCE</Typography>
      </div>

      <div className="flex justify-center mt-3 md:mt-5">
        <ExternalLink href="/files/resume.pdf" text="check out my resume." />
      </div>

      <div className="mx-4">
        <JobList />
      </div>
    </div>
  );
}
