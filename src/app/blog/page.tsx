import type { Metadata } from "next";

import PostList from "@/app/blog/post-list";
import { getAllPosts } from "@/lib/blog";
import blogMetadata from "@/metadata/blog";

export const metadata: Metadata = blogMetadata;

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="">
      <div className="flex flex-col gap-2 text-center md:gap-4">
        <h1>posts</h1>
        <h2 className="font-mono font-normal">stuff i wanted to write about</h2>
      </div>

      <hr className="my-6 border-gray-200" />

      <PostList posts={posts} />
    </div>
  );
}
