import React from 'react'
import img from '../../assets/images/laptop.png'
import logo from '../../assets/images/send-mail.png'

export default function Advertisement() {
  return (
    <div className='h-[100%] w-[100%] flex flex-col justify-center items-center'>
      <div className='relative'>
      <img className='h-64' src={img}></img>
      <img className='h-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={logo}></img>
      </div>
      <div className='text-3xl font-semibold font-Roboto tracking-normal'>Download ChatBox for Windows</div>
      <div className='w-[50%] mt-4 text-center text-[#8696A0] font-Poppins text-sm'>Experience lightning-fast messaging on your Windows device with our app.</div>
    </div>
  )
}
