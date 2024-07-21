import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState, useEffect } from 'react'

const PSidebar = () => {
  let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    const location = useLocation();

    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
      const pathname = location.pathname;
      // Update activeItem based on the current pathname
      switch (pathname) {
        case '/Profile':
          setActiveItem('Profile');
          break;
        case '/Security':
          setActiveItem('Security');
          break;
        case '/Settings':
          setActiveItem('Settings');
          break;
        case '/AccountDetails':
          setActiveItem('AccountDetails');
          break;
        case '/Message':
          setActiveItem('Security');
          break;
        case '/ExportData':
          setActiveItem('ExportData');
          break;
        // Add more cases for other pages as needed
        default:
          
          break;
      }
    }, [location.pathname]);

  return (
    <div className="w-64 h-full bg-white p-4 shadow-md">
      <ul>
        <li className="mb-4">
          <Link to="/Profile" className={`${activeItem === 'Profile' ? 'text-sky-500' : 'text-custom-purple' }`}>My Profile</Link>
        </li>
        <li className="mb-4">
          <Link to="/Security" className={`${activeItem === 'Security' ? 'text-sky-500' : 'text-custom-purple' }`}>Security</Link>
        </li>
        <li className="mb-4">
          <Link to="/Settings"className={`${activeItem === 'Settings' ? 'text-sky-500' : 'text-custom-purple' }`}>Settings</Link>
        </li>
        <li className="mb-4">
          <Link to="/AccountDetails" className={`${activeItem === 'AccountDetails' ? 'text-sky-500' : 'text-custom-purple' }`}>Account Details</Link>
        </li>
        <li className="mb-4">
          <Link to="/NSettings" className={`${activeItem === 'Profile' ? 'text-sky-500' : 'text-custom-purple' }`}>Notifications</Link>
        </li>
        <li className="mb-4">
          <Link to="/ExportData" className={`${activeItem === 'ExportData' ? 'text-sky-500' : 'text-custom-purple' }`}>Export Data</Link>
        </li>
        <li className="mb-4 text-red-500" onClick={open}>
          Delete Account
        </li>
      </ul>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel 
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out transform"
              // className="max-w-lg space-y-4 border bg-[#D4ECD4] p-12"
            >
            <DialogTitle className="font-bold">
              Deactivate account
            </DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
            <div className="flex gap-4">
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            <Link to="/">
            <button className='text-red-400' onClick={() => setIsOpen(false)}>
              Sign Out
            </button>
            </Link>            
            </div>
                </DialogPanel>
                        </div>
                    </div>
              </Dialog>

    </div>
  );
};

export default PSidebar;
