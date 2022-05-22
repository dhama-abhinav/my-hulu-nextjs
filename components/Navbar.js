import requests from '../util/requests'
import React from 'react'
import { useRouter } from 'next/router'

export const Navbar = () => {
    //console.log(Object.entries(requests))
    const router = useRouter()
  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {
            Object.entries(requests).map(( [key ,{title}])=>(
                <h1 
                className='cursor-pointer transition duration-100 transfrom hover:scale-125 hover:text-white active:text-red-500' 
                key={key}
                onClick={ ()=> router.push(`/?genre=${key}`)}
                >
                    {title}
                </h1>
            ))
        }
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-10'></div>
    </nav>
  )
}
