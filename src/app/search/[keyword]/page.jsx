
import React from 'react'
import AnimeCardList from '@/components/AnimeList'
import HeaderAnimeList from '@/components/HeaderAnimeList'

const Page = async ({params}) => {
  const {keyword} = params
  const decodeKeyword = decodeURI(keyword)
  const apiResponse = await  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`)
  const {data: filteredAnime} = await apiResponse.json()



  return (
    <div className="w-full min-h-screen bg-black text-white p-4">
      <HeaderAnimeList headerTitle={`Hasil pencarian ${decodeKeyword} ditemukan sebanyak ${filteredAnime.length}... `} />
      <AnimeCardList animeAPI={filteredAnime} />
    </div>

  )
}

export default Page
