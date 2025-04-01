import type { ImgHTMLAttributes } from "react";

export default function Img({
  children,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img {...props} className="my-3 w-full" loading="lazy" alt={props.alt} />
  );
}
