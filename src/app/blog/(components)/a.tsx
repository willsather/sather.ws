import type { AnchorHTMLAttributes } from "react";

export default function A({
  children,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className="underline" {...props}>
      {children}
    </a>
  );
}
