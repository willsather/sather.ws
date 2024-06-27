import { getAllPosts } from "@/lib/blog/posts";

export async function getAllTags() {
  const allPosts = await getAllPosts();

  return Array.from(new Set(allPosts.flatMap(({ data: { tags } }) => tags)));
}

export async function getTagPosts(tag: string) {
  const allPosts = await getAllPosts();

  return allPosts.filter(({ data: { tags } }) =>
    tags.map((t) => t.toLowerCase()).includes(tag),
  );
}
