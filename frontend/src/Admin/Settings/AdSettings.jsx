import React from 'react'
import '../Dashboard/style.css';
import NavBar from '../AdComponent/Layout/NavBar';

const AdSettings = () => {
  return (
    <>
    <div className="top-container">
      {/* Navbar */}
      <NavBar />

      {/* Status */}
      <section className="status">
        <div className="header">          
          <h4>Weekly Activity</h4>
        </div>
        
      </section>
      
    </div>
    {/* Settings Main Body */}
    <div>
        <img src="../Images/Admin/coming-soon.svg" alt='Coming-soon'/>        
      </div>
    </>
  )
}

export default AdSettings