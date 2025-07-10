import React from 'react'
import BookingCarousel from '../BookingCarousel/BookingCarousel'
import GoLimitlessBanner from '../GoLimitlessBanner'
import HotDeals from '../HotDeals'
import StudentOfferBanner from '../StudentOfferBanner'
import SpecialOffers from '../SpecialOffers'

function Home() {
  return (
    <div>
      <BookingCarousel></BookingCarousel>
      <GoLimitlessBanner/>
      <HotDeals/>
      <StudentOfferBanner/>
      <SpecialOffers></SpecialOffers>
    </div>
  )
}

export default Home
