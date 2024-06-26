"use client";

import React from "react";
import prismTheme from "@/src/app/blog/(customMdx)/prismTheme";
import "@/src/app/scroll.css";
import FileName from "@/src/app/blog/(customMdx)/FileName";
import { CodeBlock } from "react-code-block";
import FileType from "@/src/app/blog/(customMdx)/FileType";

export interface CodeBlockProps {
  children: string;
  className?: string;
  lines?: (number | string)[];
  words?: string[];
  language?: string;
  fileName?: string;
  showLineNumbers?: boolean;
}

function MyCodeBlock({
  children,
  fileName,
  lines = [],
  words = [],
  language = "language-text",
  showLineNumbers = false,
}: CodeBlockProps) {
  const codeLanguage = language.replace("language-", "");

  const isTerminal =
    codeLanguage == "shell" || codeLanguage == "bash" || codeLanguage == "zsh";

  return (
    <CodeBlock
      code={children}
      language={codeLanguage}
      words={words}
      lines={lines}
      theme={prismTheme}
    >
      <div className="relative bg-gray-100 border-2 border-gray-500 my-4 rounded-xl">
        {/* Filename */}

        <FileName fileName={fileName} />

        <div className="overflow-auto">
          <CodeBlock.Code className="!px-0 ">
            {({ isLineHighlighted }) => (
              <div
                className={`table-row ${
                  isLineHighlighted ? "bg-emerald-400/25" : ""
                }`}
              >
                {/* Add Highlighted Symbol if desired */}
                <div
                  className={`table-cell text-emerald-400 select-none ${
                    isLineHighlighted ? "opacity-100 px-4" : "opacity-0"
                  }`}
                >
                  +
                </div>

                {/*Add Line Numbers if desired*/}
                {showLineNumbers && (
                  <CodeBlock.LineNumber className="pl-1 pr-4 table-cell text-sm text-gray-400 text-right select-none" />
                )}

                <CodeBlock.LineContent
                  className={`table-cell w-full ${
                    !showLineNumbers ? "px-3" : "pr-3"
                  }`}
                >
                  {/*Add Dollar Sign to Terminal*/}
                  {isTerminal && (
                    <span className="text-pink-500 mr-2 select-none">$</span>
                  )}
                  <CodeBlock.Token />
                </CodeBlock.LineContent>
              </div>
            )}
          </CodeBlock.Code>

          <div className="m-4">
            {/* Language being used */}
            <div className="static px-6 pb-4 text-right uppercase select-none">
              <FileType codeLanguage={codeLanguage.toUpperCase()} />
            </div>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
}

export default MyCodeBlock;
