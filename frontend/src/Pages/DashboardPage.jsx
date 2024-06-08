import React from 'react'
import Sidebar from '../Components/Sidebar'

const DashboardPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
    <div className='flex-grow'>DashboardPage</div>
    </div>
    
    </>
  )
}

export default DashboardPage