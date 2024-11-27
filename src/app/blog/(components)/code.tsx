import type { HTMLAttributes } from "react";

export default function Code({ children }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <code className="rounded-md bg-gray-200 px-1 py-0.5 text-sm">
      {children}
    </code>
  );
}
