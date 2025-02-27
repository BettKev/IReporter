import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="Footer bg-dark rounded-lg shadow-sm m-4 dark:bg-black mt-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-gray-500 text-center md:text-left dark:text-white">
          © 2025 <Link to={"/"} className="hover:underline">iReporter™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center md:justify-start items-center mt-3 text-sm font-medium text-white">
          <li>
            <Link to={"/about"} className="hover:underline me-4 md:me-6">About</Link>
          </li>
          {/* <li>
            <Link to={"#"} className="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <Link to={"#"} className="hover:underline me-4 md:me-6">Licensing</Link>
          </li> */}
          <li>
          <a
              href="mailto:iregisterweb@gmail.com"
              className="hover:underline me-4 md:me-6"
            >
              Contact Us
            </a>
          </li>
          <li>
            <Link to={"https://ireporter-8cyw.onrender.com"} className="hover:underline me-4 md:me-6" target="_blank" rel="noopener noreferrer">API Documentation</Link>
          </li>
          <li>
            <Link to={"https://pzvzxqm0.status.cron-job.org/"} className="hover:underline" target="_blank" rel="noopener noreferrer">Server Status</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
