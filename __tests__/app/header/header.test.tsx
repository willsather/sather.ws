import { render, screen } from "@testing-library/react";
import Header from "@/app/(header)/header";

describe("Header", () => {
  beforeEach(async () => {
    render(<Header />);
  });

  it("should render header", () => {
    expect(screen.getByRole("img", { name: "Will Sather" })).toBeInTheDocument();

    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("experience")).toBeInTheDocument();
    expect(screen.getByText("blog")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
  });
});
