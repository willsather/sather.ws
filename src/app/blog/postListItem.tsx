"use client";

import Link from "next/link";
import { Grid, Typography } from "@mui/material";

const PostListItem = ({ slug, title, date, summary }: { slug: string; title: string; date: Date; summary: string }) => {
  return (
    <div>
      {/*Mobile Item*/}
      <div className="block md:hidden">
        <div className="flex flex-col border-3 border-secondary border-r-2">
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

          <Link href={`/blog/posts/${slug}`} className="no-underline">
            <div className="flex text-gray-500 my-6">
              <Typography mr={2}>Read more →</Typography>
            </div>
          </Link>
        </div>
      </div>

      {/*Desktop Item*/}
      <div className="hidden md:flex border-3 border-secondary border-r-2">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="flex justify-center items-center">
              <Typography variant="subtitle2" sx={{ color: "grey" }}>
                {date.toLocaleDateString("default", { month: "long", day: "numeric", year: "numeric" })}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={8}>
            <div>
              <Link href={`/blog/posts/${slug}`} className="text-primary no-underline">
                <Typography variant="h3" sx={{ fontSize: { xs: 20, md: 24 }, textAlign: { xs: "center", md: "left" } }}>
                  {title}
                </Typography>
              </Link>
              <Typography variant="body2">{summary}</Typography>

              <Link href={`/blog/posts/${slug}`} className="no-underline">
                <div className="flex text-gray-500 my-6">
                  <Typography mr={2}>Read more →</Typography>
                </div>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PostListItem;
