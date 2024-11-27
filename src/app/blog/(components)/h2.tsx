import { withHeadingId } from "@/app/blog/(components)/utils";
import type { HTMLAttributes } from "react";

export default function H2({
  children,
  id,
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className="mb-4 text-xl md:text-2xl">{withHeadingId(children, id)}</h2>
  );
}
