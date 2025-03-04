import React from "react";
import OpenStreetMap from "../components/OpenStreetMap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <div className="home-container">
          <div className="text-section">
            <h1 className="res Home-h1 gradient-text">
              Welcome To <span className="mr-10">iReporter</span>
            </h1>
            <p className="text-lg text-white mb-6 font-bold mr-10 ">
              iReporter empowers citizens to expose corruption and highlight issues needing government attention.
            </p>
            <Link to="/signup" className="block w-full ">
              <button className="get-started-btn mr-40 rounded-4xl border-2 border-gray-600">
                Get Started
              </button>
            </Link>
          </div>

        {/* Map Section */}
        <div className="w-full max-w-2xl mt-8 lg:mt-0 lg:ml-10 flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center lg:text-left">
            Incident Reports
          </h2>
          <div className="Map Map-style w-full h-[300px] sm:h-[400px]">
            <OpenStreetMap />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
