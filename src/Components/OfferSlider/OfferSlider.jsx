import React, { useRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const allDeals = [
    {
        id: 1,
        image: "https://storage.googleapis.com/gz-main-prod-main/media/campaign/img_87b2317d-7c61-4763-9752-e71e10509a64.jpg",
    },
    {
        id: 2,
        image: "https://storage.googleapis.com/gz-main-prod-main/media/campaign/img_e7c08925-77e9-4ef5-bf3f-43541576092a.jpg",
    },
    {
        id: 3,
        image: "https://storage.googleapis.com/gz-main-prod-main/media/campaign/img_773237e2-6fa5-405f-abf7-231120ebb0f8.jpg",
    },
    {
        id: 4,
        image: "https://storage.googleapis.com/gz-main-prod-main/media/campaign/img_3cad8478-4139-4c38-a26c-fb63415a67e0.jpg",
    },
    {
        id: 5,
        image: "https://storage.googleapis.com/gz-main-prod-main/branding/freatured_ad/emi-lg.jpg",
    },
    {
        id: 6,
        image: "https://storage.googleapis.com/gz-main-prod-main/branding/freatured_ad/homepage-lg-int-hotel.png",
    },
];

function OfferSlider() {
    const flickingRef = useRef(null);

    const handlePrev = () => {
        if (flickingRef.current) {
            flickingRef.current.prev();
        }
    };

    const handleNext = () => {
        if (flickingRef.current) {
            flickingRef.current.next();
        }
    };

    return (
        <section className="bg-[#f1f6fc] py-8 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
         
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-100"
                >
                    <FaChevronLeft className="text-blue-800" />
                </button>

                <Flicking
                    circular={false}
                    moveType="freeScroll"
                    align="prev"
                    bounce={30}
                    deceleration={0.0075}
                    className="pb-6"
                    ref={flickingRef}
                >
                    {allDeals.map((d) => (
                        <div
                            key={d.id}
                            className="mr-6 min-w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col"
                        >
                            <div className="h-50 flex items-center justify-center p-2 ">
                                <img
                                    src={d.image}
                                    alt={`deal-${d.id}`}
                                    className="w-full h-full object-cover p-1 rounded-2xl"
                                />
                            </div>
                        </div>
                    ))}
                </Flicking>

        
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-100"
                >
                    <FaChevronRight className="text-blue-800" />
                </button>
            </div>
        </section>
    );
}

export default OfferSlider;
