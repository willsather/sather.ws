import { render, screen } from "@testing-library/react";
import Home from "@/src/app/(home)/page";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("should render", () => {
    expect(screen.getByText("WILL SATHER")).toBeInTheDocument();
    expect(screen.getByText("livin' the dream.")).toBeInTheDocument();
  });
});
