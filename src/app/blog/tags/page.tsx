import { Box, Divider, Stack, Typography } from "@mui/material";
import { findAllPostSlugs, loadMdxFromSlug } from "@/lib/blog/utils";
import { BlogFrontMatter } from "@/src/types/blogFrontMatter";
import Tag from "@/src/components/blog/tag/tag";
import { Metadata } from "next";
import tagsMetadata from "@/src/metadata/tags";

export const metadata: Metadata = tagsMetadata;

async function getTagData() {
  const allSlugs = await findAllPostSlugs();
  const allSources = await Promise.all(
    allSlugs.map(async (slug: string) => {
      const source = await loadMdxFromSlug(slug);
      return { slug, source };
    })
  );

  const posts = allSources
    .map(({ slug, source }) => {
      return { slug, data: source.data as BlogFrontMatter };
    })
    .filter(({ data: { draft } }) => !draft);

  return Array.from(new Set(posts.map(({ data: { tags } }) => tags).flat()));
}

export default async function TagsPage() {
  const tags = await getTagData();

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Typography variant="h1">TAGS</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={4}>
        <Typography variant="h2">categories i want to write about</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Stack direction="row" justifyContent="center" useFlexGap flexWrap="wrap" spacing={{ xs: 2, md: 4 }}>
        {tags.map((tag) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </Stack>
    </Box>
  );
}
