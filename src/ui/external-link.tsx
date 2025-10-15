"use client";

import type { UrlObject } from "node:url";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function ExternalLink({
  href,
  children,
  className,
}: {
  href: string | UrlObject;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "font-mono font-normal text-gray-400 underline decoration-dotted hover:text-gray-300 hover:decoration-solid",
        className,
      )}
    >
      {children}
    </Link>
  );
}
