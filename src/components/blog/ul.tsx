import type { HTMLAttributes } from "react";

export default function UL({ ...props }: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="mb-4 list-disc space-y-2 pl-6 text-neutral-300 [&>li]:ml-[-0.5rem]"
      {...props}
    />
  );
}
