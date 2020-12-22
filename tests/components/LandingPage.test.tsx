import React from "react";
import { render, screen } from "../test-utils";

import LandingPage from "@components/landing_page/LandingPage";

describe("LandingPage", () => {
  it("should render heading", () => {
    render(<LandingPage />);
    const title = screen.getByText(/chat app/i);
    expect(title).toBeInTheDocument();
  });
  it("should have links", () => {
    render(<LandingPage />);
    const signup = screen.getByText(/sign up/i);
    expect(signup).toBeInTheDocument();
    const login = screen.getByText(/log in/i);
    expect(login).toBeInTheDocument();
  });
});
