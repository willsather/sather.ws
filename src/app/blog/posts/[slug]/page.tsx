import { BlogPostFrontmatter, loadMdxFromSlug } from "@/lib/blog/utils";
import Post from "@/src/app/blog/posts/[slug]/post";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { content, data } = await loadMdxFromSlug(params?.slug);
  const frontMatter = data as BlogPostFrontmatter;

  if (frontMatter.draft) {
    notFound();
  }

  return <Post frontMatter={frontMatter} content={content} />;
}
