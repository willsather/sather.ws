import { render, screen } from "@testing-library/react";
import Home from "@/src/app/about/page";

describe("About", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("should render", () => {
    expect(screen.getByRole("img", { name: "About" })).toBeInTheDocument();

    expect(screen.getByText("hi, i'm will")).toBeInTheDocument();
  });
});
