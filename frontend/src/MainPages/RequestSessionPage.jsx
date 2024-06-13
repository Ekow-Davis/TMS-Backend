import React from 'react'
import Sidebar from '../Components/Sidebar'
import HorizontalScroll from '../Components/HorizontalScroll'
import { Link } from 'react-router-dom'
import StatusCards from '../Components/StatusCards'

const RequestSessionPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        
        <HorizontalScroll>
          <div>
            <StatusCards
            label="Session Requests"
            statistic="2"
            miniLabel="This Month"
            />
          </div>
          <div>
            <StatusCards
            label="Session Requests"
            statistic="2"
            miniLabel="This Month"
            />
          </div>
          <div>
            <StatusCards
            label="Session Requests"
            statistic="2"
            miniLabel="This Month"
            />
          </div>
          <div>
            <StatusCards
            label="Session Requests"
            statistic="2"
            miniLabel="This Month"
            />
          </div>
          <div>
            <StatusCards
            label="Session Requests"
            statistic="2"
            miniLabel="This Month"
            />
          </div>
          <div>
            <StatusCards
            label="Session Requests"
            statistic="2"
            miniLabel="This Month"
            />
          </div>        
          </HorizontalScroll>
        
        



        <Link to='./RequestSessionFormPage'>
          <button className='bg-custom-blue p-3 mx-2 my-2 rounded-md text-white'>
            Request Session
          </button>          
        </Link>

      </div>
    </div>
    
    </>
  )
}

export default RequestSessionPage