import type { Metadata } from "next";

import PostList from "@/app/blog/post-list";
import { getAllPosts } from "@/lib/blog";
import blogMetadata from "@/metadata/blog";

export const metadata: Metadata = blogMetadata;

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-secondary">
      <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
        <h1>BLOG</h1>
        <h2 className="font-mono font-normal">stuff i wanted to write about</h2>
      </div>

      <hr className="my-6" />

      <PostList posts={posts} />
    </div>
  );
}
