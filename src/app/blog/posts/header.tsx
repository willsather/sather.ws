"use client";

import { notFound, useSelectedLayoutSegments } from "next/navigation";

import Tag from "@/app/blog/tag";
import type { Post } from "@/lib/blog";

export default function PostHeader({ posts }: { posts: Post[] }) {
  const urlSegment = useSelectedLayoutSegments();
  const slug = urlSegment[urlSegment.length - 1];

  const post = posts.find((post) => post.slug === slug);

  if (post == null || post?.draft) {
    notFound();
  }

  const tags = Array.from(new Set(post.tags));

  return (
    <>
      <div className="my-2 flex flex-row justify-center">
        <h4 className="font-mono text-gray-500">
          {post.date.toLocaleDateString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h4>
      </div>

      <div className="my-2 flex flex-row justify-center text-center">
        <h1 className="content-center">{post.title}</h1>
      </div>

      <div className="wrap flex flex-row justify-center gap-2 md:gap-4">
        {tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>

      <hr className="my-6 border-gray-200" />
    </>
  );
}
