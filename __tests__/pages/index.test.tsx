import { render, screen } from "@testing-library/react";
import Home from "../../app/page";

jest.mock("next/router", () => require("next-router-mock"));

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders", () => {
    expect(screen.getByText(/NextJs Starter for Typescript/i)).toBeInTheDocument();
    expect(screen.getByText(/Includes React\/Eslint\/Prettier\/React Testing Library/i)).toBeInTheDocument();
  });
});
