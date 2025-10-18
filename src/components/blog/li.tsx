import type { LiHTMLAttributes } from "react";

export default function LI({ ...props }: LiHTMLAttributes<HTMLLIElement>) {
  return <li className="text-gray-300" {...props} />;
}
