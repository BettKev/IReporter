import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container mx-auto p-5 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-center text-2xl font-bold text-primary mb-4">Login</h2>
        <form className="space-y-3">
          <input 
            type="email" 
            placeholder="Email" 
            required 
            className="form-control p-2 border rounded w-full" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            className="form-control p-2 border rounded w-full" 
          />
          <button type="submit" className="btn btn-primary w-full p-2 rounded">Login</button>
        </form>
        
        <p className="text-center mt-3">Or login with:</p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-danger w-full">Google</button>
          <button className="btn btn-dark w-full">GitHub</button>
          <button className="btn btn-primary w-full">Facebook</button>
        </div>
        
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
