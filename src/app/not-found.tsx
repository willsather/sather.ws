"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-4">
      <h1
        className="my-8 font-bold font-mono text-[20vw] leading-none"
        aria-label="404 error"
      >
        404
      </h1>
      <p className="mb-8 font-mono text-xl">page not found.</p>
      <Link
        href="/"
        className="border border-black px-4 py-2 transition-colors hover:bg-black/5"
        aria-label="Return to home page"
      >
        go home
      </Link>
    </main>
  );
}
