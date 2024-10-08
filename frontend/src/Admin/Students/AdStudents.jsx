import React from 'react'
import '../Dashboard/style.css';
import { Notifications as NotificationIcon, Search as SearchIcon, 
  // MoreVert as MenuIcon 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const AdStudents = () => {
  return (
    <>
    <div className="top-container">
      {/* Navbar */}
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
          <Link to="/Admin/Employee">Employee</Link>
          <Link to="/Admin/Settings">Settings</Link>
        </div>

        <div className="right-section">
          <i className="bx bx-bell">
            <NotificationIcon />
          </i>
          <i className="bx bx-search">
            <SearchIcon />
          </i>
          <div className="profile">
            <div className="info">
              <img src="assets/profile.png" alt="Profile" />
              <div>
                <p className='font-semibold'>User's Name</p>
                <p>1st Rank Admin</p>
              </div>
            </div>
            <i className="bx bx-chevron-down"></i>
          </div>
        </div>
      </nav>

      {/* Status */}
      <section className="status">
        <div className="header">          
          <h4>Weekly Activity</h4>
        </div>
        
      </section>
      
    </div>

    {/* Session Main Body */}
    <div>
        afewh
    </div>
    </>
  )
}

export default AdStudents