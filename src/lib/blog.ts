import type { Metadata } from "next";

import { posts } from "@/lib/posts";

export type Post = {
  slug: string;
  title: string;
  date: Date;
  tags: string[];
  draft?: boolean;
  summary: string;
};

export function getPost(slug: string): Post {
  const data = posts.find((post) => post.slug === slug);

  if (data == null) {
    throw new Error(`Unable to find post: ${slug}`);
  }

  return data;
}

export function getAllPosts(): Post[] {
  return posts.slice().sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getAllTags(): string[] {
  const tags = posts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
}

export function getPostsDataByTag(tag: string): Post[] {
  return posts.filter((post) => post.tags.includes(tag.toLowerCase()));
}

export function getPostMetadata(slug: string): Metadata {
  const post = getPost(slug);

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      url: `/blog/posts/${post.slug}`,
      images: [`/og/${post.slug}`],
    },
    twitter: {
      images: [`/og/${post.slug}`],
    },
    alternates: {
      canonical: `/blog/posts/${post.slug}`,
    },
  };
}
