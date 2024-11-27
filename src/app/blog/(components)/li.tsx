import type { LiHTMLAttributes } from "react";

export default function LI({ ...props }: LiHTMLAttributes<HTMLLIElement>) {
  return <li className="mt-2" {...props} />;
}
