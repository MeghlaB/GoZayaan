import React, { useRef, useState } from "react";

const GoLimitlessBanner = () => {
  const dialogRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideo = () => {
    setVideoUrl("https://www.youtube.com/embed/cbo3MN0jauc?autoplay=1");
    dialogRef.current?.showModal();
  };

  const closeVideo = () => {
    dialogRef.current?.close();
    setVideoUrl(""); // stop video when modal closes
  };

  return (
    <div className="w-full px-4 mt-10">
      {/* Banner Section */}
      <div
        className="w-full max-w-[1150px] mx-auto rounded-2xl bg-cover bg-center flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-10 sm:py-0 sm:h-[200px]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/man-deserted-island-isolated_198067-774362.jpg')",
        }}
      >
        {/* Text Section */}
        <div className="text-black text-3xl sm:text-4xl md:text-5xl font-bold flex items-center gap-3">
          <span className="border-4 border-white rounded-full px-4 py-1">GO</span>
          <span className="tracking-wide">LIMITLESS</span>
        </div>

        {/* Watch Button */}
        <button
          onClick={openVideo}
          className="flex items-center justify-center bg-white bg-opacity-20 border border-white text-black text-base sm:text-lg font-medium px-6 py-2 rounded-full hover:bg-opacity-30 transition"
        >
          Watch the film
          <span className="ml-2 text-xl sm:text-2xl">➔</span>
        </button>
      </div>

      {/* DaisyUI Modal */}
      <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-w-4xl">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded"
              src={videoUrl}
              title="Go Limitless Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
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
};

export default GoLimitlessBanner;
