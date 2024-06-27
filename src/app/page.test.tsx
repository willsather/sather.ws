import { render, screen } from "@testing-library/react";

import Home from "@/src/app/page";

// mock particle engine in jest
jest.mock("@/src/app/(layout)/particles", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(null),
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
