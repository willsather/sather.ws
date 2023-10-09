"use client";

import Link from "next/link";
import { Box, Grid, Theme, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const PostListItem = ({ slug, title, date, summary }: { slug: string; title: string; date: Date; summary: string }) => {
  const mobileView = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  if (mobileView) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", border: 3, borderColor: "white", borderRadius: 2 }}>
        <Link href={`/blog/posts/${slug}`} style={{ color: "black", textDecoration: "none" }}>
          <Typography variant="h3" sx={{ fontSize: 20, mt: 2 }}>
            {title}
          </Typography>
        </Link>

        <Typography variant="subtitle2" sx={{ color: "grey" }}>
          {date.toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}
        </Typography>

        <Typography variant="body2" mt={2}>
          {summary}
        </Typography>

        <Link href={`/blog/posts/${slug}`} style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", color: "grey" }} my={4}>
            <Typography mr={2}>Read more →</Typography>
          </Box>
        </Link>
      </Box>
    );
  }

  return (
    <Box sx={{ border: 3, borderColor: "white", borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="subtitle2" sx={{ color: "grey" }}>
              {date.toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box>
            <Link href={`/blog/posts/${slug}`} style={{ color: "black", textDecoration: "none" }}>
              <Typography variant="h3" sx={{ fontSize: { xs: 20, md: 24 }, textAlign: { xs: "center", md: "left" } }}>
                {title}
              </Typography>
            </Link>
            <Typography variant="body2">{summary}</Typography>

            <Link href={`/blog/posts/${slug}`} style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", color: "grey" }} my={4}>
                <Typography mr={2}>Read more →</Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostListItem;
