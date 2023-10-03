import React from 'react'
import TopBar from '../components/ChatComponents/TopBar';
import ChatBar from '../components/ChatComponents/ChatBar';
import ChatTitle from '../components/ChatComponents/ChatTitle';
import ChatMessages from '../components/ChatComponents/ChatMessages';
import Type from '../components/ChatComponents/Type';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { InitializeChat } from '../services/Actions/Chat/action';
import BasicModal from '../components/ChatComponents/BasicModel';
import { SetActiveChat } from '../services/Actions/Chat/action';
import ChatDetails from '../components/ChatComponents/ChatDetails';
import Loading from './util/Loading';
export default function HomeChat() {

  const state=useSelector((state)=>state.chat.AllChats)
  const dispatch=useDispatch();
  const[chatModel,setChatModel]=useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  }


  useEffect(()=>{

    const getAllChats=async()=>{
      const cookie=localStorage.getItem('jwt');
      const response=await fetch(`http://127.0.0.1:4000/api/v1/chat`,{
        headers:{
          'Content-type':'application/json',
          'Authorization':`Bearer ${cookie}`
        }
      })
      const data=await response.json();
      dispatch(InitializeChat(data.data));
      console.log("rerendered home component");
    }

  getAllChats();

  },[chatModel,open,dispatch])


  const selectChat=(data)=>{
    dispatch(SetActiveChat(data))
  }

  const createGroupChat=()=>{
    handleOpen();
  }

  const openChatDetails=()=>{
    setChatModel(true);
  }
  const closeChatDetails=()=>{
    setChatModel(false)
  }





  return (
    <div className='grid w-[80vw] relative grid-rows-[1fr,7fr] grid-cols-[3.5fr,7fr] '>
    <BasicModal handleClose={handleClose} open={open}></BasicModal>
    <ChatDetails closeChat={closeChatDetails} chatModel={chatModel}></ChatDetails>
    <TopBar createGroup={createGroupChat}></TopBar>
    <div className='flex flex-row items-center  border-[1px] border-[#f5f5f5]'><ChatTitle openChatModel={openChatDetails}></ChatTitle></div>
    <div className=' border-[1px] border-[#f5f5f5]'>
    {state.length===0&&<Loading></Loading>}
    {state&&state.map((data,index)=>{
      return   <ChatBar select={selectChat} data={data} key={index}></ChatBar>
    })}
    </div>
    <div className='bg-[#F6F8FC] flex flex-col relative'>
      <ChatMessages></ChatMessages>
      <Type></Type>
      </div> 
    </div>
  )
}