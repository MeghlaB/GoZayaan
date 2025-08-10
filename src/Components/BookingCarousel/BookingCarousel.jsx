import React, { useState, useEffect, useRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const cards = [
  {
    title: "কিভাবে হোটেল বুক করবেন?",
    image: "https://img.freepik.com/premium-photo/person-booking-hotels-using-cell-phone_1016675-3171.jpg",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
  const dialogRef = useRef(null);
  const [panelsPerView, setPanelsPerView] = useState(3);
  const flickingRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPanelsPerView(1);
      } else if (width < 1024) {
        setPanelsPerView(2);
      } else {
        setPanelsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openVideo = (url) => {
    setModalUrl(url);
    dialogRef.current?.showModal();
  };

  const closeVideo = () => {
    dialogRef.current?.close();
    setModalUrl("");
  };

  const goNext = () => {
    flickingRef.current?.next();
  };

  const goPrev = () => {
    flickingRef.current?.prev();
  };

  return (
    <div className="bg-gray-100 px-4 py-6 relative z-0 mt-10 max-w-6xl mx-auto">
    
      <button
        onClick={goPrev}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-200"
      >
        <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-20 hover:bg-gray-200"
      >
        <ArrowRightIcon className="w-6 h-6 text-gray-600" />
      </button>

 
      <Flicking
        ref={flickingRef}
        circular={true}
        align="prev"
        moveType="snap"
        panelsPerView={panelsPerView}
        renderOnlyVisible
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flicking-panel bg-white flex items-center pl-2 rounded-lg shadow-md mx-2 flex-shrink-0
                       w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]
                       transition hover:shadow-lg"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-40 h-30 rounded-xl object-contain mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 leading-snug">
                {card.title}
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openVideo(card.youtubeUrl);
                }}
                className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded hover:bg-yellow-300 transition"
              >
                ▶ দেখুন
              </button>
            </div>
          </div>
        ))}
      </Flicking>

      {/* DaisyUI Modal */}
      <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-w-4xl">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded"
              src={modalUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={closeVideo}
                className="btn bg-red-600 text-white hover:bg-red-700"
              >
                ✕ close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default BookingCarousel;
