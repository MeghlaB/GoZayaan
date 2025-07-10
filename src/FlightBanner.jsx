import React, { useState, useEffect } from "react";
import {
  FaPlaneDeparture,
  FaHotel,
  FaSuitcaseRolling,
  FaPassport,
  FaExchangeAlt,
} from "react-icons/fa";

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const FlightBanner = () => {
  const [activeTab, setActiveTab] = useState("flight");
  const [tripType, setTripType] = useState("one-way");
  const [isScrolled, setIsScrolled] = useState(false);

  const data = [
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
        {
          label: "JOURNEY DATE",
          date: "14 Jul'25",
          day: "Monday",
        },
        {
          label: "RETURN DATE",
          note: "Save more on return flight",
          isDisabled: true,
        },
        {
          label: "TRAVELER, CLASS",
          traveler: "1 Traveler",
          class: "Economy",
        },
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
        {
          label: "JOURNEY DATE",
          date: "15 Jul'25",
          day: "Tuesday",
        },
        {
          label: "RETURN DATE",
          date: "16 Jul'25",
          day: "Wednesday",
        },
        {
          label: "TRAVELER, CLASS",
          traveler: "1 Traveler",
          class: "Economy",
        },
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
        {
          label: "JOURNEY DATE",
          date: "14 Jul'25",
          day: "Monday",
        },
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
        {
          label: "JOURNEY DATE",
          date: "15 Jul'25",
          day: "Tuesday",
        },
        {
          label: "Add Another city",
          isAddMore: true,
        },
        {
          label: "TRAVELER, CLASS",
          traveler: "1 Traveler",
          class: "Economy",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTrip = data.find((trip) => trip.tripType === tripType);

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/037/487/465/small/ai-generated-tropical-island-in-middle-of-ocean-palm-trees-and-trees-on-sandy-beach-in-sea-summer-paradise-bay-photo.jpg')",
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center">
        <div
          className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : ""
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-2 shrink-0">
                <img
                  src="https://i.ibb.co/rGHgJTF4/download-9.jpg"
                  alt="logo"
                  className="h-6"
                />
                <span className="font-bold text-xl text-[#000E6E]">gozayaan</span>
              </div>

              {isScrolled && (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 bg-white px-4 py-2 rounded-xl shadow-md">
                  {["flight", "hotel", "tour", "visa"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center gap-2 px-3 py-1 text-sm font-medium ${
                        activeTab === tab
                          ? "border-b-2 border-yellow-400 text-blue-800"
                          : "text-gray-600"
                      } hover:text-blue-800`}
                    >
                      {tab === "flight" && <FaPlaneDeparture />} 
                      {tab === "hotel" && <FaHotel />} 
                      {tab === "tour" && <FaSuitcaseRolling />} 
                      {tab === "visa" && <FaPassport />} 
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 shrink-0">
                <span className="text-sm text-black font-medium">BDT</span>
                <button className="bg-[#000E6E] hover:bg-blue-900 text-white px-4 py-1 rounded font-medium">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full flex flex-col items-center px-4 pb-10 ${isScrolled ? "pt-[160px]" : "pt-30"}`}>
          {!isScrolled && (
            <div className="bg-white rounded-xl shadow-md mb-0 px-6 py-3 flex gap-6">
              {["flight", "hotel", "tour", "visa"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-4 py-2 font-medium ${
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
          )}

          <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg px-6 py-3 mt-6">
            <div className="flex items-center justify-center gap-6 text-sm font-medium text-gray-700 mb-6">
              {["one-way", "round-way", "multi-city"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
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

            {(tripType === "multi-city"
              ? chunkArray(currentTrip?.fields || [], 4)
              : [currentTrip?.fields || []]
            ).map((group, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap gap-4 text-sm font-medium text-gray-700 mb-4"
              >
                {group.map((field, idx) => (
                  <div
                    key={idx}
                    className={`border rounded-xl p-3 min-w-[200px] relative ${
                      field.isAddMore ? "text-blue-600 font-semibold cursor-pointer" : ""
                    } ${field.isDisabled ? "opacity-60 cursor-not-allowed" : ""}`}
                  >
                    <p className="text-gray-400 text-xs mb-1">{field.label}</p>

                    {field.isAddMore ? (
                      <button className="text-blue-600 font-semibold hover:underline">
                        + Add Another City
                      </button>
                    ) : field.location ? (
                      <>
                        <h4 className="text-blue-800 font-bold">{field.location}</h4>
                        <p className="text-xs">
                          {field.code}, {field.airport}
                        </p>
                        {tripType !== "multi-city" && field.label === "FROM" && (
                          <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white border shadow w-10 h-10 rounded-full flex items-center justify-center">
                            <FaExchangeAlt className="text-blue-800" />
                          </div>
                        )}
                      </>
                    ) : field.date ? (
                      <>
                        <h4 className="text-blue-800 font-bold">{field.date}</h4>
                        <p className="text-xs">{field.day}</p>
                      </>
                    ) : field.note ? (
                      <h4 className="text-gray-500 font-medium text-sm">{field.note}</h4>
                    ) : field.traveler ? (
                      <>
                        <h4 className="text-blue-800 font-bold">{field.traveler}</h4>
                        <p className="text-xs">{field.class}</p>
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}

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
