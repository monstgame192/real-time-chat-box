import React from 'react'
import Card from '../components/Card'

export default function Service() {
  return (
    <div className='h-[100vh] px-[10%] py-[8%] flex flex-col items-center'>
      <div className='w-[60%]'>
      <div className='text-[#384055] text-6xl text-center font-semibold font-Poppins'>Get the best of all the features</div>
      </div>
      <div className=" mt-[5%] w-[70vw] grid grid-cols-2 gap-10">
        <Card title='Simple' description='With intuitive interface,ChatBox is so simple you already know how to use it'></Card>
        <Card title='Synced' description='ChatBox lets you acess your chats. Keeping it secured in databases'></Card>
        <Card title='Private' description='ChatBox messages are heavily encrypted and can self-destruct'></Card>
        <Card title='Secure' description='ChatBox keeps your messages safe from hacker attacks'></Card>
      </div>
    </div>
  )
}
