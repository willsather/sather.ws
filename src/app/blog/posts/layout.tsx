import type { ReactNode } from "react";
import PostHeader from "./header";

import { getAllPosts } from "@/app/blog/posts/lib";

export default function PostLayout({ children }: { children: ReactNode }) {
  const posts = getAllPosts();

  return (
    <article>
      <PostHeader posts={posts} />

      {children}
    </article>
  );
}
