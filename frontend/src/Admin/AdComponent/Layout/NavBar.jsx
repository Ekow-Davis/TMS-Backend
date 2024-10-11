import React from 'react'
import '../../Dashboard/style.css';
import { Link } from 'react-router-dom';
import { 
  // Notifications as NotificationIcon, 
  Help as HelpIcon, 
  // MoreVert as MenuIcon 
} from '@mui/icons-material';

const NavBar = () => {
  return (

    <nav className="nav">
    <div className="logo">
      <i className="bx bxl-codepen"></i>
      <Link to="/" className='text-white' >TMSServices</Link>
    </div>

    <div className="nav-links">
      <Link to="/Admin/Dashboard">Dashboard</Link>
      <Link to="/Admin/Session">Sessions</Link>
      <Link to="/Admin/Jobs">Jobs</Link>
      <Link to="/Admin/Students">Student</Link>
      <Link to="/Admin/Tutors">Tutor</Link>
      <Link to="/Admin/Notification">Notifications</Link>
      <Link to="/Admin/Settings">Settings</Link>
    </div>

    <div className="right-section">
      {/* <i className="bx bx-bell">
        <NotificationIcon />
      </i> */}
      <i className="bx bx-search">
        <Link to="/Admin/Feedback"><HelpIcon /></Link>
      </i>
      <div className="profile">
        <div className="info">
          <img src="../Images/Admin/profileAd.jpg" alt="Profile" />
          <div>
            <p className='font-semibold'>User's Name</p>
            <p>1st Rank Admin</p>
          </div>
        </div>
        <i className="bx bx-chevron-down"></i>
      </div>
    </div>
  </nav>
  )
}

export default NavBar