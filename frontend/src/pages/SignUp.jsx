import React, { useState } from "react";
import { signInWithGoogle, signInWithGithub } from "../firebase-config";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="Register-form font-[sans-serif] max-w-4xl flex items-center mx-auto p-4 mt-15">
      <div className="grid md:grid-cols-3 gap-6 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl ">
        <div className="Register-form-text max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full b lg:px-8 px-4 py-4">
          <div>
            <h4 className="text-lg">Create Your Account</h4>
            <p className="text-[14px] mt-3 leading-relaxed">
              Welcome to our registration page! Get started by creating your account.
            </p>
          </div>
          <div>
            <h4 className="text-lg">Simple & Secure Registration</h4>
            <p className="text-[14px] mt-3 leading-relaxed">
              Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto"
        >
          <div className="mb-6">
            <h3 className="text-gray-800 text-xl font-bold">Create an account</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-gray-600 text-sm mb-2 block">First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter first name"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-2 block">Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter last name"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-2 block">Phone</label>
              <input
                type="number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-2 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-2 block">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label className="text-gray-600 text-sm mb-2 block">Repeat Password</label>
              <input
                type="password"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-black bg-[#d0f500d7]  hover:bg-purple-700 focus:outline-none"
            >
              Create an account
            </button>
          </div>

          {/* Sign in with Google and GitHub buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={signInWithGoogle}
              className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md flex items-center justify-center space-x-3"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_%22G%22_Logo.svg"
                alt="Google logo"
                className="h-5 w-5"
              />
              <span>Sign in with Google</span>
            </button>

            <button
              onClick={signInWithGithub}
              className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-md flex items-center justify-center space-x-3"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub logo"
                className="h-5 w-5"
              />
              <span>Sign in with GitHub</span>
            </button>
          </div>

          <p className="text-black text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline ml-1">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
