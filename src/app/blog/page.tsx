import PaginatedPosts from "@/src/app/blog/paginatedPosts";
import { Metadata } from "next";
import blogMetadata from "@/src/metadata/blog";
import { getAllPosts } from "@/lib/blog/posts";

export const metadata: Metadata = blogMetadata;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-secondary">
      <div className="flex flex-row justify-center mt-8">
        <h1>BLOG</h1>
      </div>

      <div className="flex justify-center mt-5">
        <h2>stuff i wanted to write about.</h2>
      </div>

      <hr className="my-6" />

      <PaginatedPosts posts={posts} />
    </div>
  );
}
