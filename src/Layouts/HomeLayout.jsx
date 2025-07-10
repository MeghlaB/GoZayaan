import React from 'react'
import Footer from '../Components/Footer/Footer'
import FlightBanner from '../FlightBanner'
import { Outlet } from 'react-router-dom'
import BookingCarousel from '../Components/BookingCarousel/BookingCarousel'
import HotDeals from '../Components/HotDeals/HotDeals'

function HomeLayout() {
    return (
        <div>
            <FlightBanner />
            <div className="min-h-[calc(100vh-288px)] mb-15 ">
                <Outlet />
            </div>
            {/* Carousel section  */}
            <BookingCarousel></BookingCarousel>

            {/* Hot Deals carousel */}
            <HotDeals></HotDeals>

            {/* Footer Section */}
            <Footer></Footer>
        </div>
    )
}

export default HomeLayout