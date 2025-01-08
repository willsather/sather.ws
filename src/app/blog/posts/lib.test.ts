import type { Post } from "@/types/post";
import {
  getAllPosts,
  getAllTags,
  getPost,
  getPostMetadata,
  getPostsDataByTag,
} from "./lib";

vi.mock("./posts", () => ({
  posts: [
    {
      slug: "fake-slug",
      title: "Fake Title",
      date: new Date("2025-01-01T12:00:00Z"),
      tags: ["fake-tag"],
      summary: "A fake description of a fake blog post.",
    },
  ],
}));

describe("blog lib", () => {
  const mockPost: Post = {
    slug: "fake-slug",
    title: "Fake Title",
    date: new Date("2025-01-01T12:00:00Z"),
    tags: ["fake-tag"],
    summary: "A fake description of a fake blog post.",
  };

  describe("posts", () => {
    it("should return the correct post", () => {
      const post = getPost("fake-slug");

      expect(post).toEqual(mockPost);
    });

    it("should throw an error if not found", () => {
      expect(() => getPost("non-existent")).toThrow("Unable to find post");
    });

    it("should return all posts", () => {
      const posts = getAllPosts();

      expect(posts).toEqual([mockPost]);
    });
  });

  describe("tags", () => {
    it("should return a unique list of tags", () => {
      const tags = getAllTags();

      expect(tags).toEqual(["fake-tag"]);
    });

    it("should return posts matching the tag", () => {
      const posts = getPostsDataByTag("fake-tag");

      expect(posts).toEqual([mockPost]);
    });

    it("should return an empty array if no posts match the tag", () => {
      const posts = getPostsDataByTag("non-existent-tag");

      expect(posts).toEqual([]);
    });
  });

  describe("metadata", () => {
    it("should return correct metadata for a post", () => {
      const metadata = getPostMetadata("fake-slug");
      expect(metadata).toEqual({
        title: "Fake Title",
        description: "A fake description of a fake blog post.",
        openGraph: {
          title: "Fake Title",
          url: "/blog/posts/fake-slug",
          images: ["/og/fake-slug"],
        },
        twitter: {
          images: ["/og/fake-slug"],
        },
        alternates: {
          canonical: "/blog/posts/fake-slug",
        },
      });
    });

    it("should throw an error if post is not found", () => {
      expect(() => getPostMetadata("non-existent")).toThrow(
        "Unable to find post",
      );
    });
  });
});
