import React, { useState, useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

// Dummy data
const cards = [
    {
        title: "কিভাবে হোটেল বুক করবেন?",
        image: "https://img.freepik.com/premium-photo/person-booking-hotels-using-cell-phone_1016675-3171.jpg",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube Embed URL
    },
    {
        title: "কিভাবে ডিসকাউন্ট পাবেন?",
        image: "https://img.freepik.com/premium-photo/person-booking-hotels-using-cell-phone_1016675-3171.jpg",
        youtubeUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
    },
    {
        title: "কিভাবে একাউন্ট তৈরি করবেন?",
        image: "https://img.freepik.com/premium-photo/person-booking-hotels-using-cell-phone_1016675-3171.jpg",
        youtubeUrl: "https://www.youtube.com/embed/yZv2daTWRZU",
    },
    {
        title: "Booking এর নিয়ম",
        image: "https://img.freepik.com/premium-photo/person-booking-hotels-using-cell-phone_1016675-3171.jpg",
        youtubeUrl: "https://www.youtube.com/embed/0zM3nApSvMg",
    },
    {
        title: "কিভাবে নিরাপদে Payment করবেন?",
        image: "https://img.freepik.com/premium-photo/person-booking-hotels-using-cell-phone_1016675-3171.jpg",
        youtubeUrl: "https://www.youtube.com/embed/cKZDdG9FTKY",
    },
];

function BookingCarousel() {
    const [modalUrl, setModalUrl] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    // State to control how many panels are visible at once
    const [panelsPerView, setPanelsPerView] = useState(3);

    // Effect hook to handle responsive panel display
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setPanelsPerView(1); // Small devices (e.g., mobile): 1 item per view
            } else if (width < 1024) {
                setPanelsPerView(2); // Medium devices (e.g., tablet): 2 items per view
            } else {
                setPanelsPerView(3); // Large devices (e.g., desktop): 3 items per view
            }
        };

        handleResize(); // Initial check on component mount
        window.addEventListener("resize", handleResize); // Add event listener for window resize

        // Cleanup function: remove event listener when component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    const openVideo = (url) => {
        // Ensure the URL is in a valid YouTube embed format.
        // If your dummy data URLs were like "https://www.youtube.com/watch?v=VIDEO_ID",
        // you would transform them to "https://www.youtube.com/embed/VIDEO_ID".
        // The current dummy data uses "http://googleusercontent.com/youtube.com/X",
        // which isn't a standard YouTube embed. I've updated the dummy data above
        // to use actual YouTube embed URLs for correct functionality.
        setModalUrl(url);
        setIsOpen(true);
    };

    const closeVideo = () => {
        setIsOpen(false);
        setModalUrl("");
    };

    return (
        <div className="bg-gray-100 px-4 py-6 relative z-0">
            {/* Carousel Section */}
            <Flicking
                circular={false} // Prevents infinite looping for simplicity, can be true if desired
                align="prev" // Aligns panels to the previous side
                moveType="snap" // Snaps panels into place
                panelsPerView={panelsPerView} // Dynamic: This prop controls how many items are shown per view based on screen size
                renderOnlyVisible // Optimizes performance by only rendering visible panels
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        onClick={() => openVideo(card.youtubeUrl)}
                        // Tailwind classes for responsive card styling:
                        // flex-shrink-0 ensures cards don't shrink
                        // w-full on small screens for single item view
                        // sm:w-[calc(50%-1rem)] for approximately two items on small-medium screens (accounting for mx-2)
                        // lg:w-[calc(33.33%-1rem)] for approximately three items on large screens
                        className="flicking-panel bg-white flex items-center pl-2 rounded-lg shadow-md mx-2 flex-shrink-0
                                    w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]
                                    cursor-pointer transition hover:shadow-lg"
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-40 h-30 rounded-xl object-contain mr-4"
                        />
                        <div>
                            <h3 className="text-xl font-semibold  text-gray-800 leading-snug">
                                {card.title}
                            </h3>
                            <button className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded hover:bg-yellow-300 transition">
                                ▶ দেখুন
                            </button>
                        </div>
                    </div>
                ))}
            </Flicking>

            {/* Modal Video Player (Responsive) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeVideo} // Closes modal when clicking outside the video
                >
                    <div
                        className="bg-white p-2 rounded shadow-lg w-full max-w-screen-md relative" // w-full takes full width, max-w-screen-md limits max width
                        // The aspect-video class is key here for responsive video embedding.
                        // It ensures the container maintains a 16:9 aspect ratio as its width changes.
                        // This prevents the video from being stretched or squished.
                        // For older Tailwind versions, you might need @tailwindcss/aspect-ratio plugin.
                        // For newer versions, it's built-in.
                        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside the video container
                    >
                        <div className="aspect-video w-full"> {/* Container for responsive aspect ratio */}
                            <iframe
                                className="w-full h-full rounded" // iframe takes full width and height of its parent (aspect-video div)
                                src={modalUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <button
                            onClick={closeVideo}
                            className="absolute top-2 right-2 text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700 text-lg leading-none"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookingCarousel;