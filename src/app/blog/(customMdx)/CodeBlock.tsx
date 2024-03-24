import type { CSSProperties, FC } from "react";
import { Highlight, themes } from "prism-react-renderer";

export interface CodeBlockProps {
  hideLineNumbers?: boolean;
  children?: string;
  language?: string;
  styles?: CSSProperties;
  fileName?: string;
}

const CodeBlock: FC<CodeBlockProps> = ({
  children = "",
  fileName,
  styles,
  language = "text",
  hideLineNumbers,
}) => {
  const codeLanguage = language.replace("language-", "");

  // Prism React Renderer Themes: themes.nightOwl or themes.oneDark
  return (
    <Highlight code={children} language={codeLanguage} theme={themes.nightOwl}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <>
          <pre
            style={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              borderRadius: "0.5rem",
              padding: "0.5rem 0.75rem",
              overflow: "auto",
              ...style,
              ...styles,
            }}
          >
            {fileName && (
              <>
                <code className="my-1">
                  <p className="italic text-gray-200 my-2">{fileName}</p>
                </code>

                <hr className="bg-gray-500 mt-2 mb-3" />
              </>
            )}

            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {!hideLineNumbers && <span>{i + 1} </span>}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        </>
      )}
    </Highlight>
  );
};

export default CodeBlock;
