import type { HTMLAttributes } from "react";

import { withHeadingId } from "@/app/blog/(components)/utils";

export default function H3({
  children,
  id,
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="mb-4">{withHeadingId(children, id)}</h3>;
}
