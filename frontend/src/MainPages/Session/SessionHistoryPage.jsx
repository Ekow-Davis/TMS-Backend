import React from 'react'
import Sidebar from '../../Components/Layout/Sidebar'

const SessionPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        Session History Page
      </div>
    </div>
    </>
  )
}

export default SessionPage