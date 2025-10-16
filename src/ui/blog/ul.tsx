import type { HTMLAttributes } from "react";

export default function UL({ ...props }: HTMLAttributes<HTMLUListElement>) {
  return <ul className="mb-4 space-y-2 text-gray-300" {...props} />;
}
