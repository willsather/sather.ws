import RSS from "rss";

import { getAllPosts } from "@/lib/blog";
import description from "@/metadata/description";

export async function GET() {
  const feed = new RSS({
    title: "Will Sather",
    description,
    generator: "Next.js",
    feed_url: "https://www.sather.ws/blog/rss.xml",
    site_url: "https://www.sather.ws/blog",
    copyright: `Copyright ${new Date().getFullYear().toString()}, Will Sather`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const allPostData = getAllPosts();

  for (const postData of allPostData) {
    feed.item({
      title: postData.title,
      description: postData.summary,
      url: `https://www.sather.ws/blog/posts/${postData.slug}`,
      categories: postData.tags,
      author: "Will Sather",
      date: postData.date,
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
