import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-auto"> {/* Allow content to scroll, if necessary */}
        <Outlet />
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
}