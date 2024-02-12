"use client"
import { Binoculars } from '@phosphor-icons/react'
import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    
        <div className='w-full min-h-screen flex flex-col gap-4 justify-center items-center '>
            <div className="flex gap-4">
                <Binoculars size={32} className='text-yellow-400 text-lg md:text-3xl' />
                <h1 className="text-yellow-400 text-lg md:text-3xl font-bold ">Not Found</h1>
            </div>
            <Link href="/" className='text-2xl font-bold underline text-blue-400 cursor-pointer underline'>Kembali</Link>
        </div>

  )
}

export default Page
