import { getUserSession } from "@/utils/authSessionLibs";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

const Page = async () => {
    const user = await getUserSession()
    

  return (
    <div className="w-full min-h-screen">


        <Image src={user.image} alt="..." width={150} height={150} className='rounded-full  object-cover max-h-[250px] min-h-[150px] w-auto mx-auto' />
        <h3 className="text-3xl text-white font-bold text-center mx-auto">@{user.name}</h3>
        <div className=" mt-6 flex flex-col md:flex-row gap-x-2 gap-y-4 justify-center items-center ">
            <Link  href="/dashboard/collections"  className=" bg-yellow-600 font-bold text-white p-4 rounded-lg  px-6 shadow-lg shadow-neutral-600" >My Collections</Link>
            <Link  href="/dashboard/comments"  className=" bg-yellow-600 font-bold text-white p-4 rounded-lg  px-6 shadow-lg shadow-neutral-600" >My Comments</Link>
        </div>
    </div>
  )

}

export default Page