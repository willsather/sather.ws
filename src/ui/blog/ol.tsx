import type { OlHTMLAttributes } from "react";

export default function OL({ ...props }: OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className="mb-4 space-y-2 text-gray-300 list-decimal pl-6 [&>li]:ml-[-0.5rem]"
      {...props}
    />
  );
}
