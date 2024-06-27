"use client";

import Link from "next/link";

export default function Tag({ tag }: { tag: string }) {
  return (
    <div className="mx-2 hover:text-gray-500 hover:underline">
      <Link
        href={`/blog/tags/${tag.toLowerCase()}`}
        className="text-gray-500 no-underline"
      >
        <p className="text-gray-500">{tag.toUpperCase()}</p>
      </Link>
    </div>
  );
}
