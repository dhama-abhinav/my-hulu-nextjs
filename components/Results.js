import React from 'react'
import {VideoCard} from '../components/VideoCard'
import FlipMove from 'react-flip-move';

export const Results = ({results}) => {
    //console.log(results)
  return (
    <FlipMove className='px-5 my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  '>
      {
        results.map( (res)=>(
          <VideoCard key={res.id} res={res} />
         
        ))
      }
    </FlipMove>
  )
}
