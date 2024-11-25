export type Post = {
  slug: string;
  content: string;
  data: BlogFrontMatter;
};

export type BlogFrontMatter = {
  title: string;
  date: Date;
  tags: string[];
  draft: boolean;
  summary: string;
};
