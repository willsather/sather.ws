import type { CSSProperties, FC } from "react";
import { Highlight, themes } from "prism-react-renderer";
// import oneDarkTheme from "@/src/components/blog/theme/oneDarkTheme";

export interface CodeBlockProps {
  hideLineNumbers?: boolean;
  children?: string;
  language?: string;
  styles?: CSSProperties;
}

const CodeBlock: FC<CodeBlockProps> = (props) => {
  const { children = "", language = "tsx", hideLineNumbers } = props;
  const codeLanguage = language.replace("language-", "");

  // themes.nightOwl
  // themes.oceanicNext

  return (
    <Highlight code={children} language={codeLanguage} theme={themes.nightOwl}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            borderRadius: "0.5rem",
            padding: "0.5rem 0.75rem",
            overflow: "auto",
            ...style,
            ...props.styles,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {!hideLineNumbers && <span>{i + 1} </span>}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
