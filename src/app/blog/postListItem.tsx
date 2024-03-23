"use client";

import Link from "next/link";
import { Grid } from "@mui/material";

const PostListItem = ({
  slug,
  title,
  date,
  summary,
}: {
  slug: string;
  title: string;
  date: Date;
  summary: string;
}) => {
  return (
    <div>
      {/*Mobile Item*/}
      <div className="block md:hidden">
        <div className="flex flex-col mb-6 border-3 border-secondary border-r-2">
          <Link
            href={`/blog/posts/${slug}`}
            className="no-underline text-primary"
          >
            <h3 className="text-xl">{title}</h3>

            <h5 className=" text-gray-500 my-1">
              {date.toLocaleDateString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h5>

            <p>{summary}</p>

            <p className="mt-2 text-gray-500">Read more →</p>
          </Link>
        </div>
      </div>

      {/*Desktop Item*/}
      <div className="hidden md:flex mb-6 border-3 border-secondary border-r-2">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="flex justify-center items-center">
              <h5 className="text-lg text-gray-500">
                {date.toLocaleDateString("default", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h5>
            </div>
          </Grid>

          <Grid item xs={8}>
            <Link
              href={`/blog/posts/${slug}`}
              className="text-primary no-underline"
            >
              <h3 className="text-center md:text-left">{title}</h3>

              <p>{summary}</p>

              <p className="mt-2 text-gray-500">Read more →</p>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PostListItem;
