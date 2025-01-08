import PostList from "@/app/blog/postList";
import { getAllTags, getPostsDataByTag } from "@/app/blog/posts/lib";
import type { Metadata } from "next";

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
    <div className="bg-secondary">
      <div className="mt-10 flex justify-center">
        <h1>{params?.tag.toUpperCase()}</h1>
      </div>

      <div className="mt-5 flex justify-center">
        <h2>a category i wrote about.</h2>
      </div>

      <hr className="my-6" />

      <PostList posts={posts} />
    </div>
  );
}
