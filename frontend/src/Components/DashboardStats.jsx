import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const DashboardStats = () => {
  return (
    <>
    <div className='flex gap-4'>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex item-center justify-center bg-sky-500'>
          <ShoppingBagIcon className='h-9 mt-1 text-white' />
        </div>
        <div>
          <span className='text-sm text-gray-500 font-light ml-2' >Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold ml-2'> $34525.60 </strong>
            <span className='text-sm text-green-500 pl-2'> +234 </span>
          </div>
        </div>
      </BoxWrapper>
      
      <BoxWrapper> 
      <div className='rounded-full h-12 w-12 flex item-center justify-center bg-orange-500'>
          <ShoppingBagIcon className='h-9 mt-1 text-white' />
        </div>
        <div>
          <span className='text-sm text-gray-500 font-light ml-2'>Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold ml-2'> $34525.60 </strong>
            <span className='text-sm text-green-500 pl-2'> +234 </span>
          </div>
      </div>
      </BoxWrapper>
      <BoxWrapper> 
      <div className='rounded-full h-12 w-12 flex item-center justify-center bg-yellow-500'>
          <ShoppingBagIcon className='h-9 mt-1 text-white' />
        </div>
        <div>
          <span className='text-sm text-gray-500 font-light ml-2' >Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold ml-2'> $34525.60 </strong>
            <span className='text-sm text-green-500 pl-2'> +234 </span>
          </div>
      </div>
      </BoxWrapper>
      <BoxWrapper> 
      <div className='rounded-full h-12 w-12 flex item-center justify-center bg-green-500'>
          <ShoppingBagIcon className='h-9 mt-1 text-white' />
        </div>
        <div>
          <span className='text-sm text-gray-500 font-light ml-2' >Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold ml-2'> $34525.60 </strong>
            <span className='text-sm text-green-500 pl-2'> +234 </span>
          </div>
      </div>
      </BoxWrapper>
    </div>
    </>
  )
}

export default DashboardStats

function BoxWrapper({ children }) {
  return <div className='bg-white rounded-sm p-4 flex-1 border-gray-300 flex items-center'> {children} </div>
}