import type { OlHTMLAttributes } from "react";

export default function OL({ ...props }: OlHTMLAttributes<HTMLOListElement>) {
  return <ol className="mb-4 ml-6 list-decimal" {...props} />;
}
