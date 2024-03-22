import React, { Component } from 'react'
import News from './News'
import {
  Link
} from "react-router-dom";

const Navbar = () => {

  const Sports = () => {
    <News type="sports" />
  }

  return (
    <div >
      <div className='flex justify-between text-black p-5 text-xl items-center  '>
        <div className=' font-semibold text-3xl '>
          <h1>News<span className='text-red-600' >Book</span> </h1>
        </div>
        <ul className='flex gap-8 text-xl'>
          <li className='cursor-pointer'> <Link to="/business">Business</Link> </li>
          <li className='cursor-pointer'> <Link to ="/entertainment">Entertainment</Link> </li>
          <li className='cursor-pointer'> <Link to ="/general">General</Link> </li>
          <li className='cursor-pointer'> <Link to ="/health">Health</Link> </li>
          <li className='cursor-pointer'> <Link to ="/science">Science</Link> </li>
          <li className='cursor-pointer'> <Link to ="/sports">Sports</Link> </li>
          <li className='cursor-pointer'> <Link to ="/technology">Technology</Link> </li>

        </ul>
        <ul className='flex gap-8 text-xl'>
          <li className='cursor-pointer'> <Link to ="/">Home</Link> </li>
          {/* <li className='cursor-pointer'> <Link to ="/about">About</Link> </li> */}

        </ul>

      </div>

    </div>
  )
}

export default Navbar
