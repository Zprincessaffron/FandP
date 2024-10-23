import React from 'react'
import Footer from '../components/Footer/Footer'
import TopReviews from '../components/TopReview/TopReviews'
import BestSelling from '../components/BestSeller/BestSelling'
import SoulMate from '../components/Soulmate/SoulMate'
import Occasion from '../components/Occasion/Occasion'
import Feature from '../components/Features/Feature'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Feature/>
    <Occasion/>
    <SoulMate/>
    <BestSelling/>
    <TopReviews/>
    <Footer/>
    </>
  )
}

export default LandingPage
