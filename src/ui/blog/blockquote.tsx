import type { BlockquoteHTMLAttributes } from "react";

export default function Blockquote({
  children,
}: BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className="my-4 rounded-sm border border-gray-300 border-s-4 bg-gray-50 p-4 font-sans">
      <div className="font-medium text-gray-900 italic leading-relaxed">
        {children}
      </div>
    </blockquote>
  );
}
