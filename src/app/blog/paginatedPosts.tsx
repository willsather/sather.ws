"use client";

import PostListItem from "@/app/blog/postListItem";
import type { Post } from "@/types/post";

const POSTS_PER_PAGE = 3;

export default function PaginatedPosts({
  posts,
  page,
}: {
  posts: Post[];
  page: number;
}) {
  const pageCount = Math.ceil(posts.length / 3);

  const firstPostIndex = page * POSTS_PER_PAGE;

  if (!posts || posts.length <= 0) {
    return (
      <div className="mt-4 flex flex-row justify-center">
        <p className="mt-2">No posts found</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        {posts
          .slice(firstPostIndex, firstPostIndex + POSTS_PER_PAGE)
          .map((post) => {
            const {
              slug,
              data: { title, date, summary },
            } = post;

            return (
              <PostListItem
                key={slug}
                slug={slug}
                title={title}
                date={date}
                summary={summary}
              />
            );
          })}
      </div>

      <div className="my-24 flex flex-row justify-center">
        <nav aria-label="Blog Pagination">
          <ul className="-space-x-px flex h-8 items-center text-sm">
            {/*Previous Arrow*/}
            <li>
              <a
                href={page > 0 ? `?page=${page - 1}` : ""}
                className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 border-e-0 bg-white px-3 text-gray-500 leading-tight dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-400 hover:text-gray-700"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-2.5 w-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>

            {/*Numbers*/}
            {Array.from({ length: pageCount }, (_, i) => i).map(
              (pageNumber: number) => {
                if (pageNumber === page) {
                  return (
                    <li key={pageNumber}>
                      <a
                        href={pageNumber >= 0 ? `?page=${pageNumber}` : ""}
                        aria-label={`Go to page ${pageNumber + 1}`}
                        className="flex h-8 items-center justify-center border border-gray-300 bg-gray-200 px-3 text-gray-500 leading-tight dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-300 dark:hover:text-white dark:text-gray-400 hover:text-gray-700"
                      >
                        <span className="font-bold">{pageNumber + 1}</span>
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={pageNumber}>
                    <a
                      href={pageNumber >= 0 ? `?page=${pageNumber}` : ""}
                      aria-label={`Go to page ${pageNumber + 1}`}
                      className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 text-gray-500 leading-tight dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-400 hover:text-gray-700"
                    >
                      <span>{pageNumber + 1}</span>
                    </a>
                  </li>
                );
              },
            )}

            {/*Next Arrow*/}
            <li>
              <a
                href={page < pageCount - 1 ? `?page=${page + 1}` : ""}
                className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 text-gray-500 leading-tight dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-400 hover:text-gray-700"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-2.5 w-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
