import { Box, Divider, Typography } from "@mui/material";
import PaginatedPosts from "@/src/app/blog/paginatedPosts";
import { Metadata } from "next";
import tagsMetadata from "@/src/metadata/tags";
import { getTagPosts } from "@/lib/blog/tags";

export function generateMetadata({ params: { tag } }: { params: { tag: string } }) {
  return {
    title: tag.charAt(0).toUpperCase() + tag.slice(1),
    description: tagsMetadata.description,
  } as Metadata;
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
        <Typography variant="h2">a category i wrote about.</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <PaginatedPosts posts={posts} />
    </Box>
  );
}
