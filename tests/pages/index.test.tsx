import { render, screen, fireEvent } from "../test-utils";

import HomePage from "@pages/index";

// Fix for error
jest.mock("next/link", () => ({ children }) => children);

describe("HomePage", () => {
  it("should be able to navagate to login", () => {
    render(<HomePage />);
    const login_link = screen.getByText(/log in/i);
    fireEvent.click(login_link);

    const login_text = screen.getByText(/log in/i);
    expect(login_text).toBeInTheDocument();
  });

  it("should be able to navagate to signup", () => {
    render(<HomePage />);
    const login_link = screen.getByText(/sign up/i);
    fireEvent.click(login_link);

    const login_text = screen.getByText(/sign up/i);
    expect(login_text).toBeInTheDocument();
  });
});
