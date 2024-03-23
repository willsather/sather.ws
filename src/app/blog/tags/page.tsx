import { Divider } from "@mui/material";
import Tag from "@/src/app/blog/tag";
import { Metadata } from "next";
import tagsMetadata from "@/src/metadata/tags";
import { getAllTags } from "@/lib/blog/tags";

export const metadata: Metadata = tagsMetadata;

export default async function TagsPage() {
  const tags = await getAllTags();

  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-12">
        <h1>TAGS</h1>
      </div>

      <div className="flex justify-center mt-5">
        <h2>categories i want to write about</h2>
      </div>

      <Divider sx={{ my: 4 }} />

      <div className="flex flex-row justify-center items-center flex-wrap gap-2 md:gap-4">
        {tags.map((tag) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </div>
    </div>
  );
}
