"use client"

import React from 'react'
import Rating from '@mui/material/Rating';

const UserComments = ({comment}) => {
  return (
    <div  className='w-full bg-neutral-300 px-6 py-8 shadow-md shadow-neutral-400 rounded-lg border border-dashed border-neutral-500 '>
    <div className='flex justify-between'>
        <h4 className='text-xl  md:text-2xl font-bold text-neutral-900 '>{comment?.user_email}</h4>
        <Rating name="read-only" value={comment?.anime_rating} readOnly />
    </div>
    <p className='text-neutral-900 text-lg md:text-xl my-4 '>{comment?.comment}</p>
</div>
  )
}

export default UserComments