import React from 'react'
import Sidebar from '../Components/Sidebar'
import StatusCards from '../Components/StatusCards'

const DashboardPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        
        DashboardPage
      <StatusCards
      label="Sessions Remaining"
      miniLabel="This Month"
      statistic="23"
      />

      </div>
    </div>
    
    </>
  )
}

export default DashboardPage