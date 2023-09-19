import { render, screen } from "@testing-library/react";
import About from "@/src/app/about/page";

describe("About", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("should render", () => {
    expect(screen.getByRole("img", { name: "About | Will Sather" })).toBeInTheDocument();

    expect(screen.getByText("hi, i'm will.")).toBeInTheDocument();
  });
});
