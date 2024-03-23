import Post from "@/src/app/blog/posts/[slug]/post";
import { notFound } from "next/navigation";
import { Stack, Divider, Typography } from "@mui/material";
import Tag from "@/src/app/blog/tag";
import { Metadata } from "next";
import { getPost } from "@/lib/blog/posts";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontMatter } = await getPost(params?.slug);

  return {
    title: frontMatter.title,
    description: frontMatter.summary,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.summary,
      type: "article",
      authors: "Will Sather",
      url: `https://sather.ws/blog/${params?.slug}`,
    },
    alternates: {
      canonical: `/blog/${params?.slug}`,
    },
  } as Metadata;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { content, frontMatter } = await getPost(params?.slug);

  if (frontMatter.draft) {
    notFound();
  }

  const tags = Array.from(new Set(frontMatter.tags));

  return (
    <div>
      <Stack direction="row" justifyContent="center" my={2}>
        <Typography variant="h5" sx={{ color: "grey" }}>
          {frontMatter.date.toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="center" my={2}>
        <Typography variant="blogTitle" sx={{ textAlign: "center" }}>
          {frontMatter.title}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="center" useFlexGap flexWrap="wrap" spacing={{ xs: 2, md: 4 }}>
        {tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </Stack>

      <Divider sx={{ mt: 4 }} />

      <Post content={content} />
    </div>
  );
}
