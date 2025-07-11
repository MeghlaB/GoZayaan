import React from "react";

const StudentOfferBanner = () => {
  return (
    <div className="w-full px-4 mt-10 flex justify-center">
      <div className="w-full max-w-[1150px] rounded-xl overflow-hidden shadow-md">
        <div className="w-full aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4] lg:aspect-[16/3.5]">
          <img
            src="https://storage.googleapis.com/gz-main-prod-main/media/campaign/img_3d4209b2-6d53-41bf-a57d-03162e500ef9.png"
            alt="Student Offer Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentOfferBanner;
