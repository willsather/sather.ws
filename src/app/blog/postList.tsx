import type { Post } from "@/types/post";
import Link from "next/link";

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="lg:space-y-2">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/posts/${post.slug}`}
          className="group block rounded p-4 transition hover:bg-gray-50"
        >
          <div className="grid gap-2 md:gap-4 lg:grid-cols-12">
            <div className="font-mono text-gray-400 text-sm lg:col-start-3 lg:col-end-5 lg:text-base">
              {formatDate(post.data.date)}
            </div>

            <div className="font-medium text-gray-700 group-hover:underline lg:col-start-5 lg:col-end-12">
              {post.data.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
