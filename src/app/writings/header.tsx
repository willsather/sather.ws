"use client";

import Link from "next/link";
import { notFound, useSelectedLayoutSegments } from "next/navigation";

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
      {/* Back to home */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-gray-400 text-sm transition-colors hover:text-white"
        >
          ← back
        </Link>
      </div>

      {/* Title and metadata */}
      <div className="mb-8">
        <h1 className="mb-2 font-bold text-2xl text-white">{post.title}</h1>
        <p className="font-mono text-gray-400 text-sm">
          {post.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="font-mono text-gray-500 text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
