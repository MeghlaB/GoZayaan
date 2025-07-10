import { ArrowRight } from "lucide-react";

export default function FlightCard({ flight }) {
  return (
    <div className="rounded-xl overflow-hidden border shadow-sm bg-white text-sm">
      <div className="flex">
        {/* Flight Info */}
        <div className="flex-1 p-4 flex items-center gap-4">
          <img src={flight.logo} alt={flight.airline} className="w-10 h-6" />
          <div className="space-y-2">
            <div className="text-blue-900 font-medium">{flight.airline}</div>
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold text-blue-900">{flight.departureTime}</div>
              <div className="text-xs text-gray-400">Non-stop</div>
              <div className="text-xl font-bold text-blue-900">{flight.arrivalTime}</div>
              <div className="text-xs text-gray-400">{flight.duration}</div>
            </div>
            <div className="text-xs text-gray-500">{flight.origin} → {flight.destination}</div>
          </div>
        </div>

        {/* Price Section */}
        <div className="w-64 bg-blue-50 px-4 py-5 flex flex-col items-end justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span className="text-yellow-500 text-base">●</span> Get Points
          </div>
          <div className="text-right mt-2 space-y-1">
            <div className="text-xs text-blue-600">{flight.code}</div>
            <div className="text-xs text-gray-400 line-through">{flight.oldPrice}</div>
            <div className="text-xl font-bold text-blue-900">{flight.price}</div>
          </div>
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 transition text-sm font-semibold text-blue-900 px-6 py-2 rounded-md flex items-center">
            Select <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-t text-sm bg-gray-50">
        <div className="text-gray-600">Partially Refundable</div>
        <button className="text-blue-600 font-medium">Flight Details ⌄</button>
      </div>
    </div>
  );
}
