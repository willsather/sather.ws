import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

// mock particle engine
vi.mock("@/app/(layout)/particles", () => ({
  default: vi.fn().mockReturnValue(null),
}));

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("should render", () => {
    expect(screen.getByText("WILL SATHER")).toBeInTheDocument();
    expect(screen.getByText("livin' the dream.")).toBeInTheDocument();
  });
});
