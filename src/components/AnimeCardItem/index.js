import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AnimeCardItem = ({title, image, id}) => {
  return (
        <Link href={`/anime/${id}`} className=' bg-neutral-900 border-2 border-white shadow-md shadow-neutral-800 pb-4 rounded-lg  overflow-hidden transition-colors ease-in hover:bg-yellow-600'>
            <Image src={image} alt='...' className='max-h-[300px] min-h-[250px] md:max-h-[350px] md:min-h-[300px] w-full object-fill hover:scale-110 transition-all ' loading='lazy' width={300} height={300}  />
            <h2 className='text-center text-lg font-bold  mt-4 '>{title}</h2>
        </Link>
  )
}

export default AnimeCardItem

