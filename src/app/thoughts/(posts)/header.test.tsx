import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostHeader from "./header";

const { back } = vi.hoisted(() => ({ back: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ back }),
  useSelectedLayoutSegments: () => ["(content)", "hello-world"],
  notFound: vi.fn(),
}));

beforeEach(() => {
  back.mockClear();
});

it.each(["click", "keyboard"])(
  "uses browser history when going back via %s",
  async (interaction) => {
    const user = userEvent.setup();
    render(
      <PostHeader
        posts={[
          {
            slug: "hello-world",
            title: "Hello World",
            date: new Date("2023-01-01T12:00:00Z"),
            tags: [],
            summary: "A first post.",
          },
        ]}
      />,
    );

    const button = screen.getByRole("button", { name: "← back" });
    expect(screen.queryByRole("link", { name: "← back" })).toBeNull();

    if (interaction === "click") {
      await user.click(button);
    } else {
      button.focus();
      await user.keyboard("{Enter}");
    }

    expect(back).toHaveBeenCalledTimes(1);
  },
);
