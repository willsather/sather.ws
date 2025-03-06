import type { HTMLAttributes } from "react";

import { withHeadingId } from "@/app/blog/(components)/utils";

export default function H4({
  children,
  id,
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className="mb-4">{withHeadingId(children, id)}</h4>;
}
