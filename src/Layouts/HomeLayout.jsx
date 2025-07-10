import React from 'react'
import Footer from '../Components/Footer/Footer'
 import FlightBanner from '../FlightBanner'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
    return (
        <div>
         <FlightBanner/>
  <div className="min-h-[calc(100vh-288px)] mb-15 ">
        <Outlet />
      </div>
            {/* Footer Section */}
            <Footer></Footer>
        </div>
    )
}

export default HomeLayout