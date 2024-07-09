import React from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className='bg-gray-200 h-16 px-4 flex justify-between items-center border-b border-gray-500'> 
      <div className='relative'>
        <FontAwesomeIcon icon={faSearch} className='text-gray-600 absolute top-1/2 size-5 -translate-y-1/2 left-3' />
        <input type='text' placeholder="Search" className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border-gray-400 rounded-md px-10" /></div>
      <div className='flex items-center gap-2 mr-5'>
        <FontAwesomeIcon icon={faBell} fontSize={20} />
        <FontAwesomeIcon icon={faMessage} fontSize={20} />
      </div>
<div>
<button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <Description>This will permanently deactivate your account</Description>
            <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
</div>

    </div>
    </>
  )
}

export default Navbar