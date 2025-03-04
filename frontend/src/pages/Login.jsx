import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const { login, forgotPassword, google_login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  
  const navigate = useNavigate();

  // Handle login
  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  // Handle Google login
  const handleGoogleLogin = (credential) => {
    const user = jwtDecode(credential);
    console.log("Test ", user);

    google_login(user.email); // Calls the main google_login function in the frontend
  };

  // Handle forgot password submission
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    forgotPassword(email);
  };

  // If we're on the "forgot password" form, don't show the login form
  if (showForgotPassword) {
    return (
      <div className="font-[sans-serif] max-sm:px-4 mt-20 bg-[#05051e] rounded-4xl border-2 border-pink-200">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl border-2 border-white ">
            <div className="md:max-w-md w-full px-4 py-4 ">
              <form onSubmit={handleForgotPasswordSubmit}>
                <div className="mb-12">
                  <h3 className="text-white text-3xl font-extrabold">Forgot Password</h3>
                  <p className="text-sm mt-4 text-white">
                    Enter your email to receive a password reset link
                  </p>
                </div>

                <div>
                  <label className="text-white text-ls block mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-white text-sm border-b border-gray-300 focus:border-blue-600 pl-2 py-3 outline-none placeholder-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mt-12">
                  <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-gray-700 hover:bg-white hover:text-black focus:outline-none"
                  >
                    Send Reset Link
                  </button>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setShowForgotPassword(false)} // Go back to login form
                    className="w-full text-sm text-blue-600 hover:underline"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-[sans-serif] max-sm:px-4 mt-20 bg-[#05051e] rounded-4xl border-2 border-pink-200">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl border-2 border-white ">
          <div className="md:max-w-md w-full px-4 py-4 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-white text-3xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4 text-white">
                  Don't have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="text-pink-300 hover:text-white font-semibold ml-2 whitespace-nowrap"
                  >
                    Register here
                  </Link>
                </p>
              </div>

              <div>
                <label className="text-white text-ls block mb-2">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-white text-sm border-b border-gray-300 focus:border-blue-600 pl-2 py-3 outline-none placeholder-white"
                  placeholder="Enter email"
                />
              </div>

              <div className="mt-8">
                <label className="text-white text-ls block mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full text-white text-sm border-b border-gray-300 focus:border-blue-600 pl-2 py-3 outline-none placeholder-white"
                  placeholder="Enter password"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div>
                  <button
                    onClick={() => setShowForgotPassword(true)} // Show forgot password form
                    className="text-blue-600 font-semibold text-sm hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>

              <div className="mt-12">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-gray-700 hover:bg-white hover:text-black focus:outline-none"
                >
                  Sign in
                </button>
              </div>

              <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-white text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              <div className="space-x-6 flex justify-center">
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    handleGoogleLogin(credentialResponse.credential);
                  }}
                  onError={() => {
                    console.log("Google Login Failed");
                  }}
                />
              </div>
            </form>
          </div>

          <div className="w-full h-full flex items-center bg-[#a66cff;] rounded-xl p-8">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="w-full aspect-[12/12] object-contain"
              alt="login-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
