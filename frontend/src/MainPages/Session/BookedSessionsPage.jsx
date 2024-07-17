import React from 'react'
import Sidebar from '../../Components/Layout/Sidebar'

const BookedPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        Booked Session Page
      </div>
    </div>
    </>
  )
}

export default BookedPage