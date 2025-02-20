import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import SignUp from "../SignUp";
import React from "react";

// Mock functions
const mockAddUser = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("SignUp Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ addUser: mockAddUser }}>
          <SignUp />
        </UserContext.Provider>
      </MemoryRouter>
    );
  });

  test("renders the SignUp form", () => {
    expect(screen.getByText(/Create Your Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Simple & Secure Registration/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Create an account/i })).toBeInTheDocument();
  });

  test("allows user to fill the form", () => {
    fireEvent.change(screen.getByPlaceholderText("Enter first name"), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText("Enter last name"), { target: { value: "Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Enter phone number"), { target: { value: "123456789" } });
    fireEvent.change(screen.getByPlaceholderText("Enter email"), { target: { value: "john@example.com" } });

    // Select password fields correctly
    const passwordInputs = screen.getAllByPlaceholderText("Enter password");

    fireEvent.change(passwordInputs[0], { target: { value: "password123" } }); // Main password
    fireEvent.change(passwordInputs[1], { target: { value: "password123" } }); // Confirm password

    expect(screen.getByDisplayValue("John")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Doe")).toBeInTheDocument();
    expect(screen.getByDisplayValue("123456789")).toBeInTheDocument();
    expect(screen.getByDisplayValue("john@example.com")).toBeInTheDocument();

    // Fix: Use getAllByDisplayValue instead of getByDisplayValue
    const passwordValues = screen.getAllByDisplayValue("password123");
    expect(passwordValues.length).toBe(2); // Ensure both password fields have the correct value
});



test("shows an alert when passwords do not match", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    // Get both password fields
    const passwordInputs = screen.getAllByPlaceholderText("Enter password");
    expect(passwordInputs.length).toBe(2); // Ensure we found both inputs

    fireEvent.change(passwordInputs[0], { target: { value: "password123" } }); // Main password
    fireEvent.change(passwordInputs[1], { target: { value: "wrongpassword" } }); // Confirm password

    fireEvent.click(screen.getByRole("button", { name: /Create an account/i }));

    console.log(window.alert.mock.calls);

    await waitFor(() => expect(window.alert).toHaveBeenCalledWith("Password doesn't match"));
});


  test("submits form and navigates to login page when passwords match", async () => {
    fireEvent.change(screen.getByPlaceholderText("Enter first name"), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText("Enter last name"), { target: { value: "Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Enter phone number"), { target: { value: "123456789" } });
    fireEvent.change(screen.getByPlaceholderText("Enter email"), { target: { value: "john@example.com" } });

    fireEvent.change(screen.getByPlaceholderText("Enter password"), { target: { value: "password123" } });

    const passwordInputs = await screen.findAllByPlaceholderText("Enter password");
    expect(passwordInputs.length).toBe(2);

    fireEvent.change(passwordInputs[1], { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: /Create an account/i }));

    expect(mockAddUser).toHaveBeenCalledWith("John", "Doe", "123456789", "john@example.com", "password123");
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
