import type { HTMLAttributes, ReactElement, ReactNode } from "react";

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
    <div className="my-3 overflow-hidden rounded-xl border border-neutral-500/30 bg-neutral-500/10">
      {title && (
        <div className="flex items-center gap-2 border-neutral-500/30 border-b px-4 py-2 text-neutral-400 text-sm">
          <span className="font-medium">{title}</span>
        </div>
      )}

      <div className="relative">
        <pre className="flex overflow-x-auto px-4 py-4 text-neutral-200 text-sm">
          {props.children}
        </pre>

        {language && (
          <div className="absolute right-2 bottom-2 rounded-md border border-neutral-500/30 bg-neutral-500/10 px-2 py-1 font-mono text-neutral-200 text-xs">
            {language.toLowerCase()}
          </div>
        )}
      </div>
    </div>
  );
}
