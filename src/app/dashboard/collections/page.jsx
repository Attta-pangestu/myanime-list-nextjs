import React from 'react'
import HeaderWithBack from '@/components/HeaderWithBack'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '@/utils/prisma-client'
import { getUserSession } from '@/utils/authSessionLibs'

const Page =  async  () => {
    const user =await  getUserSession()
    const myCollectionAnimes = await prisma.collection.findMany({
        where: {
            user_email: user?.email
        }
    })


    const MyCollectionTemplate = ({anime_image_url, anime_mal_id, anime_title}) => {
        return (
            <Link href={`/anime/${anime_mal_id}`} className='border border-yellow-600 rounded-lg  '>
                <Image src={anime_image_url} alt="..." width={150} height={150} className='rounded-lg  object-cover max-h-[450px] min-h-[300px] w-full mx-auto' />
                <h3 className=" text-lg md:text-2xl text-black bg-yellow-600   font-bold text-center py-4 ">{anime_title}</h3>
            </Link>
        )
    }

  return (
    <section className='w-full min-h-screen text-white p-4'>
        <HeaderWithBack title="My Collections" />
        <div className='grid grid-cols-2 gap-4 justify-center mt-6'>
            {myCollectionAnimes.map((anime) => (
                <MyCollectionTemplate key={anime.anime_mal_id} anime_image_url={anime.anime_image_url} anime_mal_id={anime.anime_mal_id} anime_title={anime.anime_title} />
            ))}
        </div>
    </section>
  )
}

export default Page