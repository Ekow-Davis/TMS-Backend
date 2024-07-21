// src/Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faDoorOpen, faComment, faBell, faCreditCard, faUser, faCalendar, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Bars3Icon, BookOpenIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileToggle = () => setIsMobileOpen(!isMobileOpen);
  const handleDesktopToggle = () => setExpanded(!expanded);
  const handleLogout = () => setIsOpen(true);

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
      case '/Message':
        setActiveItem('Message');
        break;
      case '/Profile':
        setActiveItem('Profile');
        break;
      case '/Help':
        setActiveItem('Help');
        break;
      default:
        setActiveItem(null);
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <div className="md:hidden flex justify-between items-center p-4">
        <button onClick={handleMobileToggle}>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <aside className={`fixed inset-0 z-40 transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:transform-none md:relative md:translate-x-0 transition-transform duration-200 ease-in-out md:w-${expanded ? '72' : '24'}`}>
        <div className="flex items-center justify-between p-4">
          <button onClick={handleDesktopToggle} className="hidden md:block">
            {expanded ? <img src="../Images/main-logo-black-transparent.png" alt="Logo" className="h-32 ml-12 items-center justify-center" /> : <BookOpenIcon className="h-6 w-6 my-10 justify-center items-center text-center" />}
          </button>
          <button onClick={handleMobileToggle} className="md:hidden">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-2">
          <ul>
            <hr size="2" />
            <li>
              <Link to="/Dashboard" className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Dashboard' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}>
                <FontAwesomeIcon icon={faCubes} className="ml-3 mr-10" />
                {expanded && "Dashboard"}
              </Link>
            </li>
            <li>
              <Link to="/Sessions" className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'SessionsHistory' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}>
                <FontAwesomeIcon icon={faCalendar} className="ml-3 mr-11" />
                {expanded && "Sessions"}
              </Link>
            </li>
            <li>
              <Link to="/PaymentHistory" className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'PaymentHistory' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}>
                <FontAwesomeIcon icon={faCreditCard} className="ml-3 mr-10" />
                {expanded && "Payment"}
              </Link>
            </li>
            <li>
              <Link to="/Notification" className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Notification' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}>
                <FontAwesomeIcon icon={faBell} className="ml-4 mr-10" />
                {expanded && "Notification"}
              </Link>
            </li>
            <li>
              <Link to="/Message" className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Message' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}>
                <FontAwesomeIcon icon={faComment} className="ml-4 mr-10" />
                {expanded && "Message"}
              </Link>
            </li>
            <li>
              <Link to="/Profile" className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Profile' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}>
                <FontAwesomeIcon icon={faUser} className="ml-4 mr-10" />
                {expanded && "Profile"}
              </Link>
            </li>
            <li>
              <Link to="/Help" className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Help' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}>
                <FontAwesomeIcon icon={faInfoCircle} className="ml-4 mr-9" />
                {expanded && "Help"}
              </Link>
            </li>
            <li>
              <div onClick={handleLogout} className="block text-xl my-1 py-3 px-5 rounded-md ml-2 mr-2 text-red-400 hover:bg-red-100">
                <FontAwesomeIcon icon={faDoorOpen} className="ml-4 mr-8" />
                {expanded && "Log Out"}
              </div>
            </li>
          </ul>
        </nav>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out transform">
                <DialogTitle className="font-bold">Deactivate account</DialogTitle>
                <Description>This will permanently deactivate your account</Description>
                <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                <div className="flex gap-4">
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                  <Link to="/">
                    <button className="text-red-400" onClick={() => setIsOpen(false)}>Sign Out</button>
                  </Link>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </aside>
    </>
  );
};

export default Sidebar;
