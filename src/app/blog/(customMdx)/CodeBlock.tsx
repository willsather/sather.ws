import type { FC } from "react";
import { Highlight } from "prism-react-renderer";
import prismTheme from "@/src/app/blog/(customMdx)/prismTheme";
import "@/src/app/scroll.css";

export interface CodeBlockProps {
  hideLineNumbers?: boolean;
  children?: string;
  language?: string;
  fileName?: string;
}

const CodeBlock: FC<CodeBlockProps> = ({
  children = "",
  fileName,
  language = "language-text",
  hideLineNumbers,
}) => {
  const codeLanguage = language.replace("language-", "");

  // Prism React Renderer Themes: themes.nightOwl or themes.oneDark
  return (
    <Highlight code={children} language={codeLanguage} theme={prismTheme}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          <pre className="bg-gray-100 border-2 border-gray-500 my-4 rounded-lg font-mono">
            {/*Only show header if filename exists OR language isn't text*/}
            {(fileName != null || codeLanguage != "text") && (
              <div className="mb-4 bg-gray-300 py-2 px-4 rounded-t-md">
                <div
                  className={`flex items-center ${
                    fileName ? "justify-between" : "justify-end"
                  }`}
                >
                  {fileName && (
                    <p className="font-mono font-bold text-gray-500">
                      {fileName}
                    </p>
                  )}

                  <p className="font-mono text-blue-400 bg-blue-100 text-sm p-1 px-2 border-2 border-blue-400 rounded-lg">
                    {codeLanguage.toUpperCase()}
                  </p>
                </div>
              </div>
            )}

            {/*Code Block*/}
            <div className="mt-2 mb-2 overflow-auto scrollbar-custom mx-4">
              <div>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {!hideLineNumbers && (
                      <span className="font-mono text-gray-400">{i + 1} </span>
                    )}

                    {(codeLanguage == "shell" ||
                      codeLanguage == "bash" ||
                      codeLanguage == "zsh") &&
                      i < tokens.length - 1 && (
                        <span className="font-mono text-pink-500 mr-2">$</span>
                      )}

                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </pre>
        </>
      )}
    </Highlight>
  );
};

export default CodeBlock;
