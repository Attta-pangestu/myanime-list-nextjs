import { getUserSession } from "@/utils/authSessionLibs";
import Image from "next/image";

import React from 'react'

const Page = async () => {
    const user = await getUserSession()
    

  return (
    <div className="w-full min-h-screen">

        <Image src={user.image} alt="..." width={150} height={150} className='rounded-full  object-cover max-h-[250px] min-h-[150px] w-auto mx-auto' />
        <h3 className="text-3xl text-white font-bold text-center mx-auto">@{user.name}</h3>
    </div>
  )

}

export default Page