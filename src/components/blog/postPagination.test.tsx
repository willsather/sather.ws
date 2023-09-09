import { render, screen } from "@testing-library/react";
import PostPagination from "./postPagination";
import { Post } from "@/src/types/post";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme/theme";
import userEvent from "@testing-library/user-event";

describe("PostPagination", () => {
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
    render(
      <ThemeProvider theme={theme}>
        <PostPagination posts={mockPosts} />
      </ThemeProvider>
    );

    expect(screen.getByText(mockPost.data.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.data.summary)).toBeInTheDocument();

    expect(screen.getByText(mockPost1.data.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost1.data.summary)).toBeInTheDocument();

    expect(screen.getByText(mockPost2.data.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost2.data.summary)).toBeInTheDocument();

    expect(screen.queryByText(mockPost3.data.title)).not.toBeInTheDocument();
    expect(screen.queryByText(mockPost3.data.summary)).not.toBeInTheDocument();
  });

  it("can navigate to next page", async () => {
    render(
      <ThemeProvider theme={theme}>
        <PostPagination posts={mockPosts} />
      </ThemeProvider>
    );

    expect(screen.queryByText(mockPost3.data.title)).not.toBeInTheDocument();
    expect(screen.queryByText(mockPost3.data.summary)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Go to page 2" }));

    expect(screen.getByText(mockPost3.data.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost3.data.summary)).toBeInTheDocument();
  });
});
