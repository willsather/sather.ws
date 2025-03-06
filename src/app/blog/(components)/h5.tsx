import type { HTMLAttributes } from "react";

import { withHeadingId } from "@/app/blog/(components)/utils";

export default function H5({
  children,
  id,
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className="mb-4">{withHeadingId(children, id)}</h5>;
}
