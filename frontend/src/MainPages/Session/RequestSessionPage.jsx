import React from 'react'
import { useState } from 'react'
import Sidebar from '../Components/Layout/Sidebar'
import HorizontalScroll from '../Components/HorizontalScroll'
import { Link } from 'react-router-dom'
import StatusCards from '../Components/StatusCards'

const RequestSessionPage = ({ forms, deleteForm }) => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        
        <HorizontalScroll width="1100px">        
            <StatusCards
            label="Session Requests"
            statistic="2"
            miniLabel="This Month"
            />
            <StatusCards
            label="Session Requests"
            statistic="2"
            miniLabel="This Month"
            />          
          </HorizontalScroll>
        
        



        <Link to='./RequestSessionFormPage'>
          <button className='bg-custom-blue p-3 mx-2 my-2 rounded-md text-white'>
            Request Session
          </button>          
        </Link>

        <div>
            {forms.map((form, index) => (
              <div key={index}>
                <h3>Form {index + 1}</h3>
                <div>
                  <h4>User Information</h4>
                  {Object.entries(form.userInfoFormData).map(([key, value]) => (
                    <p key={key}>{key}: {value}</p>
                  ))}
                </div>
                <div>
                  <h4>Session Information</h4>
                  {Object.entries(form.sessionInfoFormData).map(([key, value]) => (
                    <p key={key}>{key}: {value}</p>
                  ))}
                </div>
                <button onClick={() => deleteForm(index)}>Delete</button>
              </div>
            ))}
          </div>

      </div>
    </div>
    
    </>
  )
}

export default RequestSessionPage