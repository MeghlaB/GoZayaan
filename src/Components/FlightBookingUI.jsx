import React, { useState } from "react";
import { Button } from "/src/Components/ui/Button";
import { Card, CardContent } from "/src/Components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "/src/Components/ui/tabs";
import {
  ArrowRight,
  Filter,
  Phone,
  MessageCircle,
  Timer,
} from "lucide-react";
import { BiChevronDown } from "react-icons/bi";

const flights = [
  {
    logo: "/src/assets/us-bangla.jpeg",
    airline: "US Bangla",
    departureTime: "19:10",
    arrivalTime: "20:15",
    duration: "1h 5m",
    origin: "DAC",
    destination: "CXB",
    price: "BDT 4,918",
    oldPrice: "BDT 5,199",
    code: "DOMB0725",
  },
  {
    logo: "/src/assets/biman-bangla.jpeg",
    airline: "Biman Bangla",
    departureTime: "19:10",
    arrivalTime: "20:15",
    duration: "1h 5m",
    origin: "DAC",
    destination: "CXB",
    price: "BDT 4,918",
    oldPrice: "BDT 5,199",
    code: "DOMB0725",
  },
  {
    logo: "/src/assets/novoair.png",
    airline: "Novoair",
    departureTime: "19:10",
    arrivalTime: "20:15",
    duration: "1h 5m",
    origin: "DAC",
    destination: "CXB",
    price: "BDT 4,918",
    oldPrice: "BDT 5,199",
    code: "DOMB0725",
  },
  {
    logo: "/src/assets/us-bangla.jpeg",
    airline: "US Bangla",
    departureTime: "19:10",
    arrivalTime: "20:15",
    duration: "1h 5m",
    origin: "DAC",
    destination: "CXB",
    price: "BDT 4,918",
    oldPrice: "BDT 5,199",
    code: "DOMB0725",
  },
];

export default function FlightBookingUI() {
  const [tripType, setTripType] = useState("one-way");

  const data = [
    {
      tripType: "one-way",
      fields: [
        { label: "FROM", location: "Dhaka", code: "DAC" },
        { label: "TO", location: "Cox's Bazar", code: "CXB" },
        { label: "JOURNEY DATE", date: "14 Jul'25" },
        { label: "TRAVELER, CLASS", traveler: "1 Traveler", class: "Economy" },
      ],
    },
  ];

  const currentTrip = data.find((item) => item.tripType === tripType);

  return (
    <div className="bg-[#ecf1f5] min-h-screen p-6 space-y-6">
      {/* Trip Type Selector */}
      <div className="bg-white p-4 rounded-md shadow-md flex gap-4">
        <Button
          variant={tripType === "one-way" ? "default" : "outline"}
          onClick={() => setTripType("one-way")}
        >
          One Way
        </Button>
        <Button
          variant={tripType === "round-way" ? "default" : "outline"}
          onClick={() => setTripType("round-way")}
        >
          Round Way
        </Button>
        <Button
          variant={tripType === "multi-city" ? "default" : "outline"}
          onClick={() => setTripType("multi-city")}
        >
          Multi-City
        </Button>
      </div>

      {/* Trip Summary Header */}
      {currentTrip && (
        <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-between">
          <div className="text-sm text-gray-700 flex flex-wrap gap-4">
            <span className="font-semibold text-black">
              {
                currentTrip.fields.find((f) => f.label === "FROM")?.location
              }
            </span>
            ➝
            <span className="font-semibold text-black">
              {currentTrip.fields.find((f) => f.label === "TO")?.location}
            </span>
            <span>
              {
                currentTrip.fields.find((f) => f.label === "JOURNEY DATE")?.date
              }
            </span>
            <span>
              {
                currentTrip.fields.find((f) => f.label === "TRAVELER, CLASS")
                  ?.traveler
              }
            </span>
            <span>
              {
                currentTrip.fields.find((f) => f.label === "TRAVELER, CLASS")
                  ?.class
              }
            </span>
          </div>
          <Button className="bg-yellow-400 text-black font-bold">
            Modify Search
          </Button>
        </div>
      )}

      {/* Main Content */}
      <div className="flex gap-4 container mx-auto">
        {/* Left Column */}
        <div className="w-3/4 space-y-4">
          {/* Filters */}
          <div className="bg-white rounded-md shadow-md p-4 flex items-center gap-4 text-sm text-gray-600">
            <Button variant="ghost" className="gap-2 text-sm">
              <Filter size={16} /> Filters
            </Button>
            <div className="flex gap-2 items-center">
              Stops:
              <span className="bg-gray-200 px-2 py-1 rounded">0</span>
              <span className="bg-gray-200 px-2 py-1 rounded">1</span>
              <span className="bg-gray-200 px-2 py-1 rounded">2</span>
            </div>
            <div>Partially Refundable</div>
            <div>Layover Time</div>
            <div>Depart Time</div>
            <div>Airlines</div>
            <div>More Filters</div>
          </div>

          {/* Flight Results */}
          <Tabs defaultValue="cheapest" className="bg-white rounded-md shadow-md">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="cheapest">Cheapest</TabsTrigger>
              <TabsTrigger value="fastest">Fastest</TabsTrigger>
            </TabsList>

            <CardContent className="p-4 space-y-4">
              {flights.map((flight, idx) => (
                <div key={idx} className="bg-white border  rounded-md  shadow-sm">
                  <Card className="flex justify-between items-center p-4">
                    {/* Airline Info */}
                    <div className="flex gap-4 items-center w-1/4">
                      <img
                        src={flight.logo}
                        alt={flight.airline}
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <div className="text-sm font-semibold text-[#1c1c1c]">
                          {flight.airline}
                        </div>
                        <div className="text-xs text-gray-500">Non-stop</div>
                      </div>
                    </div>

                    {/* Time & Route */}
                    <div className="w-1/2 text-center">
                      <div className="font-bold text-xl flex items-center justify-center gap-2 text-[#1c1c1c]">
                        <span>{flight.departureTime}</span>
                        <ArrowRight className="w-4 h-4" />
                        <span>{flight.arrivalTime}</span>
                      </div>
                      <div className="text-sm text-[#1c1c1c] font-medium mt-1">
                        {flight.origin} ➝ {flight.destination}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                        <Timer size={12} className="text-gray-500" />
                        {flight.duration}
                      </div>
                    </div>

                    {/* Price & Button */}
                    <div className="w-1/4 text-right">
                      <div className="text-xs text-[#ffbf00] font-semibold flex justify-end items-center gap-1">
                        🟡 Get Points
                      </div>
                      <div className="text-xs text-blue-500 font-medium mt-1">
                        {flight.code}
                      </div>
                      <div className="text-xs line-through text-gray-400 mt-1">
                        {flight.oldPrice}
                      </div>
                      <div className="text-xl font-bold text-[#003366]">
                        {flight.price}
                      </div>
                      <Button className="bg-[#ffc800] hover:bg-[#ffb700] text-black font-semibold mt-2 w-full flex items-center justify-center gap-2 rounded-md">
                        Select <ArrowRight size={16} />
                      </Button>
                    </div>
                  </Card>

                  {/* Footer (Partially Refundable + Flight Details) */}
                  <div className="border-t text-sm text-gray-600 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Partially Refundable <BiChevronDown size={16} />
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 cursor-pointer">
                      Flight Details <BiChevronDown size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Tabs>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 space-y-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-gray-500 text-sm">⏳</div>
              <div className="text-xl font-bold">39:45</div>
              <div className="text-sm text-gray-500">min sec</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="font-semibold text-sm mb-2">
                We're here for you 24/7
              </div>
              <div className="flex items-center gap-2 text-sm mb-1">
                <Phone size={16} /> +88 09678 332211
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle size={16} /> m.me/GoZayaanBD
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
