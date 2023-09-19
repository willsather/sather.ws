import { Box, Divider, Stack, Typography } from "@mui/material";
import { findAllPostSlugs, loadMdxFromSlug } from "@/lib/blog/utils";
import PaginatedPosts from "@/src/components/blog/paginatedPosts";
import { Post } from "@/src/types/post";

// import { Metadata } from "next";
// import blogMetadata from "@/src/metadata/blog";

// export const metadata: Metadata = blogMetadata;

async function getBlogData() {
  const allSlugs = await findAllPostSlugs();
  const allSources = await Promise.all(
    allSlugs.map(async (slug: string) => {
      const source = await loadMdxFromSlug(slug);
      return { slug, source };
    })
  );

  const posts = allSources
    .map(({ slug, source }) => {
      return { slug, data: source.data } as Post;
    })
    .filter(({ data: { draft } }) => !draft);

  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}

export default async function Blog() {
  const posts = await getBlogData();

  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <Stack direction="row" justifyContent="center" mt={8}>
        <Typography variant="h1">BLOG</Typography>
      </Stack>

      <Stack direction="row" justifyContent="center" mt={4}>
        <Typography variant="h4">stuff i wanted to write about</Typography>
      </Stack>

      <Divider sx={{ my: 4 }} />

      <PaginatedPosts posts={posts} />
    </Box>
  );
}
