import type { Metadata } from "next";

import JobList from "@/app/experience/jobList";
import ExternalLink from "@/app/experience/link";
import experienceMetadata from "@/metadata/experience";

export const metadata: Metadata = experienceMetadata;

export default function ExperiencePage() {
  return (
    <div className="bg-secondary">
      <div className="mt-10 flex justify-center">
        <h1>EXPERIENCE</h1>
      </div>

      <div className="mt-5 flex justify-center">
        <ExternalLink href="/files/resume.pdf" text="check out my resume." />
      </div>

      <div className="mx-4">
        <JobList />
      </div>
    </div>
  );
}
