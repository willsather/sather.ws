import type { Metadata } from "next";
import Link from "next/link";

import ExternalLinkIcon from "@/icons/external-link";
import { getAllPosts } from "@/lib/blog";
import thoughtsMetadata from "@/metadata/thoughts";

export const metadata: Metadata = thoughtsMetadata;

export default function ThoughtsPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-12 text-muted-light md:px-24 md:py-16">
      <div className="max-w-2xl">
        {/* Back to home */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-muted-light text-sm transition-colors hover:text-white"
          >
            ← back
          </Link>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="mb-2 font-normal text-2xl text-white">thoughts</h1>
          <p className="font-mono text-muted-light text-sm">
            all my random thoughts, talks, posts, and more
          </p>
        </div>

        {/* Posts list */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.slug} className="border-muted border-b pb-6">
              <div className="mb-2">
                {post.external ? (
                  <Link
                    href={post.external}
                    className="text-lg text-white transition-colors hover:text-muted-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title.split(" ").slice(0, -1).join(" ")}
                    {post.title.split(" ").length > 1 ? " " : ""}
                    <span className="whitespace-nowrap">
                      {post.title.split(" ").slice(-1)[0]}{" "}
                      <ExternalLinkIcon className="inline size-3" />
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={`/thoughts/${post.slug}`}
                    className="text-lg text-white transition-colors hover:text-muted-light"
                  >
                    {post.title}
                  </Link>
                )}
              </div>

              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <time
                  dateTime={post.date.toISOString()}
                  className="text-muted text-sm"
                >
                  {post.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.tags.map((tag) => (
                  <span key={tag} className="font-mono text-muted text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              {post.summary && (
                <p className="text-muted-light leading-relaxed">
                  {post.summary}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
