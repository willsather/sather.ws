import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { UserEvent } from "@testing-library/user-event/setup/setup";

import Footer from "@/app/(footer)/footer";

describe("Footer", () => {
  let user: UserEvent;

  const mockSetShowParticles = vi.fn();

  beforeEach(() => {
    user = userEvent.setup();

    render(
      <Footer showParticles={true} setShowParticles={mockSetShowParticles} />
    );
  });

  it("should render", () => {
    expect(screen.getByRole("link", { name: "instagram" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "linkedin" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "github" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "vsco" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "rss" })).toBeInTheDocument();
  });

  it("should link to respective social sites", () => {
    expect(screen.getByRole("link", { name: "instagram" })).toHaveAttribute(
      "href",
      "https://www.instagram.com/will.sather"
    );
    expect(screen.getByRole("link", { name: "linkedin" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/willsather"
    );
    expect(screen.getByRole("link", { name: "github" })).toHaveAttribute(
      "href",
      "https://github.com/willsather"
    );
    expect(screen.getByRole("link", { name: "vsco" })).toHaveAttribute(
      "href",
      "https://vsco.co/willsather/gallery"
    );
    expect(screen.getByRole("link", { name: "rss" })).toHaveAttribute(
      "href",
      "/blog/rss.xml"
    );
  });

  it("should toggle particles", async () => {
    const particlesToggle = screen.getByRole("button", { name: "particles" });

    await user.click(particlesToggle);

    expect(mockSetShowParticles).toHaveBeenCalledTimes(1);
  });
});
