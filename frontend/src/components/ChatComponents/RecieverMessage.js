import React from 'react'
import { Avatar } from '@mui/material'
import image from '../../assets/images/user-img.jpg'

export default function RecieverMessage({same}) {
  return (
    <div className='flex flex-row justify-start my-1'>
      <Avatar referrerPolicy="no-referrer" src={image}></Avatar>
     <div className='bg-[#FFFFFF] rounded-tr-xl ml-[1%] font-Roboto rounded-br-xl rounded-bl-xl box-border px-2 py-2'>Hello Sharel how are you?</div>
    </div>
  )
}
