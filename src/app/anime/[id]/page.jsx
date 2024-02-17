
import React from 'react'
import { getAnimeResponse } from '@/utils/api'
import Image from 'next/image'
import YoutubePlayer from '@/components/AnimeDetails/VideoPlayer'
import CollectionButton from '@/components/AnimeDetails/CollectionButton'
import { getUserSession } from '@/utils/authSessionLibs'
const Page = async  ({params: {id}}) => {
    
    const {data: animeDetails} = await getAnimeResponse(`anime/${id}`)
    const user = await  getUserSession()
    console.log(user)

    const ImagePosterBg = () => {
        return (
            <div className='bg-cover bg-no-repeat bg-fixed relative z-10 w-full min-h-screen' style={{ 
                backgroundImage: `url(${animeDetails.images.webp.large_image_url})`,
                backgroundPositionY: '20%',
                filter: 'brightness(70%) contrast(150%)', 
                
            }}>
            </div>
        )
    }

    const AnimeHeaderContent = () => {
        return (
            <div className='flex gap-2 w-full relative'>
            <div className='relative z-60 -top-40 overflow-hidden  rounded-lg w-1/2 sm:w-1/3 shadow-md shadow-neutral-400'>
                <Image src={animeDetails.images.jpg.image_url} className=' w-full  object-cover h-full ' width={200} height={300} alt={animeDetails.title} />
            </div>
            <div className='w-1/2 sm:2/3 flex flex-col gap-2 sm:relative sm:ml-6 '>
                <h2 className=' text-xl md:text-3xl text-white uppercase  font-bold w-full text-center'> 🎞 {animeDetails.title} - {animeDetails.year}</h2>
                <div className='flex gap-2 flex-wrap sm:flex-wrap  overflow-x-auto text-sm md:text-xl'>
                    <span className='   px-2 py-1 border border-white rounded-lg'>{animeDetails.type}</span>
                    <span className='text-nowrap  px-2 py-1 border border-white rounded-lg'>{animeDetails.episodes} EP</span>
                    <span className=' text-nowrap px-2 py-1 border border-white rounded-lg'>⭐{animeDetails.score}</span>
                    <span className=' text-nowrap  px-2 py-1 border border-white rounded-lg'>{animeDetails.members} members</span>
                    <span className=' text-nowrap  px-2 py-1 border border-white rounded-lg'>
                        {animeDetails.genres.map(genre => genre.name).join(' | ')}
                    </span>
                    
                </div>
                <YoutubePlayer />
                <CollectionButton user_email={user?.email} anime_mal_id={toString(animeDetails.mal_id)} />
            </div>
        </div>
        )
    }

    const AnimeDescription = () =>{
        return (
            <div className='mt-4 md:-mt-20  border border-neutral-400 p-4 sm:px-8 py-4 rounded-lg'>
                <h3 className='text-xl md:text-3xl font-bold w-full text-center mb-4'>Synopsis</h3>
                 <p className=' text-justify text-md text-neutral-300'>{animeDetails.synopsis}</p>
            </div>
        )
    }

    const AnimeContentWrapper = () => {
        return (
            <div className='z-50 w-full absolute top-[60%] bg-neutral-900 bg-opacity-80  p-4 rounded-lg '  >
                <AnimeHeaderContent />
                <AnimeDescription />
                
            </div>
        )
    }

  return (
    <div className="w-full relative min-h-screen bg-black text-white  md:p-4">

    <ImagePosterBg />
    <AnimeContentWrapper />
    
    
</div>

  )
}

export default Page
