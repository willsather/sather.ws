import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import "@/app/blog/(components)/markdown.css";

export interface PreBlockProps extends HTMLAttributes<HTMLPreElement> {
  children?: ReactNode;
  fileName?: string;
}

function isReactElement(node: ReactNode): node is ReactElement {
  return typeof node === "object" && node !== null && "props" in node;
}

export default function PreBlock({ ...props }: PreBlockProps) {
  let className: string | undefined = undefined;

  if (isReactElement(props.children)) {
    // @ts-ignore
    className = props.children.props.className;
  }

  const language = className?.match(/language-(\w+)/)?.[1];
  const title = props?.title?.replaceAll('"', "");

  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-gray-900 shadow-lg">
      {title && (
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 text-gray-400 text-sm">
          <span className="font-medium">{title}</span>
        </div>
      )}

      <div className="relative">
        <pre className="flex overflow-x-auto text-gray-300 text-sm">
          {props.children}
        </pre>

        {language && (
          <div className="absolute right-2 bottom-2 rounded bg-gray-800 px-2 py-1 font-medium text-gray-400 text-xs">
            {language.toLowerCase()}
          </div>
        )}
      </div>
    </div>
  );
}
