import { GET } from "./route";

vi.mock("@/lib/blog", () => ({
  getAllPosts: () => [
    {
      slug: "hello-world",
      title: "Hello World",
      date: new Date("2023-01-01T12:00:00Z"),
      tags: [],
      summary: "A first post.",
    },
    {
      slug: "supabase-select",
      title: "Supabase Select",
      date: new Date("2026-10-22T12:00:00Z"),
      tags: ["talks"],
      summary: "Supabase Select on YouTube.",
      external: "https://www.youtube.com/watch?v=avwWS9nwMNg",
    },
  ],
}));

describe("thoughts RSS", () => {
  it("uses thoughts URLs and preserves external destinations", async () => {
    const response = await GET();
    const feed = await response.text();

    expect(response.headers.get("Content-Type")).toContain("application/xml");
    expect(feed).toContain('href="https://www.sather.ws/thoughts/rss.xml"');
    expect(feed).toContain("<link>https://www.sather.ws/thoughts</link>");
    expect(feed).toContain(
      "<link>https://www.sather.ws/thoughts/hello-world</link>",
    );
    expect(feed).toContain("https://www.youtube.com/watch?v=avwWS9nwMNg");
    expect(feed).not.toContain("/blog");
    expect(feed).not.toContain("/writing");
  });
});
