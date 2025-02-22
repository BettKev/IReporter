import React from "react";
import OpenStreetMap from "../components/OpenStreetMap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page min-h-screen flex flex-col items-center justify-center px-4 sm:px-8">
      <div className="bg-white home-container w-full max-w-4xl flex flex-col sm:flex-row items-center sm:items-start sm:mx-0 sm:px-0">
        {/* Text Section */}
        <div className="bg-black text-section text-center sm:text-left w-full mb-8 sm:mx-0 px-0 sm:px-0 sm:mb-0">
          <h1 className="Home-h1 gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-snug sm:leading-normal">
            Welcome To <span className="block sm:inline">iReporter</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 font-bold leading-relaxed sm:leading-loose">
            iReporter empowers citizens to expose corruption and highlight issues needing government attention.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link to="/signup" className="inline-block w-full sm:w-auto">
              <button className="get-started-btn w-full sm:w-auto px-6 py-3 rounded-3xl border-2 border-gray-600 text-lg transition-transform transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section w-full sm:w-1/2 px-4 sm:px-0">
          <h2 className="text-2xl font-bold text-white mb-6 text-center sm:text-left">
            Incident Reports
          </h2>
          <div className="w-full max-w-2xl mx-auto sm:mx-0">
            <OpenStreetMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
