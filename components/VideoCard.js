import React, { forwardRef } from 'react'
import Image from 'next/image'
import {   ThumbUpIcon } from '@heroicons/react/outline'

export const VideoCard = forwardRef( ({res},ref) => {
    const base_url = "https://image.tmdb.org/t/p/original/"
    
  return (
    <div ref={ref} className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 '>
        <Image 
        layout='responsive' 
        className='' 
        src={
            `${base_url}${res.poster_path || res.backdrop_path}`
            ||
            `${base_url}${res.poster_path}`
        } 
        width={10} 
        height={10}  
        />
        <div className=' p-2'>
            <p className='truncate max-w-md '>
                {res.overview}
            </p>
            <h2 className='mt-1 text-2xl text-white transition-all duration-100  ease-in-out group-hover:font-bold'>
                {res.title || res.original_name}
            </h2>
            <p className='flex item-center opacity-0 group-hover:opacity-100 uppercase'>
                {res.media_type && `${res.media_type} :`} {" "}
                {res.release_date || res.first_air_date} . {" "}
                <ThumbUpIcon className='h-5 mx-2' />
                {res.vote_count}
            </p>
        </div>
    </div>
  )
}
)