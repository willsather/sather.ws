import ExternalLinkIcon from "@/icons/external-link";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function ArchivePage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-12 text-gray-100 md:px-24 md:py-16">
      <div className="max-w-2xl">
        {/* Back to home */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-gray-400 text-sm transition-colors hover:text-white"
          >
            ← back
          </Link>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="mb-2 font-normal text-2xl text-white">archive</h1>
          <p className="font-mono text-gray-400 text-sm">all writing</p>
        </div>

        {/* Posts list */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.slug} className="border-gray-800 border-b pb-6">
              <div className="mb-2">
                {post.external ? (
                  <Link
                    href={post.external}
                    className="text-lg text-white transition-colors hover:text-gray-300"
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
                    href={`/writing/${post.slug}`}
                    className="text-lg text-white transition-colors hover:text-gray-300"
                  >
                    {post.title}
                  </Link>
                )}
              </div>

              <p className="mb-2 text-gray-400 text-sm">
                {post.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <p className="text-gray-300 leading-relaxed">{post.summary}</p>

              {post.tags.length > 0 && (
                <div className="mt-2">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-gray-500 text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
