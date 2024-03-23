"use client";

import Link from "next/link";
import { UrlObject } from "url";

const ExternalLink = ({
  href,
  text,
}: {
  href: string | UrlObject;
  text: string;
}) => {
  return (
    <Link href={href}>
      <h2 className="hover:underline text-gray-500">{text}</h2>
    </Link>
  );
};

export default ExternalLink;
