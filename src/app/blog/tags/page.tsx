import type { Metadata } from "next";

import Tag from "@/app/blog/tag";
import { getAllTags } from "@/lib/blog";
import tagsMetadata from "@/metadata/tags";

export const metadata: Metadata = tagsMetadata;

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <>
      <div className="flex flex-col gap-2 text-center md:gap-4">
        <h1>tags</h1>
        <h2 className="font-mono font-normal">
          categories i want to write about.
        </h2>
      </div>

      <hr className="my-6" />

      <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4">
        {tags.map((tag) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </div>
    </>
  );
}
