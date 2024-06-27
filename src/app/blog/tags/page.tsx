import type { Metadata } from "next";

import Tag from "@/app/blog/tag";
import { getAllTags } from "@/lib/blog/tags";
import tagsMetadata from "@/metadata/tags";

export const metadata: Metadata = tagsMetadata;

export default async function TagsPage() {
  const tags = await getAllTags();

  return (
    <div className="bg-secondary">
      <div className="mt-12 flex justify-center">
        <h1>TAGS</h1>
      </div>

      <div className="mt-5 flex justify-center">
        <h2>categories i want to write about</h2>
      </div>

      <hr className="my-6" />

      <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4">
        {tags.map((tag) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </div>
    </div>
  );
}
