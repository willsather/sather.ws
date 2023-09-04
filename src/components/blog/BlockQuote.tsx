import type { FC, ReactNode } from "react";
import { Box } from "@mui/material";

export interface BlockquoteProps {
  children?: ReactNode;
}

const Blockquote: FC<BlockquoteProps> = (props) => {
  const { children } = props;

  return (
    <Box
      component="blockquote"
      dir="auto"
      sx={{
        borderInlineStart: "3px solid",
        paddingInlineStart: "1.5rem",
        borderColor: "text.secondary",
        m: "0.25rem 0",
      }}
    >
      {children}
    </Box>
  );
};

export default Blockquote;
