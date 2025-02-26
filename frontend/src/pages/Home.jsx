import React from "react";
import OpenStreetMap from "../components/OpenStreetMap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page flex flex-col items-center px-4 sm:px-6 lg:px-12">
      <div className="home-container w-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="text-section text-center lg:text-left max-w-lg lg:max-w-2xl">
          <h1 className="Home-h1 gradient-text text-3xl sm:text-5xl lg:text-6xl">
            Welcome To <span className="mr-2 sm:mr-10">iReporter</span>
          </h1>
          <p className="text-base sm:text-lg text-white mb-6 font-bold mr-0 sm:mr-10">
            iReporter empowers citizens to expose corruption and highlight issues needing government attention.
          </p>
          <Link to="/signup">
            <button className="get-started-btn px-6 py-3 text-lg rounded-full border-2 border-gray-600">
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
