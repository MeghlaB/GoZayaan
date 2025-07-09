
import React from 'react';

function Footer() {
    return (
        <footer className="p-6 text-white bg-blue-900">
            <div className="flex justify-between mx-auto max-w-7xl">
                <div>
                    <h3 className="mb-2 font-bold">Discover</h3>
                    <ul className='list-none'>
                        <li><a href="#" >Home</a></li>
                        <li><a href="#" >Terms</a></li>
                        <li><a href="#" >Talent & Culture</a></li>
                        <li><a href="#" >About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-2 font-bold">Payment Methods</h3>
                    <div className="flex space-x-2">
                        <img src="https://via.placeholder.com/40?text=VISA" alt="Visa" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=AMEX" alt="American Express" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=MasterCard" alt="MasterCard" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=UnionPay" alt="UnionPay" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=VisaClub" alt="VisaClub" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=DBBL" alt="DBBL" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=TakaPay" alt="TakaPay" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=iCash" alt="iCash" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=bKash" alt="bKash" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=Nagad" alt="Nagad" className="h-10" />
                        <img src="https://via.placeholder.com/40?text=Tap" alt="Tap" className="h-10" />
                    </div>
                </div>
                <div>
                    <h3 className="mb-2 font-bold">Need Help?</h3>
                    <p>We’re here for you 24/7! Reach out to us through Messenger or call anytime, day or night for the support you need.</p>
                    <h3 className="mt-4 mb-2 font-bold">Experience Center</h3>
                    <p>Sheltech Ayaan, House 58, Road 6 & 11, Block C, Level 2, Banani, Dhaka</p>
                </div>
                <div>
                    <h3 className="mb-2 font-bold">Contact</h3>
                    <p>info@gozayaan.com</p>
                    <p>+88 09678 332211</p>
                    <div className="flex mt-2 space-x-2">
                        <a href="#"><img src="https://via.placeholder.com/20?text=FB" alt="Facebook" className="h-5" /></a>
                        <a href="#"><img src="https://via.placeholder.com/20?text=IG" alt="Instagram" className="h-5" /></a>
                        <a href="#"><img src="https://via.placeholder.com/20?text=YT" alt="YouTube" className="h-5" /></a>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <div className="flex items-center">
                    <img src="https://via.placeholder.com/40?text=Logo" alt="Gozayaan Logo" className="h-8 mr-2" />
                    <span>Gozayaan</span>
                </div>
                <p className="text-sm">© Copyright GoZayaan Ltd.</p>
            </div>
        </footer>
    );
}

export default Footer;
