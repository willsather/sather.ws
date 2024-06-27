"use client";

import Link from "next/link";

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
        <div className="mb-6 flex flex-col border-3 border-secondary border-r-2">
          <Link
            href={`/blog/posts/${slug}`}
            className="text-primary no-underline"
          >
            <h3 className="text-xl">{title}</h3>

            <h5 className=" my-1 text-gray-500">
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
      <div className="mb-6 hidden border-3 border-secondary border-r-2 md:block">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center justify-center p-4">
            <h5 className="text-gray-500 text-lg">
              {date.toLocaleDateString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h5>
          </div>

          <div className="col-span-2 p-4">
            <Link
              href={`/blog/posts/${slug}`}
              className="text-primary no-underline"
            >
              <h3 className="text-left">{title}</h3>
              <p>{summary}</p>
              <p className="mt-2 text-gray-500">Read more →</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
