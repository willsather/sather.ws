import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="m-3 grid grid-cols-12 gap-1 bg-secondary md:gap-3">
      <div className="col-span-full mx-4 md:col-start-3 md:col-end-11">
        {children}
      </div>
    </div>
  );
}
