import PostList from "@/app/blog/postList";
import { getAllTags, getPostsDataByTag } from "@/app/blog/posts/lib";
import type { Metadata } from "next";

export function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    slug: tag,
  }));
}

export function generateMetadata({
  params: { tag },
}: {
  params: { tag: string };
}) {
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

export default function TagPage({ params }: { params: { tag: string } }) {
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
