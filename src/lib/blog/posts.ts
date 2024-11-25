import { findAllPostSlugs, loadMdxFromSlug } from "@/lib/blog/utils";
import type { BlogFrontMatter, Post } from "@/types/post";

export async function getAllPosts(): Promise<Post[]> {
  // get all slugs
  const allSlugs = await findAllPostSlugs();

  // retrieve all posts
  const allPosts = await Promise.all(
    allSlugs.map(async (slug: string) => {
      const { content, data } = await loadMdxFromSlug(slug);
      return { slug, content, data: data as BlogFrontMatter };
    }),
  );

  // remove drafts and sort
  return allPosts
    .filter(({ data: { draft } }) => !draft)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );
}

export async function getPost(slug: string): Promise<Post> {
  const { content, data } = await loadMdxFromSlug(slug);
  const frontMatter = data as BlogFrontMatter;

  return {
    slug,
    content,
    data: frontMatter,
  };
}
