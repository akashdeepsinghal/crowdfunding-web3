import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { Home, Profile, CreateCampaign, CampaignDetails } from "./pages";

const App = () => {
  return (
    <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row ">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto pr-5">
        <Navbar />
        {/* Navbar
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes> */}
      </div>
      <div className="sm:flex hidden mr-10 relative">Right Sidebar</div>
    </div>
  );
};

export default App;
