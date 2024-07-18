import React from 'react'
import SignInForm from '../../Components/SignInForm'

const SignInPage = () => {
  return (
    <>
    <div className='flex w-full h-screen'>

        <div className='hidden bg-custom-blue relative lg:flex h-full items-center w-1/2 justify-center'>
          <div className='flex absolute flex-col items-center justify-center'>
          <div className='relative z-10 text-white mb-2 text-3xl'>
          <img src='.\Images\main-logo-black-transparent.png' alt='Logo-Placeholder' className='animate-bounce'/>
        </div>
        </div>
          <div className='w-60 h-60 bg-gradient-to-tr to-custom-purple from-custom-blue animate-bounce rounded-full cursor-pointer' />
          <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'/>
        </div>

        <div className='w-full flex items-center justify-center border-2 border-x-custom-purple lg:w-1/2'>
            <SignInForm/>
        </div>

        
        
    </div>
    </>
  )
}

export default SignInPage