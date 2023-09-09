import { BlogFrontMatter } from "@/src/types/blogFrontMatter";

export type Post = {
  slug: string;
  data: BlogFrontMatter;
};
