import { getAllPosts, getAllTags } from "@/lib/blog";

export default async function sitemap() {
  const posts = getAllPosts();

  const blogPages = posts.map((post) => ({
    url: `https://www.sather.ws/writing/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    {
      url: "https://www.sather.ws",
      lastModified: new Date(),
    },
    {
      url: "https://www.sather.ws/archive",
      lastModified: new Date(),
    },
    ...blogPages,
  ];
}
