import { render, screen } from "@testing-library/react";

import Link from "@/app/experience/link";

describe("link", () => {
  const mockHref = "https://fakeUrl.com";
  const mockText = "fake link";

  beforeEach(() => {
    render(<Link href={mockHref} text={mockText} />);
  });

  it("renders", async () => {
    expect(screen.getByText(mockText)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: mockText })).toBeInTheDocument();
  });
});
