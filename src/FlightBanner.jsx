import React, { useState, useEffect } from "react";
import {
  FaPlaneDeparture,
  FaHotel,
  FaSuitcaseRolling,
  FaPassport,
  FaExchangeAlt,
} from "react-icons/fa";

const FlightBanner = () => {
  const [activeTab, setActiveTab] = useState("flight");
  const [tripType, setTripType] = useState("one-way");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/037/487/465/small/ai-generated-tropical-island-in-middle-of-ocean-palm-trees-and-trees-on-sandy-beach-in-sea-summer-paradise-bay-photo.jpg')",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Navbar + Tabs */}
        <div
          className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : ""
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            {/* Navbar */}
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/rGHgJTF4/download-9.jpg"
                  alt="logo"
                  className="h-6"
                />
                <span className="font-bold text-xl text-[#000E6E]">
                  gozayaan
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-black font-medium">BDT</span>
                <button className="bg-[#000E6E] hover:bg-blue-900 text-white px-4 py-1 rounded font-medium">
                  Sign In
                </button>
              </div>
            </div>

            {/* Tabs */}
            {/* Tabs */}
            <div className="w-full  bg-white border-t border-gray-200">
              <div className="min-w-2xl mx-auto flex justify-center space-x-8 py-3">
                {[
                  { id: "flight", icon: <FaPlaneDeparture />, label: "Flight" },
                  { id: "hotel", icon: <FaHotel />, label: "Hotel" },
                  { id: "tour", icon: <FaSuitcaseRolling />, label: "Tour" },
                  { id: "visa", icon: <FaPassport />, label: "Visa" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 font-medium text-gray-600 hover:text-blue-800 ${
                      activeTab === tab.id
                        ? "border-b-2 border-yellow-400 text-blue-800"
                        : ""
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`w-full flex flex-col items-center px-4 pb-10 ${
            isScrolled ? "pt-[160px]" : "pt-32"
          }`}
        >
          {/* Search Form */}
          <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg px-6 py-6">
            {/* Trip Type */}
            <div className="flex items-center justify-center gap-6 text-sm font-medium text-gray-700 mb-6">
              {["one-way", "round-way", "multi-city"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="tripType"
                    value={type}
                    checked={tripType === type}
                    onChange={() => setTripType(type)}
                    className="accent-blue-600"
                  />
                  <span className="text-blue-800 font-semibold capitalize">
                    {type.replace("-", " ")}
                  </span>
                </label>
              ))}
            </div>

            {/* Input Fields */}
            <div className="grid md:grid-cols-5 gap-4 text-sm font-medium text-gray-700">
              {/* FROM */}
              <div className="border rounded-xl p-3 relative">
                <p className="text-gray-400 text-xs mb-1">FROM</p>
                <h4 className="text-blue-800 font-bold">Dhaka</h4>
                <p className="text-xs">
                  DAC, Hazrat Shahjalal International Airport
                </p>
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center">
                  <FaExchangeAlt className="text-blue-800" />
                </div>
              </div>

              {/* TO */}
              <div className="border rounded-xl p-3">
                <p className="text-gray-400 text-xs mb-1">TO</p>
                <h4 className="text-blue-800 font-bold">Cox's Bazar</h4>
                <p className="text-xs">CXB, Cox's Bazar Airport</p>
              </div>

              {/* JOURNEY DATE */}
              <div className="border rounded-xl p-3">
                <p className="text-gray-400 text-xs mb-1">JOURNEY DATE</p>
                <h4 className="text-blue-800 font-bold">14 Jul'25</h4>
                <p className="text-xs">Monday</p>
              </div>

              {/* RETURN DATE */}
              <div className="border rounded-xl p-3">
                <p className="text-gray-400 text-xs mb-1">RETURN DATE</p>
                <h4 className="text-gray-500 font-medium text-sm">
                  Save more on return flight
                </h4>
              </div>

              {/* TRAVELER + CLASS */}
              <div className="md:col-span-5 border rounded-xl p-3">
                <p className="text-gray-400 text-xs mb-1">TRAVELER, CLASS</p>
                <h4 className="text-blue-800 font-bold">1 Traveler</h4>
                <p className="text-xs">Economy</p>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 flex justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-3 rounded-xl shadow-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBanner;
