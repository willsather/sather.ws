import type { Metadata } from "next";
import { redirect } from "next/navigation";

import PaginatedPosts from "@/app/blog/paginatedPosts";
import { getAllTags, getTagPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const tags = await getAllTags();

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

export default async function TagPage({
  params,
  searchParams,
}: {
  params: { tag: string };
  searchParams: { page: string | undefined };
}) {
  const posts = await getTagPosts(params?.tag);

  const parsedPage = Number.parseInt(searchParams.page ?? "");

  // never show ?page=0
  if (parsedPage === 0) {
    redirect(`/blog/tags/${params?.tag}`);
  }

  const page = Number.isNaN(parsedPage) ? 0 : parsedPage;

  // redirect if manually navigating to a page that doesn't exist
  if (page > Math.ceil(posts.length / 3) - 1) {
    redirect(`/blog/tags/${params?.tag}`);
  }

  return (
    <div className="bg-secondary">
      <div className="mt-10 flex justify-center">
        <h1>{params?.tag.toUpperCase()}</h1>
      </div>

      <div className="mt-5 flex justify-center">
        <h2>a category i wrote about.</h2>
      </div>

      <hr className="my-6" />

      <PaginatedPosts posts={posts} page={page} />
    </div>
  );
}
