// File: FlightForm.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaExchangeAlt, FaSearch, FaTimes } from "react-icons/fa";
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

const FlightForm = () => {
  const [tripType, setTripType] = useState("one-way");
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    <div className="w-full mt-10 bg-white flex flex-col items-center sm:px-6 lg:px-8 pt-10 pb-20">
      
      <div className="flex flex-wrap text-left gap-5 text-sm mb-6 justify-center">
        {["one-way", "round-way", "multi-city"].map((type) => (
          <label
            key={type}
            className="flex items-center gap-2 whitespace-nowrap cursor-pointer"
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

  
      <div className="flex flex-col sm:flex-row bg-white w-full max-w-6xl rounded-3xl shadow-lg px-5 items-center justify-center gap-4 relative">
        <div className="px-6 py-6 w-full">
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
                      className="rounded-xl p-3 min-w-0 flex-1 relative cursor-pointer"
                    >
                      <p className="text-gray-400 text-xs mb-1">{field.label}</p>
                      <DatePicker
                        selected={
                          field.label === "JOURNEY DATE"
                            ? journeyDate
                            : returnDate
                        }
                        onChange={(date) =>
                          field.label === "JOURNEY DATE"
                            ? setJourneyDate(date)
                            : setReturnDate(date)
                        }
                        dateFormat="dd MMM ''yy"
                        className="text-blue-800 font-bold w-full"
                        calendarClassName="rounded-xl shadow-lg"
                        minDate={field.label === "RETURN DATE" ? journeyDate : new Date()}
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
                        <h4 className="text-blue-800 font-bold truncate">{field.location}</h4>
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
                        <h4 className="text-blue-800 font-bold truncate">{field.traveler}</h4>
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
              className="absolute z-50 left-0 right-0 mx-4 bg-white border rounded-xl shadow-lg px-4 py-4 max-h-80 overflow-auto sm:max-w-md sm:mx-auto sm:left-auto sm:right-auto"
              style={{ top: "100%" }}
            >
              <div className="relative mb-4">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for city or airport"
                  className="w-full pl-10 pr-10 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowLocationDropdown(false)}
                  aria-label="Close location dropdown"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="max-h-64 overflow-y-auto">
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
                  <div className="text-center text-gray-500">No airports found</div>
                )}
              </div>
            </div>
          )}

          {/* Traveler Dropdown */}
          {showTravelerDropdown && (
            <div
              ref={travelerDropdownRef}
              className="absolute right-0 bg-white border rounded-xl shadow-lg p-4 z-50 w-full max-w-xs sm:max-w-sm mt-2 sm:right-auto sm:left-0"
              style={{ top: "100%" }}
            >
              {["adults", "children", "infants"].map((key) => (
                <div
                  key={key}
                  className="flex justify-between items-center py-2 border-b last:border-b-0"
                >
                  <div>
                    <p className="font-semibold capitalize">{key}</p>
                    <p className="text-xs text-gray-500">
                      {key === "adults" && "12 years and above"}
                      {key === "children" && "2–11 years"}
                      {key === "infants" && "Below 2 years"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={travelers[key] === 0}
                      onClick={() =>
                        setTravelers((prev) => ({
                          ...prev,
                          [key]: Math.max(prev[key] - 1, 0),
                        }))
                      }
                      className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-800"
                      aria-label={`Decrease ${key}`}
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
                      className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-800"
                      aria-label={`Increase ${key}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-3">
                <label className="font-semibold block mb-1" htmlFor="classSelect">
                  Class
                </label>
                <select
                  id="classSelect"
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
              <button
                onClick={() => setShowTravelerDropdown(false)}
                className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-xl w-full"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="flex justify-center sm:ml-4 w-full sm:w-auto">
          <Link to="/search" className="w-full sm:w-auto">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-md w-full sm:w-auto">
              Modify Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlightForm;
