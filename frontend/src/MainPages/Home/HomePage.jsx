import React from 'react'
import HomeNav from "./HomeNav"
import Footer from '../../Components/Layout/Footer'

const HomePage = () => {
  return (
    <>
    <HomeNav />
    <header className="bg-custom-blue text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to TMSServices</h1>
        <p className="text-xl mb-6">Efficient management for your teaching business</p>
        <button className="bg-[#8bc220] text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-[#7bb018]">
          Get Started
        </button>
      </header>
      <main className="p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3.</p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Step 1</h3>
              <p className="text-gray-600">Description of step 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Step 2</h3>
              <p className="text-gray-600">Description of step 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Step 3</h3>
              <p className="text-gray-600">Description of step 3.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage