import React,{useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
// import { toast } from 'react-toastify';

export default function SignUp() {

  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Handle submit with data validation and integrity
  function handleSubmit(e) {
    e.preventDefault();

    // Trim inputs
    const cleanFirstName = first_name.trim();
    const cleanLastName = last_name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();
    const cleanRepeatPassword = repeatPassword.trim();

    const newErrors =[];

    // Name validation (only letters, between 2-50 characters)
    const nameRegex = /^[a-zA-Z]{2,50}$/;
    if (!nameRegex.test(cleanFirstName) || !nameRegex.test(cleanLastName)) {
        newErrors.push("Names must only contain letters and be between 2 and 50 characters.");
    }

    // Phone validation (only digits, 10-15 characters)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(cleanPhone)) {
        newErrors.push("Phone number must contain only digits and be between 10 and 15 characters.");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
        newErrors.push("Please enter a valid email address.");
    }

    // Password validation (min 8 chars, uppercase, lowercase, number, special char)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(cleanPassword)) {
        newErrors.push("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
    }

    // Confirm password match
    if (cleanPassword !== cleanRepeatPassword) {
        newErrors.push("Passwords don't match.");
    }

    if (newErrors.length > 0){
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    // If all checks pass, proceed with user creation
    addUser(cleanFirstName, cleanLastName, cleanPhone, cleanEmail, cleanPassword);
}


const google_signup = (credential)=>{
  const user= jwtDecode(credential)
  console.log("Test ",user);

  addUser(user.family_name, user.given_name, phone, user.email, password, user.picture, "google.com");
}

  return (
    <div className="Register-form font-[sans-serif] max-w-4xl flex items-center mx-auto p-4 mt-15 bg-gray-900 rounded-4xl border-2 border-pink-200">
      <div className="grid md:grid-cols-3 gap-6 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl border-2 border-white">
        <div className="Register-form-text max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full lg:px-8 px-4 py-4 text-amber-50 -mt-35">
          <div>
            <h4 className="text-lg mr-2">Create Your Account</h4>
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

        <form onSubmit={handleSubmit} className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
          <div className="mb-6">
            <h3 className="text-white text-xl font-bold">
              Create an account
            </h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-white text-sm mb-2 block ">First Name</label>
              <div className="relative flex items-center ">
                <input
                  type="text"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="text-white bg-transparent border-2 border-white w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-300  placeholder-white"
                  placeholder="Enter first name"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">Last Name</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="text-white bg-transparent border-2 border-white w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-300 placeholder-white"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">Phone</label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="text-white bg-transparent border-2 border-white w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-300 placeholder-white"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-white bg-transparent border-2 border-white w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-300 placeholder-white"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-white bg-transparent border-2 border-white w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-300 placeholder-white"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">Repeat Password</label>
              <div className="relative flex items-center">
                <input
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  required
                  className="text-white bg-transparent border-2 border-white w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-300 placeholder-white"
                  placeholder="Confirm password"
                />
              </div>
            </div>

          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-[#000] hover:bg-white hover:text-black focus:outline-none"
            >
              Create an account
            </button>
          </div>
           {errors.length > 0 && (
            <div className="error-messages text-red-500 mt-4">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-white text-center">or</p>
                <hr className="w-full border-gray-300" />
          </div>

          <div className="flex justify-center gap-4 mt-6">
          
          <GoogleLogin
            onSuccess={credentialResponse => {
              google_signup( credentialResponse.credential )
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
       
          </div>

          <p className="text-white text-sm mt-6 text-center">
            Already have an account?{" "}
            
            <Link
              to="/login"
              className="text-pink-300 hover:text-white font-semibold ml-2"
            >
              {" "}Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}