import React from 'react'
import { Avatar } from '@mui/material'
import image from '../../assets/images/user-img.jpg'
import Badge from '../ChatComponents/util/Badge'

export default function ChatBar() {
  return (
    <div className='flex flex-row items-center justify-between px-[5%]'>
      <div className='flex flex-row items-center'>
    <Avatar alt="User-pic" sx={{width:48,height:48}} src={image} />
    <div className='flex flex-col ml-2'>
        <div className='font-bold font-Roboto text-sm'>Mas Listian</div>
        <div className="text-xs cursor-pointer text-[#979797]">Hey how are you?</div>
    </div>
      </div>
      <div className='flex flex-col items-end'>
        <div className='text-xs font-medium cursor-pointer text-[#979797]' >06:11 PM</div>
        <div className='mt-1'>
        <Badge>2</Badge>
        </div>
      </div>
</div>
  )
}
