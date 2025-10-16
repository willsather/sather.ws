import { Quote } from "lucide-react";
import type { BlockquoteHTMLAttributes } from "react";

export default function Blockquote({
  children,
}: BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className="my-3 flex items-start gap-3 rounded-xl border border-gray-500/30 bg-gray-500/10 px-4 py-4 text-gray-200">
      {/*<Quote className="size-4 flex-shrink-0 mt-0.5" />*/}
      <div className="font-mono text-xs italic leading-relaxed">{children}</div>
    </blockquote>
  );
}
