import React ,{ useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Profile from "./Profile";



const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [showReportOptions, setShowReportOptions] = useState(false);
  const { current_user, logout } = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openLogoutModal = () => {
    setIsModalOpen(true);
    
  };

  const closeLogoutModal = () => {
    setIsModalOpen(false); 
  };

  const handleLogout = () => {
    if (current_user) {
      logout(); 
      closeLogoutModal(); 
      navigate("/login"); 
    } else {
      toast.error("FAILED LOG OUT");
    }
  };

  const sections = {
    Dashboard: (
      <div>
        <h3 className="text-lg font-semibold ">
          Welcome, {current_user?.first_name} {current_user?.last_name} !
        </h3>
        <p className="mt-2">Here is an overview of your activity.</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-blue-200 rounded-lg shadow-md">
            Total Red Flags: 10
          </div>
          <div className="p-4 bg-green-200 rounded-lg shadow-md">
            Total Interventions: 5
          </div>
          <div className="p-4 bg-yellow-200 rounded-lg shadow-md">
            All Users: 100
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6">
          Red Flags & Interventions Guide
        </h3>
        <p className="mt-2">
          Examples of red flags and interventions for guidance.
        </p>

        <h3 className="text-lg font-semibold mt-6">Your Follow-Up Records</h3>
        <p className="mt-2">
          Your records' status is yet to be marked as either under
          investigation, rejected, or resolved.
        </p>

        <h3 className="text-lg font-semibold mt-6">Tell a Friend</h3>
        <p className="mt-2">
          Share our website link with others:{" "}
          <a href="#" className="text-blue-500 underline">
            Visit Website
          </a>
        </p>
      </div>
    ),
    "Red-Flag": (
      <div>
        <h3 className="text-lg font-semibold">Red-Flag Reports</h3>
        <p>Users can create and manage red-flag records.</p>
      </div>
    ),
    Intervention: (
      <div>
        <h3 className="text-lg font-semibold">Intervention Reports</h3>
        <p>Users can create and manage intervention records.</p>
      </div>
    ),
    Profile:( <div className="w-full flex-8 flex flex-col items-center justify-start text-center overflow-auto p-4"><Profile/></div>), 
    Settings: "Adjust your settings and preferences here.",
  };

  return (
    <div className="flex h-screen bg-gray-300 mt-20 rounded-xl shadow-lg  text-center">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-200 rounded-xl shadow-lg p-5">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>
        <ul>
          <li
            className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
              activeSection === "Dashboard"
                ? "bg-gradient-to-r from-[#d580d8] to-[#ff7eb3] transition-all duration-300 ease-in-out text-white text-center mb-2 "
                : "hover:bg-gray-200"
            }`}
            onClick={() => {
              setActiveSection("Dashboard");
              setShowReportOptions(false);
            }}
          >
            Dashboard
          </li>

          {/* Report Section */}
          <li
            className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
              showReportOptions
                ? "bg-gradient-to-r from-[#d580d8] to-[#ff7eb3] transition-all duration-300 ease-in-out text-white text-center mb-2 "
                : "hover:bg-gray-200"
            }`}
            onClick={() => setShowReportOptions(!showReportOptions)}
          >
            Report
          </li>

          {/* Dropdown Options for Report */}
          {showReportOptions && (
            <>
              <li
                className={`p-3 pl-6 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
                  activeSection === "Red-Flag"
                    ? "bg-red-600 text-white shadow-lg"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveSection("Red-Flag")}
              >
                🚩 Red-Flag
              </li>
              <li
                className={`p-3 pl-6 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
                  activeSection === "Intervention"
                    ? "bg-orange-500 text-white shadow-lg"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveSection("Intervention")}
              >
                🔨 Intervention
              </li>
            </>
          )}

          <li
            className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
              activeSection === "Profile"
                ? "bg-gradient-to-r from-[#d580d8] to-[#ff7eb3] transition-all duration-300 ease-in-out text-white text-center mb-2 "
                : "hover:bg-gray-200"
            }`}
            onClick={() => {
              setActiveSection("Profile");
              setShowReportOptions(false);
            }}
          >
            Profile
          </li>
          <li
            className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ease-in-out ${
              activeSection === "Settings"
                ? "bg-gradient-to-r from-[#d580d8] to-[#ff7eb3] transition-all duration-300 ease-in-out text-white text-center mb-2 "
                : "hover:bg-gray-200"
            }`}
            onClick={() => {
              setActiveSection("Settings");
              setShowReportOptions(false);
            }}
          >
            Settings
          </li>

          {/* Logout Button */}
          <li
            className="p-3 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:bg-red-600"
            onClick={openLogoutModal}
          >
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start text-center overflow-auto p-4 h-full">
        <h2 className="text-2xl font-semibold mb-4">{activeSection}</h2>
        <div className="text-gray-700">{sections[activeSection]}</div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-lg">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">
              Are you sure you want to logout?
            </h3>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 mr-2 bg-gray-300 rounded-md hover:bg-gradient-to-r hover:from-[#95ec89] hover:to-[#1bdf4c]  hover:shadow-[rgba(255,_126,_179,_0.6)] hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:text-amber-50"
                onClick={closeLogoutModal} // Close the modal
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 mr-2 bg-red-400 rounded-md hover:bg-gradient-to-r hover:from-[#ec4c4c] hover:to-[#ff0000]  hover:shadow-[rgba(255,_126,_179,_0.6)] hover:translate-y-[-2px] transition-all duration-300 ease-in-out hover:text-amber-50"
                onClick={handleLogout} // Proceed with logout
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
