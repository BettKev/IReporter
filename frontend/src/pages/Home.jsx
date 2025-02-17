import React from "react";
import OpenStreetMap from "../components/OpenStreetMap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-5 flex flex-col items-center text-center h-screen bg-gray-100">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl border border-gray-700">
      <h1 className="text-3xl font-bold text-primary mb-4">Welcome to iReporter</h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Corruption is a huge bane to Africa’s development. African countries must develop novel and localised solutions to curb this menace. 
          Hence, the birth of iReporter. iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. 
          Users can also report on things that need government intervention.
        </p>
        <Link to="/signup" className="block w-full">
          <button className="bg-gray-700 hover:bg-gray-600 text-white w-full p-3 rounded font-semibold">Get Started</button>
        </Link>
      </div>
      
      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Incident Reports</h2>
        <div className="border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-gray-800">
          <OpenStreetMap />
        </div>
      </div>
    </div>
  );
};

export default Home;


