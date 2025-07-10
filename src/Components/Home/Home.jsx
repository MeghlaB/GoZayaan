import React from 'react'
import BookingCarousel from '../BookingCarousel/BookingCarousel'
import GoLimitlessBanner from '../GoLimitlessBanner'
import HotDeals from '../HotDeals'
import StudentOfferBanner from '../StudentOfferBanner'
import SpecialOffers from '../SpecialOffers'
import OfferSlider from '../OfferSlider/OfferSlider'

function Home() {
  return (
    <div>
      <BookingCarousel></BookingCarousel>
      <GoLimitlessBanner/>
      <HotDeals/>
      <StudentOfferBanner/>
      <SpecialOffers></SpecialOffers>
      <OfferSlider></OfferSlider>
    </div>
  )
}

export default Home
