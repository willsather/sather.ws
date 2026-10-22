import { render, screen } from "@testing-library/react";
import PreBlock from "./pre";

it("keeps code blocks and language badges translucent", () => {
  const { container } = render(
    <PreBlock title='"example.ts"'>
      <code className="language-typescript">const answer = 42;</code>
    </PreBlock>,
  );

  const block = container.firstElementChild;
  const badge = screen.getByText("typescript");
  const title = screen.getByText("example.ts").parentElement;

  for (const element of [block, badge]) {
    expect(element?.classList.contains("bg-neutral-500/10")).toBe(true);
    expect(element?.classList.contains("border-neutral-500/30")).toBe(true);
    expect(element?.classList.contains("bg-muted")).toBe(false);
  }

  expect(title?.classList.contains("border-neutral-500/30")).toBe(true);
  expect(screen.getByText("example.ts").classList.contains("font-mono")).toBe(
    true,
  );
  expect(screen.getByText("const answer = 42;").closest("pre")).not.toBeNull();
});
