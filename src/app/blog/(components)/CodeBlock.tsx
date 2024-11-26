"use client";

import React from "react";
import { CodeBlock } from "react-code-block";

import FileName from "@/app/blog/(components)/FileName";
import FileType from "@/app/blog/(components)/FileType";
import prismTheme from "@/app/blog/(components)/prismTheme";

import "@/app/scroll.css";

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
    codeLanguage === "shell" ||
    codeLanguage === "bash" ||
    codeLanguage === "zsh";

  return (
    <CodeBlock
      code={children}
      language={codeLanguage}
      words={words}
      lines={lines}
      theme={prismTheme}
    >
      <div className="relative my-4 overflow-hidden rounded-xl border-2 border-gray-500 bg-gray-100">
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
                  className={`table-cell select-none text-emerald-400 ${
                    isLineHighlighted ? "px-2 opacity-100 md:px-4" : "opacity-0"
                  }`}
                >
                  +
                </div>

                {/*Add Line Numbers if desired*/}
                {showLineNumbers && (
                  <CodeBlock.LineNumber className="table-cell select-none pr-4 pl-1 text-right text-gray-400 text-sm" />
                )}

                <CodeBlock.LineContent
                  className={`table-cell w-full ${
                    !showLineNumbers ? "px-3" : "pr-3"
                  }`}
                >
                  {/*Add Dollar Sign to Terminal*/}
                  {isTerminal && (
                    <span className="mr-2 select-none text-pink-500">$</span>
                  )}
                  <CodeBlock.Token />
                </CodeBlock.LineContent>
              </div>
            )}
          </CodeBlock.Code>

          <div className="m-4">
            {/* Language being used */}
            <div className="static select-none px-6 pb-4 text-right uppercase">
              <FileType codeLanguage={codeLanguage.toUpperCase()} />
            </div>
          </div>
        </div>
      </div>
    </CodeBlock>
  );
}

export default MyCodeBlock;
