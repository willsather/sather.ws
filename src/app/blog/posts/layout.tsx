import type { ReactNode } from "react";

import { getAllPosts } from "@/app/blog/posts/lib";

import PostHeader from "./header";

export default function PostLayout({ children }: { children: ReactNode }) {
  const posts = getAllPosts();

  return (
    <article>
      <PostHeader posts={posts} />

      {children}
    </article>
  );
}
