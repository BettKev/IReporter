import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="Footer bg-dark rounded-lg shadow-sm m-4 dark:bg-black mt-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center sm:flex-row sm:justify-between">
        {/* Copyright Text */}
        <span className="text-sm text-gray-500 text-center dark:text-white sm:text-left">
          © 2025 <Link to="/" className="hover:underline">iReporter™</Link>. All Rights Reserved.
        </span>

        {/* Navigation Links */}
        <ul className="flex flex-col sm:flex-row items-center mt-3 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-6 text-sm font-medium text-white">
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">Licensing</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
