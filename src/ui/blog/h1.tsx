import type { HTMLAttributes } from "react";

import { withHeadingId } from "@/ui/blog/utils";

export default function H1({
  id,
  children,
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="mb-4 text-2xl md:text-3xl">{withHeadingId(children, id)}</h1>
  );
}
