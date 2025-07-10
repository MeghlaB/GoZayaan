import React, { useState } from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { FaArrowRight } from "react-icons/fa";

const allDeals = [
    {
        id: 1,
        category: "Flight",
        title: "Fly to Kathmandu with exclusive fares",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mmDnM7wC2o_kpN9RvEyyN3J4wKcGVVYy-Q&s",
    },
    {
        id: 2,
        category: "Flight",
        title: "Extra 10 KG Baggage Allowance on Flights to Japan",
        image: "https://pbs.twimg.com/media/FBUQHvHVcAISKMl.jpg",
    },
    {
        id: 3,
        category: "Flight",
        title: "Up to 30% Discount on All Destinations with Egypt Air",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwYun3vSumGKvig_oETxAfyOMUfn55QhLRA&s",
    },
    {
        id: 4,
        category: "Flight",
        title: "Save 25% on Emirates Flights to Europe",
        image: "https://photos.nomadicnotes.com/img/s/v-3/p2796525377-4.jpg",
    },
    {
        id: 5,
        category: "Flight",
        title: "Qatar Airways: Special fares to over 100 destinations",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFr3F3xA3hJelYwqlpH2BSh8fb6b7wtcetaw&s",
    },
    {
        id: 6,
        category: "Flight",
        title: "Singapore Airlines: Student Discount & Extra Baggage",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4fJdDMGlxsjPTWFwS6O0_e5lyM741dF4gsNegROxnqOn2YvkO7-jJNGGVD646mH0UDw&usqp=CAU",
    },
    {
        id: 7,
        category: "Flight",
        title: "Biman Bangladesh: Fares from Dhaka to Middle East",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Biman_Bangladesh_Airlines_Logo.svg",
    },
    {
        id: 8,
        category: "Flight",
        title: "Malaysia Airlines: Offers on Asia-Pacific Routes",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3e/Malaysia_Airlines_Logo.svg",
    },
    {
        id: 9,
        category: "Flight",
        title: "Turkish Airlines: Save on flights to Istanbul",
        image: "https://upload.wikimedia.org/wikipedia/en/2/26/Turkish_Airlines_logo_2019.svg",
    },
    {
        id: 10,
        category: "Flight",
        title: "Thai Airways: Bangkok Promo Fares",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Thai_Airways_Logo.svg",
    },
    {
        id: 11,
        category: "Flight",
        title: "Etihad Airways: Fly to UAE with great discounts",
        image: "https://upload.wikimedia.org/wikipedia/en/3/32/Etihad_Airways_Logo.svg",
    },
    {
        id: 12,
        category: "Flight",
        title: "Saudi Airlines: Book & Save for Hajj Season",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Saudia_logo.svg",
    },
    {
        id: 13,
        category: "Flight",
        title: "IndiGo: Domestic Fares Starting at ৳3000",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7b/IndiGo_Logo.svg",
    },
    {
        id: 14,
        category: "Flight",
        title: "AirAsia: Budget Flights Across Southeast Asia",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d3/AirAsia_New_Logo.svg",
    },
    {
        id: 15,
        category: "Flight",
        title: "Kuwait Airways: Save on flights to the Gulf",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Kuwait_Airways_logo_2016.svg",
    },
    {
        id: 16,
        category: "Hotel",
        title: "Book Cox’s Bazar Hotels with 30% Off",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Hotel_icon.svg",
    },
    {
        id: 17,
        category: "Hotel",
        title: "Luxury Stays in Dhaka: Save up to 40%",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Hotel_icon.svg",
    },
    {
        id: 18,
        category: "Visa",
        title: "Get Malaysia Visa in 5 Days",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Visa_Stamp_Icon.svg",
    },
    {
        id: 19,
        category: "Visa",
        title: "UAE Visa Processing Offer: Flat ৳200 Off",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Visa_Stamp_Icon.svg",
    },
    {
        id: 20,
        category: "Tour",
        title: "Explore Sundarbans: Package Starts at ৳9999",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Tourism_icon.svg",
    },
    {
        id: 21,
        category: "Tour",
        title: "Nepal Tour Package: Save ৳5000",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Tourism_icon.svg",
    },
    {
        id: 22,
        category: "Bus",
        title: "Green Line Bus Tickets: Up to 10% Off",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Bus_icon.svg",
    },
    {
        id: 23,
        category: "Bus",
        title: "Shohoz Bus: Book Online & Save More",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Bus_icon.svg",
    },
    {
        id: 24,
        category: "Launch",
        title: "Sundarban Launch Booking: Special Fares Available",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Ferry_icon.svg",
    },
    {
        id: 25,
        category: "Launch",
        title: "Dhaka to Barisal Launch Deals",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Ferry_icon.svg",
    }
];

const SpecialOffers = () => {
    const [filter, setFilter] = useState("All");
    const filteredDeals = filter === "All" ? allDeals : allDeals.filter((d) => d.category === filter);
    const categories = ["All", ...new Set(allDeals.map((deal) => deal.category))];

    return (
        <section className="bg-[#f1f6fc] py-8 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Title and Tabs */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[#0b0d4f] font-bold text-2xl">Special Offers</h2>
                    <div className="flex gap-3 bg-sky-100 p-2 rounded-3xl overflow-x-auto">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-4 py-1 text-sm font-medium rounded-full transition whitespace-nowrap ${filter === tab ? 'bg-white text-[#0b0d4f]' : 'text-[#0b0d4f] hover:bg-[#e2e8f0]'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Flicking Slider */}
                <Flicking
                    circular={false}
                    moveType="freeScroll"
                    align="prev"
                    bounce={30}
                    deceleration={0.0075}
                    className="pb-6"
                >
                    {filteredDeals.map((d) => (
                        <div
                            key={d.id}
                            className="mr-6 min-w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col"
                        >
                            <div className="h-50 flex items-center justify-center p-2 ">
                                <img
                                    src={d.image}
                                    alt={d.title}
                                    className="w-full h-full object-cover p-1 rounded-2xl"
                                />
                            </div>
                            <div className="p-4 flex-1 flex flex-col relative justify-between">
                                <h3 className="text-base font-semibold text-[#0b0d4f] mb-2">
                                    {d.title}
                                </h3>
                                {/* <button className="mt-auto bg-[#ffc107] hover:bg-[#e6b800] text-sm font-semibold text-[#0b0d4f] px-4 py-2 rounded-full flex items-center gap-1 transition">
                                    <FaArrowRight /> Learn More
                                </button> */}
                                <button className='bg-yellow-400 rounded-xl absolute -right-0 -bottom-4 p-2 '> Learn more</button>
                            </div>
                        </div>
                    ))}
                </Flicking>
            </div>
        </section>
    );
};

export default SpecialOffers;
