import { render, screen } from "@testing-library/react";
import Blog from "@/src/app/blog/page";

describe("Blog", () => {
  beforeEach(() => {
    render(<Blog />);
  });

  it("should render", () => {
    expect(screen.getByRole("img", { name: "About" })).toBeInTheDocument();

    expect(screen.getByText("hi, i'm will")).toBeInTheDocument();
  });
});
