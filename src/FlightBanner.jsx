// File: FlightBanner.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaPlaneDeparture,
  FaHotel,
  FaSuitcaseRolling,
  FaPassport,
  FaExchangeAlt,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Flightcard from "./Components/FlightCard ";

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const airports = [
  {
    city: "Dhaka",
    code: "DAC",
    airport: "Hazrat Shahjalal International Airport",
  },
  { city: "Cox's Bazar", code: "CXB", airport: "Cox's Bazar Airport" },
  {
    city: "Chittagong",
    code: "CGP",
    airport: "Shah Amanat International Airport",
  },
  { city: "Sylhet", code: "ZYL", airport: "Osmani International Airport" },
];

const FlightBanner = () => {
  const [activeTab, setActiveTab] = useState("flight");

  const [isScrolled, setIsScrolled] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);




  const [data, setData] = useState([
    {
      tripType: "one-way",
      fields: [
        {
          label: "FROM",
          location: "Dhaka",
          code: "DAC",
          airport: "Hazrat Shahjalal International Airport",
        },
        {
          label: "TO",
          location: "Cox's Bazar",
          code: "CXB",
          airport: "Cox's Bazar Airport",
        },
        { label: "JOURNEY DATE", date: "14 Jul'25", day: "Monday" },
        { label: "RETURN DATE", date: "15 Jul'25", day: "Tuesday" },
        { label: "TRAVELER, CLASS", traveler: "1 Traveler", class: "Economy" },
      ],
    },
    {
      tripType: "round-way",
      fields: [
        {
          label: "FROM",
          location: "Dhaka",
          code: "DAC",
          airport: "Hazrat Shahjalal International Airport",
        },
        {
          label: "TO",
          location: "Cox's Bazar",
          code: "CXB",
          airport: "Cox's Bazar Airport",
        },
        { label: "JOURNEY DATE", date: "15 Jul'25", day: "Tuesday" },
        { label: "RETURN DATE", date: "16 Jul'25", day: "Wednesday" },
        { label: "TRAVELER, CLASS", traveler: "1 Traveler", class: "Economy" },
      ],
    },
    {
      tripType: "multi-city",
      fields: [
        {
          label: "FROM",
          location: "Dhaka",
          code: "DAC",
          airport: "Hazrat Shahjalal International Airport",
        },
        {
          label: "TO",
          location: "Cox's Bazar",
          code: "CXB",
          airport: "Cox's Bazar Airport",
        },
        { label: "JOURNEY DATE", date: "14 Jul'25", day: "Monday" },
        { label: "TRAVELER, CLASS", traveler: "1 Traveler", class: "Economy" },
        {
          label: "FROM",
          location: "Chittagong",
          code: "CGP",
          airport: "Shah Amanat International Airport",
        },
        {
          label: "TO",
          location: "Sylhet",
          code: "ZYL",
          airport: "Osmani International Airport",
        },
        { label: "JOURNEY DATE", date: "15 Jul'25", day: "Tuesday" },
        { label: "Add Another city", isAddMore: true },
      ],
    },
  ]);



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
    <div className="w-full min-h-[750px] relative flex flex-col items-center overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/037/487/465/small/ai-generated-tropical-island-in-middle-of-ocean-palm-trees-and-trees-on-sandy-beach-in-sea-summer-paradise-bay-photo.jpg')",
        }}
      />

      <div className="relative z-10 w-full">
        {/* Navbar */}
        <div
          className={`w-full fixed top-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : ""
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
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
            )}
            <button className="bg-[#000E6E] text-white px-4 py-1 rounded font-medium text-sm">
              Sign In
            </button>
          </div>
        </div>

        <div
          className={`w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-10 ${
            isScrolled ? "pt-[160px]" : "pt-36"
          }`}
        >
          {/* Trip Type */}
          <div className="flex flex-wrap justify-center gap-4  bg-white px-4 py-3 rounded-t-xl shadow-md  text-sm max-w-[250px] md:max-w-2xl  ">
            {["flight", "hotel", "tour", "visa"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2 font-medium rounded-md whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-yellow-400 text-blue-800"
                    : "text-gray-600 hover:text-blue-800"
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

          {/* Flight Form */}
          <Flightcard/>
        </div>
      </div>
    </div>
  );
};

export default FlightBanner;
