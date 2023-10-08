import type { CSSProperties, FC } from "react";
import { Highlight, themes } from "prism-react-renderer";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";

export interface CodeBlockProps {
  hideLineNumbers?: boolean;
  children?: string;
  language?: string;
  styles?: CSSProperties;
  fileName?: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ children = "", fileName, styles, language = "text", hideLineNumbers }) => {
  const codeLanguage = language.replace("language-", "");

  // Prism React Renderer Themes: themes.nightOwl or themes.oneDark
  return (
    <Highlight code={children} language={codeLanguage} theme={themes.nightOwl}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <>
          <pre
            style={{
              borderRadius: "0.5rem",
              padding: "0.5rem 0.75rem",
              overflow: "auto",
              ...style,
              ...styles,
            }}
          >
            {fileName && (
              <>
                <Box my={1}>
                  <Typography variant="codeFileName">{fileName}</Typography>
                </Box>

                <Divider color="grey" sx={{ mb: 3 }} />
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
