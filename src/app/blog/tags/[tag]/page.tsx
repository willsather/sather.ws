import PaginatedPosts from "@/src/app/blog/paginatedPosts";
import { Metadata } from "next";
import tagsMetadata from "@/src/metadata/tags";
import { getTagPosts } from "@/lib/blog/tags";

export function generateMetadata({
  params: { tag },
}: {
  params: { tag: string };
}) {
  return {
    title: tag.charAt(0).toUpperCase() + tag.slice(1),
    description: tagsMetadata.description,
  } as Metadata;
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const posts = await getTagPosts(params?.tag);

  return (
    <div className="bg-secondary">
      <div className="flex justify-center mt-10">
        <h1>{params?.tag.toUpperCase()}</h1>
      </div>

      <div className="flex justify-center mt-5">
        <h2>a category i wrote about.</h2>
      </div>

      <hr className="my-6" />

      <PaginatedPosts posts={posts} />
    </div>
  );
}
