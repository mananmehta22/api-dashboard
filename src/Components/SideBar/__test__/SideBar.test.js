import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";
import SideBar from "../SideBar";

test("shows the NavBar", () => {
  render(<SideBar />);
  expect(screen.getByText(/Menu/)).toBeInTheDocument;
});
