import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BestSellers from './components/BestSellers'
import NewArrivals from './components/NewArrivals'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BestSellers />
      <NewArrivals />
      <WhyChooseUs />
      <Footer />
      <h1>Stanley</h1>
    </div>
  )
}

export default App