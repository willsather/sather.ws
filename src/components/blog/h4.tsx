import type { HTMLAttributes } from "react";

import { withHeadingId } from "@/components/blog/utils";

export default function H4({
  children,
  id,
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className="mb-4 font-bold">{withHeadingId(children, id)}</h4>;
}
