import React, { memo, useMemo } from 'react'
import HomeCarousel from '../Component/Core/HomeCarousel'
import Meal from '../Component/Core/Meal'
import Menu from '../Component/Core/Menu'
import Testimonial from '../Component/Core/Testimonial'
import Blog from '../Component/Core/Blog'
import Appoinment from '../Component/Core/Appoinment'
import Details from '../Component/Core/Details'
import Price from '../Component/Core/Price'
import Navbar from '../Component/Common/Navbar'
import Footer from '../Component/Common/Footer'

const Home = () => {
  // memo
  // const memo =useMemo()
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <Details />
      <Meal />
      <Testimonial />
      <Price />
      <Menu />
      <Blog />
      <Appoinment />
      <Footer/>
    </>
  )
}

export default Home