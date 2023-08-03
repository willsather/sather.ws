import { render, screen } from "@testing-library/react";
import SocialLinks from "@/app/(home)/socialLinks";

describe("SocialLinks", () => {
  beforeEach(async () => {
    render(<SocialLinks />);
  });

  it("should render", () => {
    expect(screen.getByRole("link", { name: "instagram" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "linkedin" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "github" })).toBeInTheDocument();
  });

  it("should link to respective sites", () => {
    expect(screen.getByRole("link", { name: "instagram" })).toHaveAttribute(
      "href",
      "https://www.instagram.com/will.sather/"
    );
    expect(screen.getByRole("link", { name: "linkedin" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/willsather"
    );
    expect(screen.getByRole("link", { name: "github" })).toHaveAttribute(
      "href",
      "https://github.com/willsather/Will-Sather"
    );
  });
});
