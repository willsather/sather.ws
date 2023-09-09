"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import theme from "@/src/theme/theme";
import styles from "@/src/components/blog/tag/tag.module.scss";

export default function Tag({ tag }: { tag: string }) {
  return (
    <Box mx={1}>
      <Link href={`/blog/tags/${tag}`} className={styles.tag} style={{ color: theme.palette.grey["100"] }}>
        <Typography variant="tag">{tag.toUpperCase()}</Typography>
      </Link>
    </Box>
  );
}
