import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen'>
        <div className='w-10 h-10 border-t-2 border-b-2 border-[#A0C878] rounded-full animate-spin'></div>
        <span className='text-sm font-medium text-[#496c27]'>Loading...</span>
    </div>
  )
}

export default Loading