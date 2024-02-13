"use client"

import { MagnifyingGlass } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

import React, { useRef } from 'react'

const SearchBar = () => {
    const searchRef = useRef()
    const router = useRouter()


    const handleSearchClick = (e) => {
        const keyword = searchRef.current.value
        if(!keyword) return 
        e.preventDefault()
        router.push(`/search/${searchRef.current.value}`)
    }

    const handleSearchKeyEnter = (e) => {
        if(e.key === 'Enter') {
            
            const keyword = searchRef.current.value
            if(!keyword) return 
            
            e.preventDefault()
            router.push(`/search/${searchRef.current.value}`)
        }
        
    }


  return (
    <div className=' flex border-02 bg-neutral-100  border-neutral-200 rounded-lg py-2 px-4 w-full md:w-1/2'>
        <input type='text' ref={searchRef} placeholder='Cari anime disni...' className='bg-transparent w-full  focus:outline-none' onKeyDown={handleSearchKeyEnter}   />
        
        <MagnifyingGlass size={32} color='#000' onClick={handleSearchClick} />  
    </div>
  )
}

export default SearchBar
