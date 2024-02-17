import Link from 'next/link'
import React from 'react'

const HeaderAnimeList = ({headerTitle, linkHref}) => {
  return (
    <>
        <div className="w-full flex mb-4 justify-between items-center">
            <h3 className="text-lg md:text-2xl font-bold  ">{headerTitle}</h3>
            {linkHref && <Link href={linkHref} className="text-lg md:text-2xl font-bold underline text-white hover:text-yellow-400 cursor-pointer ">Lihat Semua</Link> }
            
            
        </div>
            <hr/>
    
    </>
  )
}
export default HeaderAnimeList
