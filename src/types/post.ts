export type Post = {
  slug: string;
  title: string;
  date: Date;
  tags: string[];
  draft?: boolean;
  summary: string;
};
