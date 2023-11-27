import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";
const Loading = () => {
  return (
    
    <div className=' flex justify-center items-center h-screen flex-col'>
        <AiOutlineLoading className='animate-spin' size={30} />
        <h1 className='font-bold text-5xl'>Loading</h1>
    </div>
  )
}

export default Loading