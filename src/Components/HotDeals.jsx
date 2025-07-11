import React, { useRef } from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const deals = [
  {
    id: 1,
    discount: "18%",
    title: "Up to 18% Discount on Int’l Flight Bookings",
    description: "On base fare, for City Bank American Express® Platinum & Gold credit cards. Till 31 Dec’25.",
    code: "AMEX1825",
    image: "https://i.ibb.co/R4zSt8v9/download-7.png",
  },
  {
    id: 2,
    discount: "10%",
    title: "On Domestic Flight Booking",
    description: "On base fare, for bKash payment. Till 31 August’25.",
    code: "DOMB0725",
    image: "https://i.ibb.co/b5XPrhPz/download-11.png",
  },
  {
    id: 3,
    discount: "11%",
    title: "On Intl Flight Booking",
    description: "On base fare, for bKash payment. Till 31 Dec’25.",
    code: "INTB0725",
    image: "https://i.ibb.co/b5XPrhPz/download-11.png",
  },
  {
    id: 4,
    discount: "11%",
    title: "On International Flight Booking",
    description: "On base fare, for bKash payment. Till 31 August’25..",
    code: "INTB0725",
    image: "https://i.ibb.co/b5XPrhPz/download-11.png",
  },
  {
    id: 5,
    discount: "65%",
    title: "On Domestic Hotel Bookings for bKash",
    description: "On room rate, for bKash payment.Till 31 August’25.",
    code: "STAYB0725",
    image: "https://i.ibb.co/b5XPrhPz/download-11.png",
  },
  {
    id: 6,
    discount: "7%",
    title: 'on Domestic  International Flight Booking',
    description: "On base fare, for any card payments. Till 31 August’25..",
    code: "GOFLY0725",
    image: "https://i.ibb.co/b5XPrhPz/download-11.png",
  },
];



export default function HotDeals() {
  const flickingRef = useRef(null);

  const handlePrev = () => {
    flickingRef.current?.prev();
  };

  const handleNext = () => {
    flickingRef.current?.next();
  };

  return (
    <section className="bg-[#f1f6fc] py-8 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* Title and Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-[#0b0d4f] font-bold text-2xl">Hot Deals</h2>
          <div className="flex flex-wrap gap-3">
            {["All", "Flight", "Hotel", "Tour", "Others"].map((tab) => (
              <button
                key={tab}
                className="px-4 py-1 text-sm font-medium rounded-full bg-white text-[#0b0d4f] hover:bg-[#e2e8f0] transition"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Left Arrow (hide on mobile) */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaArrowLeft className="text-[#0b0d4f]" />
        </button>

        {/* Flicking Slider */}
        <Flicking
          ref={flickingRef}
          circular={false}
          moveType="freeScroll"
          align="prev"
          bounce={30}
          deceleration={0.0075}
          className="pb-6"
        >
          {deals.map((d) => (
            <div
              key={d.id}
              className="mr-4 min-w-[280px] sm:min-w-[350px] bg-white rounded-xl shadow flex flex-col transition hover:shadow-lg duration-300"
            >
              {/* Blue Discount Box */}
              <div className="w-full sm:w-[100px] h-[100px] bg-[#0d1d74] rounded-tl-xl flex flex-col justify-between p-2">
                <div className="w-10 h-10 bg-white text-[#0d1d74] font-bold text-sm rounded flex items-center justify-center">
                  {d.discount}
                </div>
                <img
                  src={d.image}
                  alt=""
                  className="w-12 h-12 object-contain self-end"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#0b0d4f] leading-snug mb-1">
                    {d.title}
                  </h3>
                  <p className="text-xs text-gray-600">{d.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="bg-blue-100 text-[#0b0d4f] text-xs font-medium px-3 py-1 rounded flex items-center gap-1">
                    <svg width="12" height="12" fill="currentColor">
                      <path d="M6 0L7.09 3.26H10.82L7.865 5.25l1.11 3.26L6 6.52 2.025 8.51l1.11-3.26L1.09 3.26h3.73L6 0z" />
                    </svg>
                    {d.code}
                  </span>
                  <button className="bg-[#ffc107] hover:bg-[#e6b800] text-xs font-semibold text-[#0b0d4f] px-3 sm:px-4 py-2 rounded-full flex items-center gap-1 transition">
                    <span className="text-sm font-bold">&lt;&gt;</span> Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Flicking>

        {/* Right Arrow (hide on mobile) */}
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaArrowRight className="text-[#11158a]" />
        </button>
      </div>
    </section>
  );
}
