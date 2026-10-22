import { Quote } from "lucide-react";
import type { BlockquoteHTMLAttributes } from "react";

export default function Blockquote({
  children,
}: BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className="my-3 flex items-start gap-3 rounded-xl border border-muted bg-muted px-4 py-4 text-muted-light">
      {/*<Quote className="size-4 flex-shrink-0 mt-0.5" />*/}
      <div className="font-mono text-xs italic leading-relaxed">{children}</div>
    </blockquote>
  );
}
