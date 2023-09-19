import { loadMdxFromSlug } from "@/lib/blog/utils";
import Post from "@/src/app/blog/posts/[slug]/post";
import { notFound } from "next/navigation";
import { Box, Stack, Divider, Typography } from "@mui/material";
import Tag from "@/src/components/blog/tag/tag";
import { BlogFrontMatter } from "@/src/types/blogFrontMatter";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { content, data } = await loadMdxFromSlug(params?.slug);
  const frontMatter = data as BlogFrontMatter;

  return {
    title: frontMatter.title,
    description: frontMatter.summary,
  } as Metadata;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { content, data } = await loadMdxFromSlug(params?.slug);
  const frontMatter = data as BlogFrontMatter;

  if (frontMatter.draft) {
    notFound();
  }

  const tags = Array.from(new Set(frontMatter.tags));

  return (
    <Box>
      <Stack direction="row" justifyContent="center" my={2}>
        <Typography variant="h4" sx={{ color: "grey" }}>
          {frontMatter.date.toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="center" my={2}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          {frontMatter.title}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="center" useFlexGap flexWrap="wrap" spacing={{ xs: 2, md: 4 }}>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </Stack>

      <Divider sx={{ mt: 4 }} />

      <Post content={content} />
    </Box>
  );
}
