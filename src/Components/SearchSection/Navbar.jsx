// File: NavbarTabs.jsx
import React, { useState, useEffect } from "react";
import {
  FaPlaneDeparture,
  FaHotel,
  FaSuitcaseRolling,
  FaPassport,
} from "react-icons/fa";

const NavbarTabs = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/rGHgJTF4/download-9.jpg"
            className="h-6"
            alt="logo"
          />
          <span className="font-bold text-xl text-[#000E6E]">gozayaan</span>
        </div>

        {/* Tabs (Always visible) */}
        <div className="flex gap-2 sm:gap-4  px-2 sm:px-4 py-2 rounded-xl shadow-md text-xs sm:text-sm max-w-full overflow-x-auto whitespace-nowrap">
          {["flight", "hotel", "tour", "visa"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-1 sm:gap-2 font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-yellow-400 text-blue-800"
                  : "text-gray-600"
              }`}
            >
              {tab === "flight" && <FaPlaneDeparture />}
              {tab === "hotel" && <FaHotel />}
              {tab === "tour" && <FaSuitcaseRolling />}
              {tab === "visa" && <FaPassport />}
              <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </button>
          ))}
        </div>

        {/* Sign In Button */}
        <button className="bg-[#000E6E] text-white px-4 py-1 rounded font-medium text-sm">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavbarTabs;
