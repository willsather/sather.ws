import { render, screen } from "@testing-library/react";

import About from "@/app/about/page";

describe("About", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("should render", () => {
    expect(
      screen.getByRole("img", { name: "Will Sather" }),
    ).toBeInTheDocument();

    expect(screen.getByText("hi, i'm will.")).toBeInTheDocument();
  });
});
