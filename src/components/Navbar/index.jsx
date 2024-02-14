
import React from 'react'
import Link from 'next/link'
import SearchBar from './SearchBar'
import { getUserSession } from '@/utils/authSessionLibs'
import Image from 'next/image'


const Navbar = async () => {
    const user = await getUserSession();

    const UserSignOutLabel = () => {
        return (
            <div className='w-full flex gap-x-2 justify-center  items-center'>
                <h5 className='text-lg md:text-2xl text-white font-bold'> 👋 Hai</h5>
                <Image src={user.image} alt="..." width={50} height={50} className='rounded-full w-full object-cover max-h-[150px] min-h-[50px] w-auto' />
            </div>
        )
    } 

    const authButonTitle = user ? <UserSignOutLabel/> : "Sign In With Github"
  return (
    <header className='flex flex-col gap-4 md:gap-2 md:flex-row justify-between items-center p-4  bg-yellow-600 '>
        <Link href="/" className='text-3xl font-bold text-orange-900 border-y-4 mb-4 border-white p-2' >
            {"Atha's-nime"}
        </Link>

        <SearchBar />

        <div className='flex gap-4 md:gap-x-2 w-full  md:w-2/5'>
            {user  &&  <Link href="/dashboard" className="text-xl  flex items-center justify-center text-white font-bold  bg-black w-1/3 px-4  rounded-lg border border-white">Dashboard</Link> }
            
            <Link href={user ? "/api/auth/signout" : "/api/auth/signin"} className="w-2/3 text-lg text-center  text-white font-bold  bg-black px-4 rounded-lg border border-white">{authButonTitle}</Link>
        </div>

    </header>
  )
}

export default Navbar
