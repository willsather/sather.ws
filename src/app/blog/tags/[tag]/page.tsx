import PaginatedPosts from "@/src/app/blog/paginatedPosts";
import { Metadata } from "next";
import tagsMetadata from "@/src/metadata/tags";
import { getTagPosts } from "@/lib/blog/tags";
import { redirect } from "next/navigation";

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

  const parsedPage = parseInt(searchParams.page ?? "");

  // never show ?page=0
  if (parsedPage === 0) {
    redirect(`/blog/tags/${params?.tag}`);
  }

  const page = isNaN(parsedPage) ? 0 : parsedPage;

  // redirect if manually navigating to a page that doesn't exist
  if (page > Math.ceil(posts.length / 3) - 1) {
    redirect(`/blog/tags/${params?.tag}`);
  }

  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-10">
        <h1>{params?.tag.toUpperCase()}</h1>
      </div>

      <div className="flex justify-center mt-5">
        <h2>a category i wrote about.</h2>
      </div>

      <hr className="my-6" />

      <PaginatedPosts posts={posts} page={page} />
    </div>
  );
}
