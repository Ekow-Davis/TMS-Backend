import React from 'react'
import ImageCarousel from '../../Components/ImageCarousel'
import SignUpForm from '../../Components/SignUpForm'

const SignUpPage = () => {

  const images = [
    './Images/Login/LoginPic1.png',
    './Images/Login/LoginPic2.png',
    './Images/Login/LoginPic3.png',
    './Images/Login/LoginPic.png',
  ];

  return (
    <>
    <div className='flex w-full h-screen'>

        <div className='hidden bg-custom-blue relative lg:flex h-full items-center w-1/2 justify-center'>
        <div className='flex absolute flex-col items-center justify-center'>
        
        </div>
        <ImageCarousel images={images}/>
          {/* <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'/> */}
        </div>

        <div className='w-full flex items-center justify-center border-2 border-x-custom-purple lg:w-1/2'>
            <SignUpForm/>
        </div>

        
        
    </div>
    </>
  )
}

export default SignUpPage