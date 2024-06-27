import { render, screen } from "@testing-library/react";

import Header from "@/app/(header)/header";

describe("Header", () => {
  beforeEach(async () => {
    render(<Header />);
  });

  it("should render header", () => {
    expect(
      screen.getByRole("img", { name: "Will Sather" }),
    ).toBeInTheDocument();

    expect(screen.getAllByText("home")[0]).toBeInTheDocument();
    expect(screen.getAllByText("experience")[0]).toBeInTheDocument();
    expect(screen.getAllByText("blog")[0]).toBeInTheDocument();
    expect(screen.getAllByText("about")[0]).toBeInTheDocument();
  });
});
