"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import theme from "@/src/theme/theme";

export default function Tag({ tag }: { tag: string }) {
  return (
    <Box
      mx={1}
      sx={[
        {
          "&:hover": {
            textDecoration: "underline",
            color: theme.palette.grey["300"],
          },
        },
      ]}
    >
      <Link
        href={`/blog/tags/${tag}`}
        style={{
          color: theme.palette.grey["300"],
          textDecoration: "none",
        }}
      >
        <Typography variant="body1">{tag.toUpperCase()}</Typography>
      </Link>
    </Box>
  );
}
