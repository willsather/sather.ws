import { render, screen } from "@testing-library/react";

import Experience from "@/app/experience/page";

describe("Experience", () => {
  beforeEach(() => {
    render(<Experience />);
  });

  it("should render", () => {
    expect(screen.getByText("VMware Tanzu Labs.")).toBeInTheDocument();
    expect(screen.getByText("Ivanti.")).toBeInTheDocument();
    expect(screen.getByText("Dell Technologies.")).toBeInTheDocument();
    expect(screen.getByText("byt8.")).toBeInTheDocument();
  });
});
