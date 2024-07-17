import React from 'react'
import Sidebar from '../../Components/Layout/Sidebar'

const MessagePage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        Messaging/chat page
      </div>
    </div>
    </>
  )
}

export default MessagePage