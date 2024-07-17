import React from 'react'
import Sidebar from '../../Components/Layout/Sidebar'

const NotificationPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        Notification Panel Page
      </div>
    </div>
    </>
  )
}

export default NotificationPage