import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Post from "@/app/blog/posts/[slug]/post";
import Tag from "@/app/blog/tag";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug, data } = await getPost(params?.slug);

  return {
    title: data.title,
    description: data.summary,
    openGraph: {
      title: data.title,
      description: data.summary,
      type: "article",
      authors: "Will Sather",
      tags: data.tags,
      publishedTime: data.date,
      modifiedTime: data.date,
      url: `https://sather.ws/blog/posts/${slug}`,
      images: [`/og/${slug}`],
    },
    alternates: {
      canonical: `/blog/posts/${slug}`,
    },
  } as Metadata;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { content, data } = await getPost(params?.slug);

  if (data.draft) {
    notFound();
  }

  const tags = Array.from(new Set(data.tags));

  return (
    <div>
      <div className="my-2 flex flex-row justify-center">
        <h4 className="font-mono text-gray-400">
          {data.date.toLocaleDateString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h4>
      </div>

      <div className="my-2 flex flex-row justify-center text-center">
        <h1 className="content-center">{data.title}</h1>
      </div>

      <div className="wrap flex flex-row justify-center gap-2 md:gap-4">
        {tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>

      <hr className="my-6" />

      <Post content={content} />
    </div>
  );
}
