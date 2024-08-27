import { getAllPosts, getAllTags } from "@/lib/blog";

export default async function sitemap() {
  const posts = await getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `https://www.sather.ws/blog/posts/${post.slug}`,
    lastModified: post.data.date,
  }));

  const tags = await getAllTags();
  const tagPages = tags.map((tag) => ({
    url: `https://www.sather.ws/blog/tags/${tag.toLowerCase()}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://www.sather.ws",
      lastModified: new Date(),
    },
    {
      url: "https://www.sather.ws/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.sather.ws/experience",
      lastModified: new Date(),
    },
    {
      url: "https://www.sather.ws/blog",
      lastModified: new Date(),
    },
    {
      url: "https://www.sather.ws/blog/tags",
      lastModified: new Date(),
    },
    ...blogPages,
    ...tagPages,
  ];
}
