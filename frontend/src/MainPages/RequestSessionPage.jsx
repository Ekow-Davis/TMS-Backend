import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import RequestSessionFormPage from '../TransitionPages/RequestSessionFormPage'

const RequestSessionPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        <Link to='./RequestSessionFormPage'>
        Request Session
        </Link>
        RequestSessionPage
      </div>
    </div>
    
    </>
  )
}

export default RequestSessionPage