"use client";

import {
  notFound,
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";

import type { Post } from "@/lib/blog";

export default function PostHeader({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const urlSegment = useSelectedLayoutSegments();
  const slug = urlSegment[urlSegment.length - 1];

  const post = posts.find((post) => post.slug === slug);

  if (post == null || post?.draft) {
    notFound();
  }

  const tags = Array.from(new Set(post.tags));

  return (
    <>
      <div className="mb-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="cursor-pointer text-muted-light text-sm transition-colors hover:text-white"
        >
          ← back
        </button>
      </div>

      {/* Title and metadata */}
      <div className="mb-8">
        <h1 className="mb-2 font-bold text-2xl text-white">{post.title}</h1>
        <p className="font-mono text-muted-light text-sm">
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
              <span key={tag} className="font-mono text-muted-light text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
