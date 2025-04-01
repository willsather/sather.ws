"use client";

import ExternalLink from "@/ui/external-link";

export default function Tag({ tag }: { tag: string }) {
  return (
    <ExternalLink href={`/blog/tags/${tag.toLowerCase()}`} className="mx-2">
      <p>{tag.toLowerCase()}</p>
    </ExternalLink>
  );
}
