import { getAllPosts } from "@/lib/blog";

export default async function sitemap() {
  const posts = getAllPosts();

  const blogPages = posts
    .filter((post) => !post.external)
    .map((post) => ({
      url: `https://www.sather.ws/thoughts/${post.slug}`,
      lastModified: post.date,
    }));

  return [
    {
      url: "https://www.sather.ws",
      lastModified: new Date(),
    },
    {
      url: "https://www.sather.ws/thoughts",
      lastModified: new Date(),
    },
    ...blogPages,
  ];
}
