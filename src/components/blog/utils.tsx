import type { ReactNode } from "react";

export function withHeadingId(children: ReactNode, id?: string) {
  const anchor =
    "absolute px-3 -left-[2rem] invisible [span:hover_&]:visible font-mono font-normal text-neutral-300 hover:text-neutral-400";

  return (
    <span className="relative">
      <a className={anchor} href={`#${id}`}>
        #
      </a>

      <section id={id} className="-top-[20px] absolute" />

      {children}
    </span>
  );
}
