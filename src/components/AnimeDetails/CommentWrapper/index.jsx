"use client"

import React, { useRef, useState } from 'react'
import RatingStar from '@/components/AnimeDetails/RatingStar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const CommentWrapper = ({user, anime_title, anime_mal_id, }) => {
    const [rating, setRating] = useState(3)
    const commentRef = useRef()
    const router = useRouter()
   
    const handlePostComment = async (event) => {
        event.preventDefault()
        const response = await fetch('/api/v1/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_email: user?.email,
                anime_rating: rating, 
                anime_title,
                anime_mal_id, 
                comment: commentRef.current.value
            })
        })
        const responseJSON = await response.json()
        console.log(responseJSON)
        if(responseJSON.status === 200) {
            commentRef.current.value = ''
            router.refresh()

        }
        
        
    }


  return (
    <>
            <hr className='my-4 border border-dashed border-white' />
            <h2 className="text-xl md:text-3xl font-bold w-full ">Komentar dan Review</h2>
            <section className='p-4'>
                <div className=' w-full my-4 flex flex-col justify-center items-center '>
                    <h2 className='text-xl md:text-3xl font-bold w-full text-center mb-4'>Rating Untuk Film Ini</h2>
                    <RatingStar rating={rating} setRating={setRating} />  
                    
                </div>
                <div className='flex gap-4 my-4'>
                    <div>
                        <Image src={user?.image} width={50} height={50} className='rounded-full min-h-[80px]  w-auto' alt={user?.name} />
                    </div>
                    <div className="w-5/6 ">
                        <textarea ref={commentRef}  cols="30" className='w-full p-4 border border-neutral-400 rounded-lg min-h-[50px] text-black '/>
                        <button onClick={ handlePostComment} className='float-right my-4 bg-yellow-600 font-bold text-white p-4 rounded-lg px-6 shadow-lg shadow-neutral-600'>Posting Ulasan </button>
                    </div>
                </div>
            </section>
        </>
  )
}

export default CommentWrapper