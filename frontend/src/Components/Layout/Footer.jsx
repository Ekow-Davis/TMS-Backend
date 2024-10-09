import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert("You have been successfully added to the Newsletter program");
      setEmail(''); // Clear the email input after submission
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <footer className="bg-custom-blue text-white py-6">
      <div className="mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">TMSServices</h2>
            <p>&copy; 2024 TMSServices. All rights reserved.</p>
          </div>

          {/* Footer navigation */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/AboutUs" className="hover:underline">About</Link>
            <Link to="/ContactUs" className="hover:underline">Contact Us</Link>
            <Link to="/" className="hover:underline">Terms of Service</Link>
            <Link to="/" className="hover:underline">Privacy Policy</Link>
          </div>

          {/* Newsletter */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-l-md border-none focus:outline-none text-black"
              />
              <button
                onClick={handleSubscribe}
                className="bg-custom-purple text-white px-4 py-2 rounded-r-md hover:bg-custom-hover"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social media */}
        <div className="flex justify-center space-x-6 mt-6">
          
            <i className="bx bxl-facebook-circle text-3xl"></i>
          
          
            <i className="bx bxl-twitter text-3xl"></i>
          
          
            <i className="bx bxl-linkedin text-3xl"></i>
          
          
            <i className="bx bxl-instagram text-3xl"></i>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
