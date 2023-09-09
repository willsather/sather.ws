import { Box, Divider, Stack, Typography } from "@mui/material";
import { findAllPostSlugs, loadMdxFromSlug } from "@/lib/blog/utils";
import { BlogFrontMatter } from "@/src/types/blogFrontMatter";
import Tag from "@/src/components/blog/tag/tag";
import PostListItem from "@/src/components/blog/postListItem";

// import { Metadata } from "next";
// import blogMetadata from "@/src/metadata/blog";

// export const metadata: Metadata = blogMetadata;

async function getTagPosts(slug: string) {
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

  return posts.filter(({ data: { tags } }) => tags.includes(slug));
}

export default async function Tags({ params }: { params: { slug: string } }) {
  const posts = await getTagPosts(params?.slug);

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} mt={8}>
        <Typography variant="h1">{params?.slug.toUpperCase()}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} mt={4}>
        <Typography variant="h4">a category i wrote about</Typography>
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
