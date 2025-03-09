import type { ReactNode } from "react";

import PostHeader from "@/app/blog/posts/header";
import { getAllPosts } from "@/lib/blog";

export default function PostLayout({ children }: { children: ReactNode }) {
  const posts = getAllPosts();

  return (
    <article>
      <PostHeader posts={posts} />

      {children}
    </article>
  );
}
