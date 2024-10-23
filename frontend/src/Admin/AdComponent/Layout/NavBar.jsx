import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Help as HelpIcon, Person as PersonIcon, Settings as SettingsIcon, Logout as LogoutIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import '../../Dashboard/style.css';

const NavBar = () => {
  const navigate = useNavigate();

  // Handle the logout logic
  const handleLogout = () => {
    localStorage.removeItem('token'); // remove token
    localStorage.removeItem('user');
    navigate('/'); // Redirect to homepage
    alert('Successfully logged out'); // Alert the user    
  };

  return (
    <nav className="nav">
      <div className="logo">
        <i className="bx bxl-codepen"></i>
        <Link to="/" className="text-white">TMSServices</Link>
      </div>

      <div className="nav-links">
        <Link to="/Admin/Dashboard">Dashboard</Link>
        <Link to="/Admin/Session">Sessions</Link>
        <Link to="/Admin/Jobs">Jobs</Link>
        <Link to="/Admin/Students">Student</Link>
        <Link to="/Admin/Tutors">Tutor</Link>
        <Link to="/Admin/Notification">Notifications</Link>        
      </div>

      <div className="right-section">
        <i className="bx bx-search">
          <Link to="/Admin/Feedback"><HelpIcon /></Link>
        </i>

        <div className="profile relative">
          

          <Menu as="div" className="relative">
            <Menu.Button>
              <div className='flex'>
              <div className="info cursor-pointer">
                <img src="../Images/Admin/profileAd.jpg" alt="Profile" />
                <div>
                  <p className="font-semibold">User's Name</p>
                  <p>1st Rank Admin</p>
                </div>
              </div>
              <i className="bx bx-chevron-down">
                <ExpandMoreIcon className='text-white' />
              </i>
              </div>
            </Menu.Button>
             
            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/Profile"
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } flex items-center px-4 py-2 text-sm text-gray-700`}
                  >
                    <PersonIcon className="mr-3" /> Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/Admin/Settings"
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } flex items-center px-4 py-2 text-sm text-gray-700`}
                  >
                    <SettingsIcon className="mr-3" /> Settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } flex items-center px-4 py-2 text-sm text-red-600 w-full`}
                  >
                    <LogoutIcon className="mr-3" /> Logout
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
