import React, { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-3 m-3 bg-secondary">
      <div className="col-span-full md:col-start-3 md:col-end-11 mx-4">{children}</div>
    </div>
  );
}
