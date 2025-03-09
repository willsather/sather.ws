import type { Metadata } from "next";

import JobList from "@/app/work/job-list";
import ExternalLink from "@/app/work/link";
import workMetadata from "@/metadata/work";

export const metadata: Metadata = workMetadata;

export default function WorkPage() {
  return (
    <div className="bg-secondary">
      <div className="mt-10 flex justify-center">
        <h1>WORK</h1>
      </div>

      <div className="mt-5 flex justify-center">
        <ExternalLink href="/files/resume.pdf" text="my resume ->" />
      </div>

      <div className="mx-4">
        <JobList />
      </div>
    </div>
  );
}
