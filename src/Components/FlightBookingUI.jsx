import React, { useEffect, useState } from "react";
import { Button } from "/src/Components/ui/Button";
import { Card, CardContent } from "/src/Components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "/src/Components/ui/tabs";
import FilghtCard from "../Components/FlightCard "
import {
  ArrowRight,
  Filter,
  Phone,
  MessageCircle,
  Timer,
  Clock,
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
  const [expandedFlightIndex, setExpandedFlightIndex] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes

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

    return () => clearInterval(timer);
  }, []);

  const toggleExpand = (index) => {
    setExpandedFlightIndex((prev) => (prev === index ? null : index));
  };

  const handleSelectFlight = (index) => {
    setSelectedFlight((prev) => (prev === index ? null : index));
  };

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  const closeFlightDetails = () => {
    setSelectedFlight(null);
  };

  return (
    <div className="bg-[#ecf1f5] min-h-screen p-4 sm:p-6 space-y-6">
    <FilghtCard/>
      <div className="flex flex-col lg:flex-row gap-6 container mx-auto">
        {/* Left Column */}
        <div className="lg:w-3/4 space-y-4">
          {/* Filters */}
          <div className="bg-white rounded-md shadow-md p-4 flex flex-wrap gap-3 text-sm text-gray-600">
            <Button variant="ghost" className="gap-2 text-sm flex items-center">
              <Filter size={16} /> Filters
            </Button>
            <div className="flex gap-2 items-center whitespace-nowrap">
              Stops:
              <span className="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300">0</span>
              <span className="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300">1</span>
              <span className="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300">2</span>
            </div>
            <div className="whitespace-nowrap cursor-pointer hover:underline">Partially Refundable</div>
            <div className="whitespace-nowrap cursor-pointer hover:underline">Layover Time</div>
            <div className="whitespace-nowrap cursor-pointer hover:underline">Depart Time</div>
            <div className="whitespace-nowrap cursor-pointer hover:underline">Airlines</div>
            <div className="whitespace-nowrap cursor-pointer hover:underline">More Filters</div>
          </div>

          {/* Flight Results */}
          <Tabs defaultValue="cheapest" className="bg-white rounded-md shadow-md">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="cheapest">Cheapest</TabsTrigger>
              <TabsTrigger value="fastest">Fastest</TabsTrigger>
            </TabsList>

            <CardContent className="p-4 space-y-4">
              {flights.map((flight, idx) => (
                <div key={idx} className="bg-white border rounded-md shadow-sm mb-4">
                  <Card className="flex flex-col sm:flex-row justify-between items-center p-4 gap-4">
                    <div className="flex gap-4 items-center w-full sm:w-1/4">
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

                    <div className="w-full sm:w-1/2 text-center">
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

                    <div className="w-full sm:w-1/4 text-right space-y-1">
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
                      <Button
                        onClick={() => handleSelectFlight(idx)}
                        className="bg-[#ffc800] hover:bg-[#ffb700] text-black font-semibold mt-2 w-full flex items-center justify-center gap-2 rounded-md"
                      >
                        {selectedFlight === idx ? "Selected" : "Select"}{" "}
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </Card>

                  {/* Inline Flight Booking Details */}
                  {selectedFlight === idx && (
                    <div className="border-t p-4 bg-white">
                      <h1 className="text-xl font-bold mb-2">
                        {flights[selectedFlight].origin} ➝ {flights[selectedFlight].destination}
                      </h1>
                      <div className="flex flex-col sm:flex-row justify-between items-center mt-2 gap-4">
                        <div>
                          <h2 className="text-lg font-semibold">
                            {flights[selectedFlight].airline}
                          </h2>
                          <p className="text-sm text-gray-500">2A 445 | AT7 (Economy)</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">{flights[selectedFlight].departureTime}</p>
                          <p className="text-sm text-gray-500">Tue, 15 Jul, 2025</p>
                          <p className="text-sm">{flights[selectedFlight].origin}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                        <div className="text-center">
                          <p className="font-semibold">Non Stop</p>
                          <p className="text-sm text-gray-500">Tue, 15 Jul, 2025</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-xl">{flights[selectedFlight].duration}</p>
                          <p className="text-sm">{flights[selectedFlight].destination}</p>
                        </div>
                      </div>

                      {/* Flight Details */}
                      <div className="p-6 border-b">
                        <h3 className="font-bold mb-4">Flight Details</h3>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="font-semibold">Baggage</div>
                          <div className="font-semibold">Fare</div>
                          <div className="font-semibold">Policy</div>

                          <div>Flight</div>
                          <div></div>
                          <div></div>

                          <div>
                            {flights[selectedFlight].origin} - {flights[selectedFlight].destination}
                          </div>
                          <div>Cabin</div>
                          <div>Check-in</div>

                          <div></div>
                          <div>7 Kg</div>
                          <div>20 Kg</div>
                        </div>
                      </div>

                      {/* Sign In Section */}
                      <div className="p-6 border-b">
                        <p className="text-sm text-center text-blue-600 mb-4">
                          Sign In to book faster and unlock all deals
                        </p>
                        <h4 className="font-semibold mb-2">Have a coupon?</h4>
                      </div>

                      {/* Traveller Details */}
                      <div className="p-6">
                        <h3 className="font-bold mb-4">Enter Traveller Details</h3>
                        <div className="border rounded-md p-4">
                          <div className="flex justify-between items-center mb-4">
                            <span>Passenger 1</span>
                            <span className="text-sm text-gray-500">
                              Adult | Primary Contact
                            </span>
                          </div>

                          <p className="text-sm text-gray-500 mb-4">
                            Personal Details - As mentioned on your passport or government approved IDs
                          </p>

                          <div className="flex gap-4 mb-4">
                            <Button variant="outline" className="flex-1">
                              MR.
                            </Button>
                            <Button variant="outline" className="flex-1">
                              MS.
                            </Button>
                            <Button variant="outline" className="flex-1">
                              MRS.
                            </Button>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm text-gray-500 mb-1">
                                Given Name / First Name
                              </label>
                              <input type="text" className="w-full border rounded-md p-2" />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-500 mb-1">
                                Last Name
                              </label>
                              <input type="text" className="w-full border rounded-md p-2" />
                            </div>
                          </div>
                          <div className="p-4 bg-gray-50 flex flex-col sm:flex-row justify-end gap-4 mt-4">
                            <Button variant="outline" onClick={closeFlightDetails} className="w-full sm:w-auto">
                              Back
                            </Button>
                            <Button className="bg-[#ffc800] hover:bg-[#ffb700] text-black w-full sm:w-auto">
                              Continue Booking
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expandable flight details */}
                  <div className="border-t text-sm text-gray-600 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                      Partially Refundable <BiChevronDown size={16} />
                    </div>
                    <div
                      onClick={() => toggleExpand(idx)}
                      className="flex items-center gap-2 text-blue-600 cursor-pointer"
                    >
                      Flight Details{" "}
                      <BiChevronDown
                        size={16}
                        className={`${
                          expandedFlightIndex === idx ? "rotate-180" : ""
                        } transition-transform`}
                      />
                    </div>
                  </div>

                  {expandedFlightIndex === idx && (
                    <div className="border-t flex flex-col sm:flex-row text-sm">
                      <div className="w-full sm:w-1/2 p-4 border-r">
                        <div className="font-bold text-center text-[#1c1c1c]">
                          Flight Details
                        </div>
                        <div className="text-center bg-[#003366] text-white py-1 rounded-md w-fit mx-auto px-3 text-xs font-semibold">
                          {flight.origin} - {flight.destination}
                        </div>
                        <div className="flex justify-between mt-4">
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
                            <div className="text-gray-500 text-xs">Tue, 15 Jul, 2025</div>
                            <div className="text-xs">DAC</div>
                          </div>
                          <div className="text-xs text-center">
                            <ArrowRight className="mx-auto mb-1" size={18} />
                            {flight.duration}
                          </div>
                          <div>
                            <div className="font-semibold text-lg">19:35</div>
                            <div className="text-gray-500 text-xs">Tue, 15 Jul, 2025</div>
                            <div className="text-xs">CXB</div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full sm:w-1/2 p-4">
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
                          <span className="text-right font-bold">BDT 5,199</span>
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
        <div className="lg:w-1/4 w-full space-y-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-7">
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
