import { findAllPostSlugs, loadMdxFromSlug } from "@/lib/blog/utils";
import type { BlogFrontMatter } from "@/types/blogFrontMatter";
import type { Post } from "@/types/post";

export async function getAllPosts(): Promise<Post[]> {
  const allSlugs = await findAllPostSlugs();

  const allSources = await Promise.all(
    allSlugs.map(async (slug: string) => {
      const source = await loadMdxFromSlug(slug);
      return { slug, source };
    }),
  );

  const posts = allSources
    .map(({ slug, source }) => {
      return { slug, data: source.data } as Post;
    })
    .filter(({ data: { draft } }) => !draft);

  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}

export async function getPost(slug: string) {
  const { content, data } = await loadMdxFromSlug(slug);
  const frontMatter = data as BlogFrontMatter;

  return {
    content,
    frontMatter,
  };
}
