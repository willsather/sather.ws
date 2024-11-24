import PostList from "@/app/blog/postList";
import { getAllPosts } from "@/lib/blog";
import blogMetadata from "@/metadata/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = blogMetadata;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-secondary">
      <div className="mt-8 flex flex-row justify-center">
        <h1>BLOG</h1>
      </div>

      <div className="mt-5 flex justify-center">
        <h2>stuff i wanted to write about.</h2>
      </div>

      <hr className="my-6" />

      <PostList posts={posts} />
    </div>
  );
}
