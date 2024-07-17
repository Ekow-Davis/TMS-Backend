// src/components/HomeNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, UserIcon } from '@heroicons/react/24/outline';

const HomeNav = () => {
  return (
    <nav className="bg-transparent p-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-black font-bold text-2xl">
          TMSServices
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/dashboard" className="text-black hover:bg-[#8bc220] hover:text-white rounded-lg p-2 transition duration-300">
          Dashboard
        </Link>
        <Link to="/sessions" className="text-black hover:bg-[#8bc220] hover:text-white rounded-lg p-2 transition duration-300">
          Sessions
        </Link>
        <Link to="/payment-history" className="text-black hover:bg-[#8bc220] hover:text-white rounded-lg p-2 transition duration-300">
          Payment History
        </Link>
        <Link to="/help" className="text-black hover:bg-[#8bc220] hover:text-white rounded-lg p-2 transition duration-300">
          Help
        </Link>
        <Link to="/pricing" className="text-black hover:bg-[#8bc220] hover:text-white rounded-lg p-2 transition duration-300">
          Pricing
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <BellIcon className="h-6 w-6 text-black" />
        <UserIcon className="h-6 w-6 text-black" />
      </div>
    </nav>
  );
};

export default HomeNav;
