import React from 'react'

const StatusCards = ({imageLink, label, miniLabel, statistic}) => {
  return (
    <>
    <div className='w-52 mx-6 my-2 h-32 rounded-md lg:w-1/3 lg:h-56 bg-custom-blue relative'>
        <div className='mx-2 p-3 font-bold text-2xl text-gray-600 my-3'>
            {label}
        </div>
        <hr className='bg-gray-200 mb-3 mt-3 h-4' />
        <div className='text-4xl absolute font-extrabold text-white right-6'>
            {statistic}
        </div>
        <div className='text-md text-amber-100 absolute bottom-6 right-12'>
            {miniLabel}
        </div>
    </div>

    </>
  )
}

export default StatusCards