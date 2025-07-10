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
  const [tripType, setTripType] = useState("one-way");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    class: "Economy",
  });

  const [journeyDate, setJourneyDate] = useState(new Date("2025-07-14"));
  const [returnDate, setReturnDate] = useState(new Date("2025-07-15"));

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

  const currentTrip = data.find((t) => t.tripType === tripType);

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

  const handleLocationClick = (field) => {
    if (field.isDisabled || field.isAddMore) return;
    setCurrentField(field);
    setShowLocationDropdown(true);
    setShowTravelerDropdown(false);
    setSearchTerm("");
  };

  const filteredAirports = airports.filter(
    (a) =>
      a.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.airport.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectAirport = (airport) => {
    const updated = data.map((trip) => {
      if (trip.tripType === tripType) {
        const newFields = trip.fields.map((f) =>
          f.label === currentField.label && f.location === currentField.location
            ? {
                ...f,
                location: airport.city,
                code: airport.code,
                airport: airport.airport,
              }
            : f
        );
        return { ...trip, fields: newFields };
      }
      return trip;
    });
    setData(updated);
    setShowLocationDropdown(false);
  };

  const swapLocations = () => {
    const updated = data.map((trip) => {
      if (trip.tripType === tripType) {
        const from = trip.fields.find((f) => f.label === "FROM");
        const to = trip.fields.find((f) => f.label === "TO");
        const newFields = trip.fields.map((f) => {
          if (f.label === "FROM") return { ...to };
          if (f.label === "TO") return { ...from };
          return f;
        });
        return { ...trip, fields: newFields };
      }
      return trip;
    });
    setData(updated);
  };

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
          <div className="flex flex-wrap justify-center gap-4  bg-white px-4 py-3 rounded-t-xl shadow-md  text-sm max-w-2xl md:max-w-2xl  ">
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
          <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg px-6 py-6 relative">
            {/* Trip Type Selector */}
            <div className="flex flex-wrap justify-center gap-5 text-sm mb-6">
              {["one-way", "round-way", "multi-city"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
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

            {/* Fields */}
            {(tripType === "multi-city"
              ? chunkArray(currentTrip?.fields || [], 4)
              : [currentTrip?.fields || []]
            ).map((group, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid gap-4 mb-4 ${
                  tripType === "multi-city"
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-5"
                }`}
              >
                {group.map((field, idx) => {
                  if (
                    (field.label === "JOURNEY DATE" ||
                      field.label === "RETURN DATE") &&
                    (tripType === "one-way" || tripType === "round-way")
                  ) {
                    return (
                      <div
                        key={idx}
                        className="border rounded-xl p-3 min-w-0 flex-1 relative cursor-pointer"
                      >
                        <p className="text-gray-400 text-xs mb-1">{field.label}</p>
                        <DatePicker
                          selected={
                            field.label === "JOURNEY DATE" ? journeyDate : returnDate
                          }
                          onChange={(date) =>
                            field.label === "JOURNEY DATE"
                              ? setJourneyDate(date)
                              : setReturnDate(date)
                          }
                          dateFormat="dd MMM ''yy"
                          className="text-blue-800 font-bold w-full"
                          calendarClassName="rounded-xl shadow-lg"
                          minDate={
                            field.label === "RETURN DATE" ? journeyDate : new Date()
                          }
                        />
                      </div>
                    );
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (field.label === "TRAVELER, CLASS") {
                          setShowTravelerDropdown((prev) => !prev);
                          setShowLocationDropdown(false);
                        } else {
                          handleLocationClick(field);
                        }
                      }}
                      className={`border rounded-xl p-3 min-w-0 flex-1 relative cursor-pointer ${
                        field.isAddMore ? "text-blue-600 font-semibold" : ""
                      }`}
                    >
                      <p className="text-gray-400 text-xs mb-1">{field.label}</p>
                      {field.location ? (
                        <>
                          <h4 className="text-blue-800 font-bold truncate">
                            {field.location}
                          </h4>
                          <p className="text-xs truncate">
                            {field.code}, {field.airport}
                          </p>
                          {tripType !== "multi-city" && field.label === "FROM" && (
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                swapLocations();
                              }}
                              className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white border shadow w-8 h-8 rounded-full flex items-center justify-center sm:w-10 sm:h-10"
                            >
                              <FaExchangeAlt className="text-blue-800" />
                            </div>
                          )}
                        </>
                      ) : field.traveler ? (
                        <>
                          <h4 className="text-blue-800 font-bold truncate">
                            {field.traveler}
                          </h4>
                          <p className="text-xs">{field.class}</p>
                        </>
                      ) : field.isAddMore ? (
                        <button className="text-blue-600 font-semibold hover:underline whitespace-nowrap text-sm sm:text-base">
                          + Add Another City
                        </button>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Location Dropdown */}
            {showLocationDropdown && (
              <div
                ref={locationDropdownRef}
                className="absolute inset-x-0 z-50 sm:left-0 sm:inset-x-auto mx-4 sm:mx-0 sm:max-w-md bg-white border rounded-xl shadow-lg z-50 mt-2 w-auto px-4 sm:px-0"
                style={{ maxWidth: "90vw" }}
              >
                <div className="p-4 border-b">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for city or airport"
                      className="w-full pl-10 pr-10 py-2 border rounded-lg text-base"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoFocus
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      onClick={() => setShowLocationDropdown(false)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
                <div className="max-h-[70vh] overflow-y-auto">
                  {filteredAirports.length > 0 ? (
                    filteredAirports.map((airport, index) => (
                      <div
                        key={index}
                        className="p-3 hover:bg-blue-50 cursor-pointer border-b"
                        onClick={() => selectAirport(airport)}
                      >
                        <div className="flex justify-between">
                          <span className="font-semibold">{airport.city}</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {airport.code}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{airport.airport}</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-500">No airports found</div>
                  )}
                </div>
              </div>
            )}

            {/* Traveler Dropdown */}
            {showTravelerDropdown && (
              <div
                ref={travelerDropdownRef}
                className="absolute right-0 left-auto sm:left-auto bg-white border rounded-xl shadow-lg z-50 mt-2 max-w-md mx-6"
                style={{ maxWidth: "90vw" }}
              >
                <div className="p-4">
                  {[
                    {
                      label: "Adults",
                      desc: "12 years and above",
                      key: "adults",
                    },
                    { label: "Children", desc: "2–11 years", key: "children" },
                    { label: "Infant", desc: "Below 2 years", key: "infants" },
                  ].map(({ label, desc, key }) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-2 border-b"
                    >
                      <div>
                        <p className="font-semibold">{label}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          disabled={travelers[key] === 0}
                          onClick={() =>
                            setTravelers((prev) => ({
                              ...prev,
                              [key]: Math.max(prev[key] - 1, 0),
                            }))
                          }
                          className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold disabled:opacity-40"
                        >
                          -
                        </button>
                        <span>{travelers[key]}</span>
                        <button
                          onClick={() =>
                            setTravelers((prev) => ({
                              ...prev,
                              [key]: prev[key] + 1,
                            }))
                          }
                          className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Class selector */}
                  <div className="py-2">
                    <label className="font-semibold block mb-1">Class</label>
                    <select
                      value={travelers.class}
                      onChange={(e) =>
                        setTravelers((prev) => ({ ...prev, class: e.target.value }))
                      }
                      className="w-full border rounded px-3 py-2"
                    >
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First</option>
                    </select>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => setShowTravelerDropdown(false)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-xl"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Search Button */}
            <div className="mt-6 flex justify-center px-4 sm:px-0">
             <Link to={'/search'}> <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl shadow-md w-full sm:w-auto max-w-md text-sm sm:text-base">
                Search
              </button></Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBanner;
