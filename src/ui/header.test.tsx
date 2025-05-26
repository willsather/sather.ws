import { render, screen } from "@testing-library/react";

import Header from "@/ui/header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render header", () => {
    expect(
      screen.getByRole("graphics-symbol", { name: "Will Sather" }),
    ).toBeInTheDocument();

    expect(screen.getAllByText("home")[0]).toBeInTheDocument();
    expect(screen.getAllByText("work")[0]).toBeInTheDocument();
    expect(screen.getAllByText("posts")[0]).toBeInTheDocument();
    expect(screen.getAllByText("about")[0]).toBeInTheDocument();
  });
});
