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
      <h2 className="text-gray-600 underline font-mono hover:text-black">
        {text}
      </h2>
    </Link>
  );
};

export default ExternalLink;
