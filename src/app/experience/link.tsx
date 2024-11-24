"use client";

import type { UrlObject } from "node:url";
import Link from "next/link";

const ExternalLink = ({
  href,
  text,
}: {
  href: string | UrlObject;
  text: string;
}) => {
  return (
    <Link href={href}>
      <h2 className="font-mono text-gray-600 underline hover:text-black">
        {text}
      </h2>
    </Link>
  );
};

export default ExternalLink;
