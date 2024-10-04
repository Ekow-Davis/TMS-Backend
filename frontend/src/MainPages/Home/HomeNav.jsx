import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { UserIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';

const HomeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 flex justify-between items-center fixed top-0 w-full z-10">
      <div className="flex items-center">
        <Link to="/" className="text-black font-bold text-2xl">
          TMSServices
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/AboutUs" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          About Us
        </Link>
        <Link to="/Student" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          Student
        </Link>
        <Link to="/Tutor" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          Tutor
        </Link>
        <Link to="/Help" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          Support
        </Link>
        <Link to="/Pricing" className="text-black hover:bg-custom-purple hover:text-white rounded-lg p-2 transition duration-300">
          Pricing
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/SignIn">
          <button className="hidden md:flex transition duration-300 items-center space-x-2 hover:bg-custom-purple hover:text-white p-2 px-4 rounded-[20px]">
            <UserIcon className="h-6 w-6" />
            <p>Log In</p>
          </button>
        </Link>
        <div className="md:hidden">
          <Menu>
            <MenuButton
              className="inline-flex items-center p-2 rounded-md text-black hover:text-white hover:bg-custom-purple"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6" />
              <ChevronDownIcon className="h-5 w-5 ml-1" />
            </MenuButton>
            <MenuItems className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 ${isMenuOpen ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'}`}>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/AboutUs"
                    className={`${active ? 'bg-custom-purple text-white' : 'text-black'} block px-4 py-2 text-sm`}
                  >
                    About Us
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/Student"
                    className={`${active ? 'bg-custom-purple text-white' : 'text-black'} block px-4 py-2 text-sm`}
                  >
                    Student
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/Tutor"
                    className={`${active ? 'bg-custom-purple text-white' : 'text-black'} block px-4 py-2 text-sm`}
                  >
                    Tutor
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/Help"
                    className={`${active ? 'bg-custom-purple text-white' : 'text-black'} block px-4 py-2 text-sm`}
                  >
                    Support
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/Pricing"
                    className={`${active ? 'bg-custom-purple text-white' : 'text-black'} block px-4 py-2 text-sm`}
                  >
                    Pricing
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/SignIn"
                    className={`${active ? 'bg-custom-purple text-white' : 'text-black'} block px-4 py-2 text-sm`}
                  >
                    Log In
                  </Link>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
