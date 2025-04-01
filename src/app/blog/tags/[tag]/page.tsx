import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PostList from "@/app/blog/post-list";
import { getAllTags, getPostsDataByTag } from "@/lib/blog";

export function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    slug: tag,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>;
}) {
  const params = await props.params;
  const { tag } = params;

  const tags = getAllTags();

  if (!tags.includes(tag)) {
    notFound();
  }

  return {
    title: tag,
    description: `just another coding blog. an assortment of blog posts about ${tag} and my recent experience.`,
    openGraph: {
      title: tag,
      url: `https://sather.ws/blog/tags/${tag}`,
    },
    alternates: {
      canonical: `/blog/tags/${tag}`,
    },
  } as Metadata;
}

export default async function TagPage(props: {
  params: Promise<{ tag: string }>;
}) {
  const params = await props.params;
  const posts = getPostsDataByTag(params?.tag);

  return (
    <>
      <div className="flex flex-col gap-2 text-center md:gap-4">
        <h1>{params?.tag.toLowerCase()}</h1>
        <h2 className="font-mono font-normal">a category i wrote about.</h2>
      </div>

      <hr className="my-6" />

      <PostList posts={posts} />
    </>
  );
}
