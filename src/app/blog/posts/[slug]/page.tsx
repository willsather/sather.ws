import Post from "@/src/app/blog/posts/[slug]/post";
import { notFound } from "next/navigation";
import { Divider, Typography } from "@mui/material";
import Tag from "@/src/app/blog/tag";
import { Metadata } from "next";
import { getPost } from "@/lib/blog/posts";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
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

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content, frontMatter } = await getPost(params?.slug);

  if (frontMatter.draft) {
    notFound();
  }

  const tags = Array.from(new Set(frontMatter.tags));

  return (
    <div>
      <div className="flex flex-row justify-center my-2">
        <Typography variant="h5" sx={{ color: "grey" }}>
          {frontMatter.date.toLocaleDateString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Typography>
      </div>

      <div className="flex flex-row justify-center my-2">
        <Typography variant="blogTitle" sx={{ textAlign: "center" }}>
          {frontMatter.title}
        </Typography>
      </div>

      <div className="flex flex-row justify-center wrap gap-2 md:gap-4">
        {tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>

      <Divider sx={{ mt: 4 }} />

      <Post content={content} />
    </div>
  );
}
