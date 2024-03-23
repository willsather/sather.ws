"use client";

import { Pagination, Stack, Typography } from "@mui/material";
import PostListItem from "@/src/app/blog/postListItem";
import { Post } from "@/src/types/post";
import { ChangeEvent, useState } from "react";

const POSTS_PER_PAGE = 3;

export default function PaginatedPosts({ posts }: { posts: Post[] }) {
  const [page, setPage] = useState(1);
  const [firstPost, setFirstPost] = useState(0);
  const pageCount = Math.ceil(posts.length / 3);

  const handlePaginationChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setFirstPost((value - 1) * POSTS_PER_PAGE);
  };

  if (!posts || posts.length <= 0) {
    return (
      <Stack direction="row" justifyContent="center" mt={4}>
        <Typography variant="body1" mt={2}>
          No posts found
        </Typography>
      </Stack>
    );
  }

  return (
    <div>
      <div>
        {posts.slice(firstPost, firstPost + POSTS_PER_PAGE).map((post) => {
          const {
            slug,
            data: { title, date, summary },
          } = post;

          return <PostListItem key={slug} slug={slug} title={title} date={date} summary={summary} />;
        })}
      </div>
      <Stack direction="row" justifyContent="center" mt={4}>
        <Pagination
          page={page}
          count={pageCount}
          defaultPage={1}
          onChange={handlePaginationChange}
          shape="rounded"
          sx={{ color: "#AAAAAA" }}
        />
      </Stack>
    </div>
  );
}
