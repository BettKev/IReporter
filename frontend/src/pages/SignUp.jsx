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
    role: "user", // Default role
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
    <div className="container mx-auto p-5 flex justify-center items-center h-screen">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-center text-2xl font-bold text-primary mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={formData.firstName} 
            onChange={handleChange} 
            className="form-control p-2 border rounded w-full" 
            required 
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={formData.lastName} 
            onChange={handleChange} 
            className="form-control p-2 border rounded w-full" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="form-control p-2 border rounded w-full" 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            className="form-control p-2 border rounded w-full" 
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
            className="form-control p-2 border rounded w-full" 
            required 
          />
         
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            className="form-control p-2 border rounded w-full">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="btn btn-primary w-full p-2 rounded">Sign Up</button>
        </form>

        <p className="text-center mt-3">Or sign up with:</p>
        <div className="d-flex justify-content-center gap-3">
          <button onClick={signInWithGoogle} className="btn btn-danger w-full">Sign in with Google</button>
          <button onClick={signInWithGithub} className="btn btn-dark w-full">Sign in with GitHub</button>
        </div>
        <p className="text-center mt-3">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
}
