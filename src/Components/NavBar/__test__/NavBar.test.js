import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";

test("shows the NavBar", () => {
  render(<NavBar />);
  expect(screen.getByText(/SpaceX/)).toBeInTheDocument;
});
