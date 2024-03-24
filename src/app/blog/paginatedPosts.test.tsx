import { render, screen } from "@testing-library/react";
import PaginatedPosts from "./paginatedPosts";
import { Post } from "@/src/types/post";

describe("PaginatedPosts", () => {
  const mockPost: Post = {
    slug: "fake-slug",
    data: {
      title: "Fake Article",
      date: new Date(),
      tags: [],
      summary: "Fake Article Summary",
      draft: false,
    },
  };

  const mockPost1: Post = {
    slug: "fake-slug-1",
    data: {
      title: "Fake Article 1",
      date: new Date(),
      tags: [],
      summary: "Fake Article Summary 1",
      draft: false,
    },
  };

  const mockPost2: Post = {
    slug: "fake-slug-2",
    data: {
      title: "Fake Article 2",
      date: new Date(),
      tags: [],
      summary: "Fake Article Summary 2",
      draft: false,
    },
  };

  const mockPost3: Post = {
    slug: "fake-slug-3",
    data: {
      title: "Fake Article 3",
      date: new Date(),
      tags: [],
      summary: "Fake Article Summary 3",
      draft: false,
    },
  };

  const mockPosts: Post[] = [mockPost, mockPost1, mockPost2, mockPost3];

  it("renders", () => {
    render(<PaginatedPosts posts={mockPosts} page={0} />);

    expect(screen.getAllByText(mockPost.data.title)[0]).toBeInTheDocument();
    expect(screen.getAllByText(mockPost.data.summary)[0]).toBeInTheDocument();

    expect(screen.getAllByText(mockPost1.data.title)[0]).toBeInTheDocument();
    expect(screen.getAllByText(mockPost1.data.summary)[0]).toBeInTheDocument();

    expect(screen.getAllByText(mockPost2.data.title)[0]).toBeInTheDocument();
    expect(screen.getAllByText(mockPost2.data.summary)[0]).toBeInTheDocument();

    expect(screen.queryByText(mockPost3.data.title)).not.toBeInTheDocument();
    expect(screen.queryByText(mockPost3.data.summary)).not.toBeInTheDocument();
  });
});
