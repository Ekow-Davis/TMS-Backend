import React from 'react'

const StatusCards = ({imageLink, label, miniLabel, statistic}) => {
  return (
    <>
    <div className='w-52 h-32 rounded-md lg:w-1/3 lg:h-56 bg-custom-blue'>
        <div className='h-8 w-8 '>
            <img src='../Images/User_Profile_Placeholder.jpg' alt='Profile' />
        </div>
        <div>
            Requests Made
        </div>
        <div>
            6 
        </div>
        <div>
            This month
        </div>
    </div>
    </>
  )
}

export default StatusCards