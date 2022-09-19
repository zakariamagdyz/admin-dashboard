import { screen, render } from "@testing-library/react";

import SideBar from "../SideBar/SideBar";

describe("SideBar", () => {
  it("should render sidebar Logo", () => {
    render(<SideBar />);

    expect(screen.getByText(/admin/i)).toBeInTheDocument();
  });

  it("Should render all categories", () => {
    render(<SideBar />);
    expect(screen.getByText(/main/i)).toBeInTheDocument();
    expect(screen.getByText(/lists/i)).toBeInTheDocument();
    expect(screen.getByText(/usefull/i)).toBeInTheDocument();
    expect(screen.getByText(/services/i)).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();
  });
});
