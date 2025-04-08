import type { ComponentProps } from "react";

export default function DotsIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 452 358"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="graphics-symbol"
      {...props}
    >
      <circle cx="75.2804" cy="282.72" r="75.2804" fill="black" />
      <circle cx="376.402" cy="282.72" r="75.2804" fill="black" />
      <circle cx="225.841" cy="75.2804" r="75.2804" fill="black" />
    </svg>
  );
}
