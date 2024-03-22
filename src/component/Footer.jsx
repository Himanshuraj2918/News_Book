import { ChevronRight } from 'lucide-react'
import React from 'react'

export function Footer() {
  return (
    <footer className="w-full mb-4 mt-10 ">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-2 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-red-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
         
            <div  className="mb-8 lg:mb-0">
              <p className="mb-6 text-xl font-bold text-black ">News<span className="text-red-600">Book</span></p>
              <ul className="flex flex-col space-y-4 text-[14px] font-bold text-black  ">
                <li className='hover:text-red-600' >About us</li>
                <li className='hover:text-red-600' >Contact us</li>
                <li className='hover:text-red-600' >Creator</li>
                
                
              </ul>
            </div>
            <div  className="mb-8 lg:mb-0">
              <p className="mb-6 text-xl font-bold text-black ">News</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-bold text-black  ">
                <li className='hover:text-red-600' >Home</li>
                <li className='hover:text-red-600' >Business</li>
                <li className='hover:text-red-600' >Sports</li>
                
                
              </ul>
            </div>
            <div  className="mb-8 lg:mb-0">
              <p className="mb-6 text-xl font-bold text-black ">News</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-bold text-black  ">
                <li className='hover:text-red-600' >Entertainment</li>
                <li className='hover:text-red-600' >Life Hacks</li>
                <li className='hover:text-red-600' >Cyber Crime</li>
                
                
              </ul>
            </div>
          
        </div>
      </div>
      <hr className="my-2" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
        
          <span className="ml-4 text-2xl font-bold">News<span className="text-red-600">Book</span></span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-lg font-medium text-black">© 2023 NewsBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
