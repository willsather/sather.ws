import { Box, Divider, Typography } from "@mui/material";
import { BlogPostFrontmatter, findAllPostSlugs, loadMdxFromSlug } from "@/lib/blog/utils";
import PostListItem from "@/src/components/blog/postListItem";
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

  const posts = allSources.map(({ slug, source }) => {
    return { slug, data: source.data };
  });

  return posts.sort((a, b) => {
    return new Date(b.data.date).getDate() - new Date(a.data.date).getDate();
  });
}

export default async function Blog() {
  const posts = await getBlogData();

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Typography variant="h1">BLOG</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={4}>
        <Typography variant="h4">stuff i want to write about</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        {posts.slice(0, 3).map((post) => {
          const {
            slug,
            data: { title, date, summary },
          } = post;

          return <PostListItem key={title} slug={slug} title={title} date={date} summary={summary} />;
        })}
      </Box>
    </Box>
  );
}
