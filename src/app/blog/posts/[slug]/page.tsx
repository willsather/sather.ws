import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPost } from "@/lib/blog/posts";
import Post from "@/src/app/blog/posts/[slug]/post";
import Tag from "@/src/app/blog/tag";

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
      tags: frontMatter.tags,
      publishedTime: frontMatter.date,
      modifiedTime: frontMatter.date,
      url: `https://sather.ws/blog/posts/${params?.slug}`,
    },
    alternates: {
      canonical: `/blog/posts/${params?.slug}`,
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
        <h4 className="text-gray-500">
          {frontMatter.date.toLocaleDateString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h4>
      </div>

      <div className="flex flex-row text-center justify-center my-2">
        <h1 className="content-center">{frontMatter.title}</h1>
      </div>

      <div className="flex flex-row justify-center wrap gap-2 md:gap-4">
        {tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>

      <hr className="my-6" />

      <Post content={content} />
    </div>
  );
}
