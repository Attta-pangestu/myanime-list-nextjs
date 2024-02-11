"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import { MagnifyingGlass } from '@phosphor-icons/react'

const Navbar = () => {
    const searchRef = useRef();

    const handleSearch = () => {
        alert(searchRef.current.value)
    }
  return (
    <header className='flex flex-col md:flex-row justify-between items-center p-4  bg-yellow-600 '>
        <Link href="/" className='text-3xl font-bold text-orange-900 border-y-4 mb-4 border-white p-2' >
            {"Atha's-nime"}
        </Link>
        <div className=' flex border-02 bg-neutral-100  border-neutral-200 rounded-lg py-2 px-4 w-full md:w-1/2'>
            <input type='text' ref={searchRef} placeholder='Cari anime disni...' className='bg-transparent w-full  focus:outline-none' />
            
            <MagnifyingGlass size={32} color='#000' onClick={handleSearch}/>

        </div>

        <nav>
            <ul className='hidden md:flex gap-2 text-white text-lg font-bold'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/anime'>Anime</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
