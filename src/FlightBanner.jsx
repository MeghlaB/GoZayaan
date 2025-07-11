import React, { useState, useEffect, useRef } from "react";
import {
  FaPlaneDeparture,
  FaHotel,
  FaSuitcaseRolling,
  FaPassport,
  FaExchangeAlt,
  FaSearch,
  FaTimes,
  FaHome,
  FaCalendarCheck,
  FaGift,
  FaUser,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Flightcard from "./Components/FlightCard ";

const FlightBanner = () => {
  const [activeTab, setActiveTab] = useState("flight");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  const locationDropdownRef = useRef(null);
  const travelerDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e) => {
      if (
        showLocationDropdown &&
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(e.target)
      ) {
        setShowLocationDropdown(false);
      }
      if (
        showTravelerDropdown &&
        travelerDropdownRef.current &&
        !travelerDropdownRef.current.contains(e.target)
      ) {
        setShowTravelerDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLocationDropdown, showTravelerDropdown]);

  return (
    <div className="w-full min-h-[750px] relative flex flex-col items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LlpveSeVoYPbhFeG1kju9eg2Aei93H48xw&s')",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        {/* Navbar */}
        <div
          className={`w-full fixed top-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : ""
          }`}
        >
          <div className="max-w-6xl w-full mx-auto md:px-4 px-4 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/rGHgJTF4/download-9.jpg"
                className="h-6"
                alt="logo"
              />
              <span className="font-bold text-xl text-[#000E6E]">gozayaan</span>
            </div>
            {isScrolled && (
              <div className="flex gap-2 sm:gap-4 bg-white px-2 sm:px-4 py-2 rounded-xl shadow-md text-xs sm:text-sm max-w-full overflow-x-auto whitespace-nowrap">
                {["flight", "hotel", "tour", "visa"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={` hidden md:flex items-center  gap-1 sm:gap-2 font-medium whitespace-nowrap ${
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
            )}
            <button className="bg-[#000E6E] text-white px-2 md:px-4 py-1 rounded font-medium text-sm">
              Sign In
            </button>
          </div>
        </div>

        {/* Main Form Section */}
        <div
  className={`w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-16 ${
    isScrolled ? "pt-[130px]" : "pt-30"
  }`}
>
  {/* Wrapper for entire card */}
  <div className="relative w-full max-w-5xl">
    {/* Floating Tab Bar */}
    <div className="absolute hidden -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md px-4 py-2 md:flex gap-6 z-10">
      {["flight", "hotel", "tour", "visa"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex items-center gap-1 text-sm sm:text-base px-2 sm:px-3 py-1 font-medium rounded-full transition ${
            activeTab === tab
              ? "text-blue-900 border-b-2 border-yellow-400"
              : "text-gray-500 hover:text-blue-800"
          }`}
        >
          {tab === "flight" && <FaPlaneDeparture />}
          {tab === "hotel" && <FaHotel />}
          {tab === "tour" && <FaSuitcaseRolling />}
          {tab === "visa" && <FaPassport />}
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>

    {/* Main Card */}
    <div className="bg-white rounded-3xl  pt-12 pb-6 px-4 sm:px-6">
      {/* Flight Form Goes Here */}
      <Flightcard />
    </div>
  </div>
</div>

      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-inner md:hidden">
        <div className="flex justify-around items-center py-2 text-xs text-blue-900">
          <Link to="/" className="flex flex-col items-center">
            <FaHome className="text-lg mb-1" />
            Home
          </Link>
          <Link to="/bookings" className="flex flex-col items-center">
            <FaCalendarCheck className="text-lg mb-1" />
            Bookings
          </Link>
          <Link to="/gift-card" className="flex flex-col items-center">
            <FaGift className="text-lg mb-1" />
            Gift Card
          </Link>
          <Link to="/account" className="flex flex-col items-center">
            <FaUser className="text-lg mb-1" />
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlightBanner;
