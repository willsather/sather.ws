"use client";

import PostListItem from "@/src/app/blog/postListItem";
import { Post } from "@/src/types/post";

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
      <div className="flex flex-row justify-center mt-4">
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

      <div className="flex flex-row justify-center mt-12">
        <nav aria-label="Blog Pagination">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            {/*Previous Arrow*/}
            <li>
              <a
                href={page > 0 ? `?page=${page - 1}` : ""}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
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
              (pageNumber: number) => (
                <li key={pageNumber}>
                  <a
                    href={pageNumber >= 0 ? `?page=${pageNumber}` : ""}
                    aria-label={`Go to page ${pageNumber + 1}`}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className={pageNumber === page ? "font-bold" : ""}>
                      {pageNumber + 1}
                    </span>
                  </a>
                </li>
              )
            )}

            {/*Next Arrow*/}
            <li>
              <a
                href={page < pageCount - 1 ? `?page=${page + 1}` : ""}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
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
