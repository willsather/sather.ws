import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

export default function A({
  children,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href == null) {
    throw new Error("`A` should have an href");
  }

  return (
    <Link
      href={href}
      className={cn(
        "text-gray-400 transition-colors hover:text-white underline",
        props.className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
