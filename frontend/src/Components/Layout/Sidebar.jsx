import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faDoorOpen, faBell, faCreditCard, faUser, faCalendar, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Bars3Icon, BookOpenIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleMobileToggle = () => setIsMobileOpen(!isMobileOpen);
  const handleDesktopToggle = () => setExpanded(!expanded);
  
  const openLogoutDialog = () => setIsOpen(true);
  const closeLogoutDialog = () => setIsOpen(false);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('No token found. Please login first.');
      return;
    }
  
    // Remove the token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Alert the user that they are logged out
    alert('Successfully logged out');
    
    // Navigate the user to the homepage or login page
    navigate('/');


  //   if (!token) {
  //     alert('No token found. Please login first.');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('https://tms.ghanaglobalinitiative.com/api/logout', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     });

  //     if (response.ok) {
  //       localStorage.removeItem('token');
  //       alert('Successfully logged out');
  //       navigate('/');
  //     } else {
  //       alert('Logout failed. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Logout Error:', error);
  //     alert('An error occurred. Please try again later.');
  //   }
  };

  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case '/Dashboard':
        setActiveItem('Dashboard');
        break;
      case '/Sessions':
        setActiveItem('SessionsHistory');
        break;
      case '/PaymentHistory':
        setActiveItem('PaymentHistory');
        break;
      case '/Notification':
        setActiveItem('Notification');
        break;
      case '/Profile':
        setActiveItem('Profile');
        break;
      case '/ContactUs':
        setActiveItem('Help');
        break;
      default:
        setActiveItem(null);
        break;
    }
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex absolute p-4" onClick={handleMobileToggle}>
        <Bars3Icon className="h-6 w-6" />
      </div>
      
      {/* Sidebar */}
      <aside className={`fixed inset-0 z-40 transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative transition-transform duration-200 ease-in-out bg-[#F3F4F6] shadow-md md:w-${expanded ? '72' : '24'}`}>
        {/* Sidebar Header */}
        <div className="flex justify-between p-4">
          <button onClick={handleDesktopToggle} className="hidden md:block">
            {expanded ? (
              <img src="../Images/main-logo-black-transparent.png" alt="Logo" className="h-32 ml-12 items-center justify-center" />
            ) : (
              <BookOpenIcon className="h-6 w-6 my-10 justify-center items-center" />
            )}
          </button>
          <button onClick={handleMobileToggle} className="md:hidden">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        
        {/* Sidebar Links */}
        <nav className="mt-2">
          <ul>
            <hr />
            <li>
              <Link to="/Dashboard" className={`block text-xl py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Dashboard' ? 'bg-custom-purple text-white' : ''}`}>
                <FontAwesomeIcon icon={faCubes} className="ml-3 mr-10" />
                {expanded && 'Dashboard'}
              </Link>
            </li>
            <li>
              <Link to="/Sessions" className={`block text-xl py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'SessionsHistory' ? 'bg-custom-purple text-white' : ''}`}>
                <FontAwesomeIcon icon={faCalendar} className="ml-3 mr-11" />
                {expanded && 'Sessions'}
              </Link>
            </li>
            <li>
              <Link to="/PaymentHistory" className={`block text-xl py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'PaymentHistory' ? 'bg-custom-purple text-white' : ''}`}>
                <FontAwesomeIcon icon={faCreditCard} className="ml-3 mr-10" />
                {expanded && 'Payment'}
              </Link>
            </li>
            <li>
              <Link to="/Notification" className={`block text-xl py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Notification' ? 'bg-custom-purple text-white' : ''}`}>
                <FontAwesomeIcon icon={faBell} className="ml-4 mr-10" />
                {expanded && 'Notification'}
              </Link>
            </li>
            <li>
              <Link to="/Profile" className={`block text-xl py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Profile' ? 'bg-custom-purple text-white' : ''}`}>
                <FontAwesomeIcon icon={faUser} className="ml-4 mr-10" />
                {expanded && 'Profile'}
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className={`block text-xl py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Help' ? 'bg-custom-purple text-white' : ''}`}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-4 mr-9" />
                {expanded && 'Feedback'}
              </Link>
            </li>
            <li>
              <div onClick={openLogoutDialog} className="block text-xl py-3 px-5 rounded-md ml-2 mr-2 text-red-400 hover:bg-red-100 cursor-pointer">
                <FontAwesomeIcon icon={faDoorOpen} className="ml-4 mr-8" />
                {expanded && 'Log Out'}
              </div>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* Logout Confirmation Dialog */}
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLogoutDialog}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6">
                <Dialog.Title className="font-bold text-2xl text-center">Log Out</Dialog.Title>
                <div className="mt-4 text-center">
                  <p>Are you sure you want to sign out?</p>
                  <p>This will log you out of the system.</p>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <button onClick={closeLogoutDialog} className="text-lg">Cancel</button>
                  <button onClick={handleLogout} className="text-lg text-red-400">Sign Out</button>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Sidebar;
