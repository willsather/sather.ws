import { findAllPostSlugs, loadMdxFromSlug } from "@/lib/blog/utils";
import { BlogFrontMatter } from "@/src/types/blogFrontMatter";

export default async function getAllTags() {
  const allSlugs = await findAllPostSlugs();
  const allSources = await Promise.all(
    allSlugs.map(async (slug: string) => {
      const source = await loadMdxFromSlug(slug);
      return { slug, source };
    })
  );

  const posts = allSources
    .map(({ slug, source }) => {
      return { slug, data: source.data as BlogFrontMatter };
    })
    .filter(({ data: { draft } }) => !draft);

  return Array.from(new Set(posts.map(({ data: { tags } }) => tags).flat()));
}
