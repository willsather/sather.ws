import { Divider, Stack, Typography } from "@mui/material";
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
        <Typography variant="h1">TAGS</Typography>
      </div>

      <div className="flex justify-center mt-6">
        <Typography variant="h2">categories i want to write about</Typography>
      </div>

      <Divider sx={{ my: 4 }} />

      <Stack direction="row" justifyContent="center" useFlexGap flexWrap="wrap" spacing={{ xs: 2, md: 4 }}>
        {tags.map((tag) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </Stack>
    </div>
  );
}
