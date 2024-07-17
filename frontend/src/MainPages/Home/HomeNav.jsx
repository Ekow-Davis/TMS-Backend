// src/components/HomeNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline';

const HomeNav = () => {
  return (
    <nav className="bg-white p-6 flex justify-between items-center fixed top-0 w-full z-10">
      <div className="flex items-center">
        <Link to="/" className="text-black font-bold text-2xl">
          TMSServices
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/Dashboard" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          Features
        </Link>
        <Link to="/Sessions" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          Student
        </Link>
        <Link to="/payment-history" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          Tutor
        </Link>
        <Link to="/Help" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          Support
        </Link>
        <Link to="/Pricing" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          Pricing
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/SignIn">
          <button className="flex transition duration-300 items-center space-x-2 hover:bg-custom-purple hover:text-white p-2 px-4 rounded-[20px]">
            <UserIcon className="h-6 w-6" />
            <p className="">Log In</p>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default HomeNav;
