import React, { useEffect, useState } from "react";
import { Button } from "/src/Components/ui/Button";
import { Card, CardContent } from "/src/Components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "/src/Components/ui/tabs";
import {
  ArrowRight,
  Filter,
  Phone,
  MessageCircle,
  Timer,
  Clock,
} from "lucide-react";
import { BiChevronDown } from "react-icons/bi";
import FlightForm from "./Flightfrom";

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
 
  const [expanded, setExpanded] = useState(false);

  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

 

  return (
    <div className="bg-[#ecf1f5] min-h-screen p-6 space-y-6">
      {/* Trip Type Selector */}
  <FlightForm/>

      {/* Trip Summary Header */}
     

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
          <Tabs
            defaultValue="cheapest"
            className="bg-white rounded-md shadow-md"
          >
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="cheapest">Cheapest</TabsTrigger>
              <TabsTrigger value="fastest">Fastest</TabsTrigger>
            </TabsList>

            <CardContent className="p-4 space-y-4">
              {flights.map((flight, idx) => (
                <div
                  key={idx}
                  className="bg-white border rounded-md shadow-sm mb-4"
                >
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

                  {/* Footer */}
                  <div className="border-t text-sm text-gray-600 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Partially Refundable <BiChevronDown size={16} />
                    </div>
                    <div
                      onClick={() => setExpanded(!expanded)}
                      className="flex items-center gap-2 text-blue-600 cursor-pointer"
                    >
                      Flight Details{" "}
                      <BiChevronDown
                        size={16}
                        className={`${
                          expanded ? "rotate-180" : ""
                        } transition-transform`}
                      />
                    </div>
                  </div>

                  {/* Expandable Section */}
                  {expanded && (
                    <div className="border-t flex text-sm">
                      {/* Left: Flight Info */}
                      <div className="w-1/2 p-4 border-r space-y-2">
                        <div className="font-bold text-center text-[#1c1c1c]">
                          Flight Details
                        </div>
                        <div className="text-center bg-[#003366] text-white py-1 rounded-md w-fit mx-auto px-3 text-xs font-semibold">
                          {flight.origin} - {flight.destination}
                        </div>
                        <div className="flex justify-between text-[#1c1c1c] mt-4">
                          <div className="font-semibold">
                            {flight.airline.toUpperCase()}
                          </div>
                          <div className="text-gray-500">(Economy)</div>
                        </div>
                        <div className="text-gray-500 text-xs mt-1">
                          VQ 935 | ATR725
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <div className="font-semibold text-lg">18:30</div>
                            <div className="text-gray-500 text-xs">
                              Tue, 15 Jul, 2025
                            </div>
                            <div className="text-xs">DAC</div>
                          </div>
                          <div className="text-xs text-center">
                            <ArrowRight className="mx-auto mb-1" size={18} />
                            {flight.duration}
                          </div>
                          <div>
                            <div className="font-semibold text-lg">19:35</div>
                            <div className="text-gray-500 text-xs">
                              Tue, 15 Jul, 2025
                            </div>
                            <div className="text-xs">CXB</div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Baggage Info */}
                      <div className="w-1/2 p-4">
                        <div className="flex gap-6 border-b pb-2 mb-2">
                          <div className="text-[#003366] font-semibold border-b-2 border-[#003366] pb-1">
                            Baggage
                          </div>
                          <div className="text-gray-500">Fare</div>
                          <div className="text-gray-500">Policy</div>
                        </div>
                        <div className="flex justify-between mb-2">
                          <div className="text-gray-600">Flight</div>
                          <div className="text-gray-900">
                            {flight.origin} - {flight.destination}
                          </div>
                        </div>
                        <div className="flex justify-between mb-2">
                          <div className="text-gray-600">Cabin</div>
                          <div className="text-gray-900">7 KGS</div>
                        </div>
                        <div className="flex justify-between mb-2">
                          <div className="text-gray-600">Check-in</div>
                          <div className="text-gray-900">20 KGS</div>
                        </div>
                        <div className="bg-[#ecf5ff] px-4 py-2 mt-4 text-[#003366] font-semibold rounded-md flex justify-between items-center">
                          <span>Total (1 Traveler)</span>
                          <span className="text-right font-bold">
                            BDT 5,199
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Tabs>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 space-y-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className=" flex items-center justify-center gap-7">
                <div className="text-gray-500 text-xl">
                  <Clock />
                </div>
                <div>
                  <div className="text-xl text-blue-900 font-bold">
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-sm text-gray-500">min sec</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-5">
              <div className="font-semibold text-sm mb-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 py-2 rounded-md">
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
