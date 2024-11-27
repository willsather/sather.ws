import { withHeadingId } from "@/app/blog/(components)/utils";
import type { HTMLAttributes } from "react";

export default function H3({
  children,
  id,
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="mb-4">{withHeadingId(children, id)}</h3>;
}
