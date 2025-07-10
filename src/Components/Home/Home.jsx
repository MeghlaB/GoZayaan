import React from 'react'
import BookingCarousel from '../BookingCarousel/BookingCarousel'
import GoLimitlessBanner from '../GoLimitlessBanner'
import HotDeals from '../HotDeals'
import StudentOfferBanner from '../StudentOfferBanner'

function Home() {
  return (
    <div>
      <BookingCarousel></BookingCarousel>
      <GoLimitlessBanner/>
      <HotDeals/>
      <StudentOfferBanner/>
    </div>
  )
}

export default Home
