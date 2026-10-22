import { render, screen, within } from "@testing-library/react";
import ThoughtsPage from "./page";

it("shows the talk's description and muted tags beside its date", () => {
  render(<ThoughtsPage />);

  expect(
    screen.getByRole("heading", { name: "thoughts", level: 1 }),
  ).not.toBeNull();
  expect(
    screen.getByText("all my random thoughts, talks, posts, and more"),
  ).not.toBeNull();

  const link = screen.getByRole("link", { name: /Supabase Select/ });
  expect(link.getAttribute("href")).toBe(
    "https://www.youtube.com/watch?v=avwWS9nwMNg",
  );

  const card = link.closest(".border-b");
  expect(card).not.toBeNull();
  const tag = within(card as HTMLElement).getByText("#talks");
  expect(tag.classList.contains("text-muted")).toBe(true);
  const date = tag.parentElement?.querySelector("time");
  expect(date?.getAttribute("dateTime")).toBe("2026-10-22T12:00:00.000Z");
  expect(date?.classList.contains("text-muted")).toBe(true);
  expect(
    within(card as HTMLElement).getByText(
      "Agentic engineering: Lessons from the field",
    ),
  ).not.toBeNull();
  expect(within(card as HTMLElement).queryByText(/on YouTube/)).toBeNull();
});
