import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import SignUp from "../SignUp";

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
    fireEvent.change(screen.getByPlaceholderText("Enter password"), { target: { value: "password123" } });
    fireEvent.change(screen.getAllByPlaceholderText("Enter password")[1], { target: { value: "password123" } });
    
    expect(screen.getByDisplayValue("John")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Doe")).toBeInTheDocument();
    expect(screen.getByDisplayValue("123456789")).toBeInTheDocument();
    expect(screen.getByDisplayValue("john@example.com")).toBeInTheDocument();
    expect(screen.getByDisplayValue("password123")).toBeInTheDocument();
  });

  test("shows an alert when passwords do not match", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    
    fireEvent.change(screen.getByPlaceholderText("Enter password"), { target: { value: "password123" } });
    fireEvent.change(screen.getAllByPlaceholderText("Enter password")[1], { target: { value: "wrongpassword" } });
    fireEvent.click(screen.getByRole("button", { name: /Create an account/i }));
    
    expect(window.alert).toHaveBeenCalledWith("Password doesn't match");
  });

  test("submits form and navigates to login page when passwords match", () => {
    fireEvent.change(screen.getByPlaceholderText("Enter first name"), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText("Enter last name"), { target: { value: "Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Enter phone number"), { target: { value: "123456789" } });
    fireEvent.change(screen.getByPlaceholderText("Enter email"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Enter password"), { target: { value: "password123" } });
    fireEvent.change(screen.getAllByPlaceholderText("Enter password")[1], { target: { value: "password123" } });
    
    fireEvent.click(screen.getByRole("button", { name: /Create an account/i }));
    
    expect(mockAddUser).toHaveBeenCalledWith("John", "Doe", "123456789", "john@example.com", "password123");
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});