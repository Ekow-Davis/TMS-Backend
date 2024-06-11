import React from 'react'

const StatusCards = ({imageLink, label, miniLabel, statistic}) => {
  return (
    <>
    <div className='w-52 h-32 rounded-md lg:w-1/3 lg:h-56 bg-custom-blue p-4 relative'>
        <div className='text-3xl text-gray-600 mb-2'>
            {label}
        </div>
        <hr className='border-gray-300 mb-3 mt-1 h-3' />
        <div className='text-4xl font-extrabold text-white'>
            {statistic}
        </div>
        <div className='text-md text-amber-100 absolute bottom-4 right-6'>
            {miniLabel}
        </div>
    </div>

    </>
  )
}

export default StatusCards