import React from 'react'
import HomeNav from './HomeNav'
import FadeIn from '../../Components/FadeIn'

const AboutUsPage = () => {
  return (
    <>
    <HomeNav />
      <header className="bg-custom-blue pt-44 text-white text-center py-20">
        <FadeIn>
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl mb-6">Who we are, our vision and mission</p>
          <button className="bg-custom-purple text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-custom-blue">
            Get Started
          </button>
        </FadeIn>
      </header>
      
    </>
  )
}

export default AboutUsPage