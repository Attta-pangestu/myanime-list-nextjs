import React from 'react'
import HeaderWithBack from '@/components/HeaderWithBack'
import Image from 'next/image'
import { My_Soul } from 'next/font/google'
import Link from 'next/link'

const Page = () => {

    const MyCollectionTemplate = () => {
        return (
            <Link href="/" className='border border-yellow-600 rounded-lg  '>
                <Image src="" alt="..." width={150} height={150} className='rounded-lg  object-cover max-h-[250px] min-h-[150px] w-full mx-auto' />
                <h3 className=" text-lg md:text-2xl text-black bg-yellow-600   font-bold text-center py-4 ">Anime</h3>
            </Link>
        )
    }

  return (
    <section className='w-full min-h-screen text-white p-4'>
        <HeaderWithBack title="My Collections" />
        <div className='grid grid-cols-2 gap-4 justify-center mt-6'>
            <MyCollectionTemplate />
            <MyCollectionTemplate />
            <MyCollectionTemplate />
        </div>
    </section>
  )
}

export default Page