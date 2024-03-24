import PaginatedPosts from "@/src/app/blog/paginatedPosts";
import { Metadata } from "next";
import blogMetadata from "@/src/metadata/blog";
import { getAllPosts } from "@/lib/blog/posts";
import { redirect } from "next/navigation";

export const metadata: Metadata = blogMetadata;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page: string | undefined };
}) {
  const posts = await getAllPosts();

  const parsedPage = parseInt(searchParams.page ?? "");

  // never show ?page=0
  if (parsedPage === 0) {
    redirect("/blog");
  }

  const page = isNaN(parsedPage) ? 0 : parsedPage;

  // redirect if manually navigating to a page that doesn't exist
  if (page > Math.ceil(posts.length / 3) - 1) {
    redirect("/blog");
  }

  return (
    <div className="bg-secondary">
      <div className="flex flex-row justify-center mt-8">
        <h1>BLOG</h1>
      </div>

      <div className="flex justify-center mt-5">
        <h2>stuff i wanted to write about.</h2>
      </div>

      <hr className="my-6" />

      <PaginatedPosts posts={posts} page={page} />
    </div>
  );
}
