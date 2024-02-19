import React from 'react'
import HeaderWithBack from '@/components/HeaderWithBack'
import prisma from '@/utils/prisma-client'
import Link from 'next/link'
import Rating  from '@mui/material/Rating';
import { getUserSession } from '@/utils/authSessionLibs';

const Page = async () => {
    const user = await getUserSession()

    const userHaveComments = await prisma.comment.findMany({
        where: {
            user_email: user?.email
        }
    })


    const CommentItemTemplate = ({comment, key}) => {
        return (
            <Link href={`/anime/${comment?.anime_mal_id}`} key={key} className='border border-yellow-400 rounded-lg p-4 bg-yellow-600 flex flex-col gap-4'>
                <h2 className='text-xl md:text-2xl font-bold '>{comment?.anime_title}</h2>
                <p>{comment?.comment}</p>
                <Rating className='text-red-600' name="read-only" value={comment?.anime_rating} readOnly />
            </Link>
        )
    }
  return (
    <section className='w-full min-h-screen text-black p-4'>
        <HeaderWithBack title="My Comments" />
        <div className='grid grid-cols-4 gap-4 justify-center mt-6'>
          {userHaveComments.map((comment) => (
            <CommentItemTemplate key={comment.id} comment={comment} />
          ))}
        </div>
    </section>
  )
}

export default Page