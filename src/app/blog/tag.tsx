"use client";

import { Typography } from "@mui/material";
import Link from "next/link";

export default function Tag({ tag }: { tag: string }) {
  return (
    <div className="mx-2 hover:underline hover:text-gray-500">
      <Link href={`/blog/tags/${tag}`} className="text-gray-500 no-underline">
        <Typography variant="body1">{tag.toUpperCase()}</Typography>
      </Link>
    </div>
  );
}
