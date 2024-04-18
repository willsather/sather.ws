import { ReactNode } from "react";

export default function Component({ children }: { children: ReactNode }) {
  return (
    <code className="font-mono text-sm text-gray-500 py-1 px-1 rounded-md border-2 border-gray-500">
      {"<"}
      {children}
      {"/>"}
    </code>
  );
}
