import type { FC } from "react";
import { Highlight } from "prism-react-renderer";
import prismTheme from "@/src/app/blog/(customMdx)/prismTheme";
import "@/src/app/scroll.css";
import FileName from "@/src/app/blog/(customMdx)/FileName";

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

  const showHeader = fileName != null || codeLanguage != "text";

  // Prism React Renderer Themes: themes.nightOwl or themes.oneDark
  return (
    <Highlight code={children} language={codeLanguage} theme={prismTheme}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          <pre className="border-2 border-gray-500 my-4 rounded-lg font-mono">
            {/*Code Block Header*/}
            <div className="bg-gray-300 rounded-t-md py-2 px-4">
              {/*Only show header if filename exists OR language isn't text*/}
              {showHeader && (
                <div className="overflow-x-auto">
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
                    <FileName codeLanguage={codeLanguage.toUpperCase()} />
                    {}
                  </div>
                </div>
              )}
            </div>

            {/*Code Block*/}
            <div
              className={`bg-gray-100 p-2 px-4 ${
                showHeader ? "rounded-b-md" : "rounded-md"
              }`}
            >
              <div className="overflow-auto scrollbar-custom">
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
