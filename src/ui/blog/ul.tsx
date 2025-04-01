import type { HTMLAttributes } from "react";

export default function UL({ ...props }: HTMLAttributes<HTMLUListElement>) {
  return <ul className="mb-4 ml-6 list-disc" {...props} />;
}
