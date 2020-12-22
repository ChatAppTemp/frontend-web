import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import Routes from "../components/Routes";

test("redirect from landing page to log in", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Routes />
    </Router>
  );

  expect(history.location.pathname).toBe("/");

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/log in/i), leftClick);

  expect(screen.getByText(/log in/i)).toBeInTheDocument();

  expect(history.location.pathname).toBe("/login");
});

test("redirect from landing page to sign up", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Routes />
    </Router>
  );

  expect(history.location.pathname).toBe("/");

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/sign up/i), leftClick);

  expect(screen.getByText(/sign up/i)).toBeInTheDocument();

  expect(history.location.pathname).toBe("/signup");
});

test("bad url", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Routes />
    </Router>
  );
  history.push("/this_will_not_exist");
  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});

test("manual enter url log in", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Routes />
    </Router>
  );

  history.push("/login");
  expect(screen.getByText(/log in/i)).toBeInTheDocument();
});

test("manual enter url sign up", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Routes />
    </Router>
  );

  history.push("/signup");
  expect(screen.getByText(/sign up/i)).toBeInTheDocument();
});
