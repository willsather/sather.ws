import { Box, Divider, Stack, Typography } from "@mui/material";
import { findAllPostSlugs, loadMdxFromSlug } from "@/lib/blog/utils";
import { BlogFrontMatter } from "@/src/types/blogFrontMatter";
import Tag from "@/src/components/blog/tag/tag";
import PostListItem from "@/src/components/blog/postListItem";
import PaginatedPosts from "@/src/components/blog/paginatedPosts";

// import { Metadata } from "next";
// import blogMetadata from "@/src/metadata/blog";

// export const metadata: Metadata = blogMetadata;

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

export default async function Tags({ params }: { params: { tag: string } }) {
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
        <Typography variant="h4">a category i wrote about</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <PaginatedPosts posts={posts} />
    </Box>
  );
}
