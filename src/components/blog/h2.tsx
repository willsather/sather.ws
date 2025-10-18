import type { HTMLAttributes } from "react";

import { withHeadingId } from "@/components/blog/utils";

export default function H2({
  children,
  id,
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className="mb-4 text-lg text-white">{withHeadingId(children, id)}</h2>
  );
}
