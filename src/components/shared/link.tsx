import theme from "@/src/theme/theme";
import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

const ExternalLink = ({ href, text }: { href: string | UrlObject; text: string }) => {
  return (
    <Link href={href} style={{ color: theme.palette.grey["500"] }}>
      <Typography variant="h4">{text}</Typography>
    </Link>
  );
};

export default ExternalLink;
