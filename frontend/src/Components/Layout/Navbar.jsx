import React from 'react'
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  return (
    <>
    <div className='bg-custom-blue h-16 px-4 flex justify-between items-center '> 
      <div className='relative'>
        <FontAwesomeIcon icon={faSearch} className='text-gray-600 absolute top-1/2 size-5 -translate-y-1/2 left-3' />
        <input type='text' placeholder="Search" className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border-gray-400 rounded-md px-10" /></div>
      <div className='flex items-center gap-2 mr-5'>
        <BellIcon className='w-7 h-7 mx-3' />
        <UserCircleIcon className='w-7 h-7 mx-3' />
      </div>
    </div>
    </>
  )
}

export default Navbar