import type { ReactNode } from "react";

import { getAllPosts } from "@/lib/blog";
import PostHeader from "./header";

export default function PostLayout({ children }: { children: ReactNode }) {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-12 text-gray-100 md:px-24 md:py-16">
      <div className="mx-auto max-w-2xl">
        <PostHeader posts={posts} />

        <article className="prose prose-gray max-w-none text-gray-300">
          {children}
        </article>
      </div>
    </main>
  );
}
