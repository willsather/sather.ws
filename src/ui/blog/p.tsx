import type { HTMLAttributes } from "react";

export default function P({
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className="mb-4" {...props}>
      {children}
    </p>
  );
}
