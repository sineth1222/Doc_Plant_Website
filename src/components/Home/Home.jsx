import React from 'react'
import Hero from '../Hero/Hero'
import AppStore from '../AppStore/AppStore'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <AppStore/>
      <Testimonials/>

    </div>
  )
}

export default Home
