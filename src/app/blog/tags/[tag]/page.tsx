import { Box, Divider, Typography } from "@mui/material";
import { findAllPostSlugs, loadMdxFromSlug } from "@/lib/blog/utils";
import { BlogFrontMatter } from "@/src/types/blogFrontMatter";
import PaginatedPosts from "@/src/components/blog/paginatedPosts";
import { Metadata } from "next";
import tagsMetadata from "@/src/metadata/tags";

export function generateMetadata({ params: { tag } }: { params: { tag: string } }) {
  return {
    title: tag.charAt(0).toUpperCase() + tag.slice(1),
    description: tagsMetadata.description,
  } as Metadata;
}

async function getTagPosts(tag: string) {
  const allSlugs = await findAllPostSlugs();
  const allSources = await Promise.all(
    allSlugs.map(async (slug: string) => {
      const source = await loadMdxFromSlug(slug);
      return { slug, source };
    })
  );

  const posts = allSources.map(({ slug, source }) => {
    return { slug, data: source.data as BlogFrontMatter };
  });

  return posts.filter(({ data: { draft } }) => !draft).filter(({ data: { tags } }) => tags.includes(tag));
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const posts = await getTagPosts(params?.tag);

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Typography variant="h1">{params?.tag.toUpperCase()}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={4}>
        <Typography variant="h4">a category i wrote about.</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <PaginatedPosts posts={posts} />
    </Box>
  );
}
