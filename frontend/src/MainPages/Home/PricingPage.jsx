import React from 'react';
import HomeNav from './HomeNav';
import Footer from '../../Components/Layout/Footer'

const Pricing = () => {
  return (
    <>
    <HomeNav />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Our Pricing Plans</h1>
        <p className="text-gray-600">Choose the plan that fits your needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Starter</h2>
          <p className="text-gray-600 mb-4">$35 / month</p>
          <ul className="text-left mb-6">
            <li className="mb-2">Up to 75 students</li>
            <hr size="2" className=''/>
            <li className="mb-2">All core features</li>
            <li className="mb-2">Email support</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Choose Plan</button>
        </div>
        {/* Growing Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Growing</h2>
          <p className="text-gray-600 mb-4">$75 / month</p>
          <ul className="text-left mb-6">
            <li className="mb-2">Up to 200 students</li>
            <li className="mb-2">All core features</li>
            <li className="mb-2">Priority support</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Choose Plan</button>
        </div>
        {/* Established Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Established</h2>
          <p className="text-gray-600 mb-4">$150 / month</p>
          <ul className="text-left mb-6">
            <li className="mb-2">Unlimited students</li>
            <li className="mb-2">All core features</li>
            <li className="mb-2">24/7 support</li>
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Choose Plan</button>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Pricing;
