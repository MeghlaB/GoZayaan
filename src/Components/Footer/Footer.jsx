import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000066] text-white text-sm px-4 md:px-10 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Discover */}
        <div>
          <h4 className="font-semibold mb-3">Discover</h4>
          <ul className="space-y-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Talent & Culture</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">EMI Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h4 className="font-semibold mb-3">Payment Methods</h4>
          <div className="flex flex-wrap gap-2">
            {[
              { src: "https://i.ibb.co/spxjJM1J/download-10.jpg", alt: "Visa" },
              { src: "https://i.ibb.co/R4zSt8v9/download-7.png", alt: "Amex" },
              { src: "https://i.ibb.co/4ZHdJsW2/download-8.png", alt: "MasterCard" },
              { src: "https://i.ibb.co/5htG3pZ8/download-9.png", alt: "UnionPay" },
              { src: "https://i.ibb.co/S4VDtX1G/download-11.jpg", alt: "VisaClub" },
              { src: "https://i.ibb.co/Tx77ys8C/download-12.jpg", alt: "DBBL" },
              { src: "https://i.ibb.co/2YmqDrfQ/download-10.png", alt: "TakaPay" },
              { src: "https://i.ibb.co/b5XPrhPz/download-11.png", alt: "bKash" },
              { src: "https://i.ibb.co/CpjdB9yX/download-12.png", alt: "Nagad" },
              { src: "https://i.ibb.co/21CH7qnC/download-13.jpg", alt: "Tap" }
            ].map((item, i) => (
              <img
                key={i}
                src={item.src}
                alt={item.alt}
                className="h-8 w-auto bg-white p-1 rounded-sm shadow"
              />
            ))}
          </div>
        </div>

        {/* Need Help + Experience Center */}
        <div>
          <h4 className="font-semibold mb-3">Need Help ?</h4>
          <p className="mb-4">
            We're here for you 24/7! Reach out to us through Messenger or call anytime, day or night, for the support you need.
          </p>
          <h4 className="font-semibold mb-1">Experience Center</h4>
          <p>
            Sheltech Ayaan,<br />
            House 58, Road 6 & 11,<br />
            Block C, Level 2, Banani, Dhaka
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="mb-3">
            info@gozayaan.com<br />
            +88 09678 332211
          </p>
          <div className="flex space-x-3 text-lg">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="https://i.ibb.co/4RjhPzZz/download-9.jpg" alt="GoZayaan Logo" className="h-6" />
          <span className="text-white font-medium">gozayaan</span>
        </div>
        <p className="text-xs">© Copyright GoZayaan Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
