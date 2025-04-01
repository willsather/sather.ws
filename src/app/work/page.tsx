import type { Metadata } from "next";

import JobList from "@/app/work/job-list";
import workMetadata from "@/metadata/work";
import ExternalLink from "@/ui/external-link";

export const metadata: Metadata = workMetadata;

export default function WorkPage() {
  return (
    <div className="bg-secondary">
      <div className="mt-10 flex flex-col items-center justify-center gap-2 md:gap-4">
        <h1>work</h1>
        <ExternalLink href="/files/resume.pdf">
          <h2 className="font-mono font-normal">{"my resume ->"}</h2>
        </ExternalLink>
      </div>

      <div className="mx-4">
        <JobList />
      </div>
    </div>
  );
}
