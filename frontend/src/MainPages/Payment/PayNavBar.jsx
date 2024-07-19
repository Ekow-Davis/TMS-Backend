import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, UserIcon } from '@heroicons/react/24/outline';

const PayNavbar = () => {
  return (
    <div>
      <nav className="bg-transparent p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="space-x-6">
            <Link 
              to="/Dashboard" 
              className="text-black hover:bg-custom-blue hover:text-white rounded-lg p-2"
            >
              Dashboard
            </Link>
            <Link 
              to="/Sessions" 
              className="text-black hover:bg-custom-blue hover:text-white rounded-lg p-2"
            >
              Sessions
            </Link>
            <Link 
              to="/PaymentHistory" 
              className="text-black hover:bg-custom-blue hover:text-white rounded-lg p-2"
            >
              Payment
            </Link>
            <Link 
              to="/Help" 
              className="text-black hover:bg-custom-blue hover:text-white rounded-lg p-2"
            >
              Help
            </Link>
            <Link 
              to="/Pricing" 
              className="text-black hover:bg-custom-blue hover:text-white rounded-lg p-2"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <BellIcon className="h-6 w-6 text-black" />
            <UserIcon className="h-6 w-6 text-black" />
          </div>
        </div>
      </nav>
      <hr className="border-gray-500 border-2 mt-1" />
    </div>
  );
};

export default PayNavbar;
