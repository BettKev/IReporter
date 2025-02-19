import { useState } from "react";

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [showReportOptions, setShowReportOptions] = useState(false);

  const userName = "John Doe";

  
  const sections = {
    
    Dashboard: (
        <div>
          <h3 className="text-lg font-semibold">Welcome, {userName}!</h3>
          <p className="mt-2">Here is an overview of your activity.</p>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-blue-200 rounded-lg shadow-md">Total Red Flags: 10</div>
            <div className="p-4 bg-green-200 rounded-lg shadow-md">Total Interventions: 5</div>
            <div className="p-4 bg-yellow-200 rounded-lg shadow-md">All Users: 100</div>
          </div>
          
          <h3 className="text-lg font-semibold mt-6">Red Flags & Interventions Guide</h3>
          <p className="mt-2">Examples of red flags and interventions for guidance.</p>
          
          <h3 className="text-lg font-semibold mt-6">Your Follow-Up Records</h3>
          <p className="mt-2">Your records' status is yet to be marked as either under investigation, rejected, or resolved.</p>
          
          <h3 className="text-lg font-semibold mt-6">Tell a Friend</h3>
          <p className="mt-2">Share our website link with others: <a href="#" className="text-blue-500 underline">Visit Website</a></p>
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
    Profile: "Update your profile information here.",
    Settings: "Adjust your settings and preferences here."
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-5">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>
        <ul>
          <li
            className={`p-3 cursor-pointer rounded-lg ${activeSection === "Dashboard" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            onClick={() => {
              setActiveSection("Dashboard");
              setShowReportOptions(false);
            }}
          >
            Dashboard
          </li>

          {/* Report Section */}
          <li
            className={`p-3 cursor-pointer rounded-lg ${showReportOptions ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            onClick={() => setShowReportOptions(!showReportOptions)}
          >
            Report
          </li>

          {/* Dropdown Options for Report */}
          {showReportOptions && (
            <>
              <li
                className={`p-3 pl-6 cursor-pointer rounded-lg ${activeSection === "Red-Flag" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                onClick={() => setActiveSection("Red-Flag")}
              >
                🟥 Red-Flag
              </li>
              <li
                className={`p-3 pl-6 cursor-pointer rounded-lg ${activeSection === "Intervention" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                onClick={() => setActiveSection("Intervention")}
              >
                🟦 Intervention
              </li>
            </>
          )}

          <li
            className={`p-3 cursor-pointer rounded-lg ${activeSection === "Profile" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            onClick={() => {
              setActiveSection("Profile");
              setShowReportOptions(false);
            }}
          >
            Profile
          </li>
          <li
            className={`p-3 cursor-pointer rounded-lg ${activeSection === "Settings" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            onClick={() => {
              setActiveSection("Settings");
              setShowReportOptions(false);
            }}
          >
            Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">{activeSection}</h2>
        <div className="text-gray-700">{sections[activeSection]}</div>
      </div>
    </div>
  );
};

export default UserProfile;
