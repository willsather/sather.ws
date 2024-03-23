import { Divider, Stack, Typography } from "@mui/material";
import PaginatedPosts from "@/src/app/blog/paginatedPosts";
import { Metadata } from "next";
import blogMetadata from "@/src/metadata/blog";
import { getAllPosts } from "@/lib/blog/posts";

export const metadata: Metadata = blogMetadata;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-secondary">
      <Stack direction="row" justifyContent="center" mt={8}>
        <Typography variant="h1">BLOG</Typography>
      </Stack>

      <Stack direction="row" justifyContent="center" mt={4}>
        <Typography variant="h2">stuff i wanted to write about.</Typography>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <PaginatedPosts posts={posts} />
    </div>
  );
}
