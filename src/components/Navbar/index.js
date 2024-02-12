
import React from 'react'
import Link from 'next/link'
import SearchBar from './SearchBar'

const Navbar = () => {
    
  return (
    <header className='flex flex-col md:flex-row justify-between items-center p-4  bg-yellow-600 '>
        <Link href="/" className='text-3xl font-bold text-orange-900 border-y-4 mb-4 border-white p-2' >
            {"Atha's-nime"}
        </Link>

        <SearchBar />

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
