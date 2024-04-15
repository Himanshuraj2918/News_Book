import React from 'react'

function Shimmer() {
  return (
    <div className='h-[200px] w-[200px] mb-20 ml-5'>
      <div className='bg-slate-100  border-2 h-[200px] w-[200px] border-slate-300'></div>
      <div className='bg-slate-100 rounded-sm h-[20px] w-[100px] mt-1 ml-auto mr-auto border-2 border-slate-300'></div>
      <div className='bg-slate-100 rounded-md h-[20px] w-[200px] mt-1 border-2 border-slate-300'></div>
    </div>
  )
}

export default Shimmer
