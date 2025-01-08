import { getAllPosts, getAllTags } from "@/app/blog/posts/lib";

export default async function sitemap() {
  const posts = getAllPosts();

  const blogPages = posts.map((post) => ({
    url: `https://www.sather.ws/blog/posts/${post.slug}`,
    lastModified: post.date,
  }));

  const tags = getAllTags();
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
