import { render, screen } from "@testing-library/react";

import Tag from "./tag";

describe("Tag", () => {
  it("renders", () => {
    render(<Tag tag="TAG" />);

    expect(screen.getByText("TAG")).toBeInTheDocument();
  });

  it("routes to tag page", () => {
    render(<Tag tag="TAG" />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/blog/tags/tag");
  });
});
