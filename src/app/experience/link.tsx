"use client";

import theme from "@/src/theme/theme";
import { Typography } from "@mui/material";
import Link from "next/link";
import { UrlObject } from "url";
import Box from "@mui/material/Box";

const ExternalLink = ({ href, text }: { href: string | UrlObject; text: string }) => {
  return (
    <Box
      sx={[
        {
          "&:hover": {
            textDecoration: "underline",
            color: theme.palette.grey["500"],
          },
        },
      ]}
    >
      <Link href={href} style={{ textDecoration: "none", color: theme.palette.grey["500"] }}>
        <Typography variant="h2">{text}</Typography>
      </Link>
    </Box>
  );
};

export default ExternalLink;
