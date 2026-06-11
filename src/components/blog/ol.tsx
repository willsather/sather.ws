import type { OlHTMLAttributes } from "react";

export default function OL({ ...props }: OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className="mb-4 list-decimal space-y-2 pl-6 text-neutral-300 [&>li]:ml-[-0.5rem]"
      {...props}
    />
  );
}
