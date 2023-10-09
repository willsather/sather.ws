import ExternalLink from "@/src/components/shared/link";
import { render, screen } from "@testing-library/react";

describe("link", () => {
  const mockHref = "https://fakeUrl.com";
  const mockText = "fake link";

  beforeEach(() => {
    render(<ExternalLink href={mockHref} text={mockText} />);
  });

  it("renders", async () => {
    expect(screen.getByText(mockText)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: mockText })).toBeInTheDocument();
  });
});
