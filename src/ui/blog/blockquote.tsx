import type { BlockquoteHTMLAttributes } from "react";
import { Quote } from "lucide-react";

export default function Blockquote({
  children,
}: BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className="flex gap-3 items-start my-3 rounded-xl border border-gray-500/30 bg-gray-500/10 text-gray-200 px-4 py-4">
      {/*<Quote className="size-4 flex-shrink-0 mt-0.5" />*/}
      <div className="font-mono text-xs leading-relaxed italic">{children}</div>
    </blockquote>
  );
}
