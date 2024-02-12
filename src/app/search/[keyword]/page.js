
import React from 'react'
import AnimeCardList from '@/components/AnimeList'
import HeaderAnimeList from '@/components/HeaderAnimeList'

const page = async ({params}) => {
  const {keyword} = params
  const apiResponse = await  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const {data: filteredAnime} = await apiResponse.json()



  return (
    <div className="w-full min-h-screen bg-black text-white p-4">
      <HeaderAnimeList headerTitle={`Hasil pencarian ${keyword} ditemukan sebanyak ${filteredAnime.length}... `} />
      <AnimeCardList animeAPI={filteredAnime} />
    </div>

  )
}

export default page
