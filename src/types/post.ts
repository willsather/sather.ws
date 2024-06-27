import type { BlogFrontMatter } from "@/types/blogFrontMatter";

export type Post = {
  slug: string;
  data: BlogFrontMatter;
};
