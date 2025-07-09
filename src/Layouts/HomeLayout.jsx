import React from 'react'
import Footer from '../Components/Footer/Footer'
 import FlightBanner from '../FlightBanner'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
    return (
        <div>
         <FlightBanner/>
<Outlet/>
            {/* Footer Section */}
            <Footer></Footer>
        </div>
    )
}

export default HomeLayout