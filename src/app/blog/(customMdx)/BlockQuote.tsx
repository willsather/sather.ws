import type { FC, ReactNode } from "react";

export interface BlockquoteProps {
  children?: ReactNode;
}

const Blockquote: FC<BlockquoteProps> = ({ children }) => {
  return (
    <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 rounded-sm">
      <div className="italic font-medium leading-relaxed text-gray-900">
        {children}
      </div>
    </blockquote>
  );
};

export default Blockquote;
