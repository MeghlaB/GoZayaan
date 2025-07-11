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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0">
        {/* Top Section: Logo & Sign In */}
        <div className="w-full flex items-center justify-between sm:justify-start sm:w-auto gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://i.ibb.co/rGHgJTF4/download-9.jpg"
              className="h-6 sm:h-7"
              alt="logo"
            />
            <span className="font-bold text-lg sm:text-xl text-[#000E6E]">gozayaan</span>
          </div>

          {/* Sign In Button on small screen */}
          <div className="block sm:hidden">
            <button className="bg-[#000E6E] text-white px-4 py-1 rounded font-medium text-sm whitespace-nowrap">
              Sign In
            </button>
          </div>
        </div>

        {/* Tabs (Hide on mobile, show on sm and up) */}
        <div className="hidden sm:flex gap-3 px-4 py-2 text-sm whitespace-nowrap">
          {["flight", "hotel", "tour", "visa"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 font-medium transition ${
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

        {/* Sign In Button for desktop */}
        <div className="hidden sm:block">
          <button className="bg-[#000E6E] text-white px-4 py-1 rounded font-medium text-sm whitespace-nowrap">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTabs;
