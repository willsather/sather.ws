import type { ReactNode } from "react";

import PostHeader from "./header";
import { getAllPosts } from "@/lib/blog";

export default function PostLayout({ children }: { children: ReactNode }) {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-12 text-gray-100 md:px-24 md:py-16">
      <div className="max-w-2xl mx-auto">
        <PostHeader posts={posts} />

        <article className="prose prose-gray max-w-none text-gray-300">
          {children}
        </article>
      </div>
    </main>
  );
}
