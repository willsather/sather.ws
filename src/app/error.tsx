"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-[100vh] flex-col items-center justify-center p-4 text-primary">
      <h1
        className="my-8 font-bold font-mono text-[20vw] leading-none"
        aria-label="404 error"
      >
        500
      </h1>

      <p className="mb-8 font-mono text-gray-400 text-xl">oops an error.</p>
    </main>
  );
}
