import { withHeadingId } from "@/app/blog/(components)/utils";
import type { HTMLAttributes } from "react";

export default function H1({
  id,
  children,
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="mb-4 text-2xl md:text-3xl">{withHeadingId(children, id)}</h1>
  );
}
