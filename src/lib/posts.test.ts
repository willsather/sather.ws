import { posts } from "./posts";

it("features Supabase Select as a talk linking to YouTube", () => {
  const post = posts.find((post) => post.slug === "supabase-select");

  expect(post).toMatchObject({
    title: "Supabase Select",
    tags: ["talks"],
    summary: "Agentic engineering: Lessons from the field",
    external: "https://www.youtube.com/watch?v=avwWS9nwMNg",
    featured: true,
  });
});
