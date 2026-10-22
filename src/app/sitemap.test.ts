import sitemap from "./sitemap";

vi.mock("@/lib/blog", () => ({
  getAllPosts: () => [
    { slug: "hello-world", date: new Date("2023-01-01T12:00:00Z") },
    {
      slug: "supabase-select",
      date: new Date("2026-10-22T12:00:00Z"),
      external: "https://www.youtube.com/watch?v=avwWS9nwMNg",
    },
  ],
}));

it("lists thoughts routes without nonexistent local pages for external posts", async () => {
  const entries = await sitemap();

  expect(entries.map((entry) => entry.url)).toEqual([
    "https://www.sather.ws",
    "https://www.sather.ws/thoughts",
    "https://www.sather.ws/thoughts/hello-world",
  ]);
});
