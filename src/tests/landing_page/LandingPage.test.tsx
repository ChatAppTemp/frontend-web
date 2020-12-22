import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import LandingPage from "../../components/landing_page/LandingPage";

test("renders landing page", () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );
  const title = screen.getByText(/chat app/i);
  expect(title).toBeInTheDocument();
});
