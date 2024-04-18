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
          <pre className="border-2 border-gray-500 my-4 rounded-lg font-mono">
            <div className="bg-gray-300 rounded-t-md">
              {/*Only show header if filename exists OR language isn't text*/}
              {(fileName != null || codeLanguage != "text") && (
                <div className="py-2 pl-4 mr-4 overflow-x-auto">
                  <div
                    className={`flex items-center ${
                      fileName ? "justify-between" : "justify-end"
                    }`}
                  >
                    {fileName && (
                      <p className="font-mono font-bold text-gray-500 mr-4">
                        {fileName}
                      </p>
                    )}

                    <p className="font-mono text-blue-400 bg-blue-100 text-sm p-1 px-2 border-2 border-blue-400 rounded-lg">
                      {codeLanguage.toUpperCase()}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/*Code Block*/}
            <div className="bg-gray-100 rounded-b-md">
              <div className="p-2 px-4 overflow-auto scrollbar-custom">
                <div>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {!hideLineNumbers && (
                        <span className="font-mono text-gray-400">
                          {i + 1}{" "}
                        </span>
                      )}

                      {/*Add Dollar Sign to Terminal*/}
                      {(codeLanguage == "shell" ||
                        codeLanguage == "bash" ||
                        codeLanguage == "zsh") &&
                        i < tokens.length - 1 && (
                          <span className="font-mono text-pink-500 mr-2">
                            $
                          </span>
                        )}

                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </pre>
        </>
      )}
    </Highlight>
  );
};

export default CodeBlock;
