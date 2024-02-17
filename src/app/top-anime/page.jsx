/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect, useState } from 'react'
import AnimeCardList from '@/components/AnimeList'
import HeaderAnimeList from '@/components/AnimeList/HeaderAnimeList'
import Pagination from '@/components/AnimeList/Pagination'
import { getAnimeResponse } from '@/utils/api'

const Page = () => {
    const [page, setPage] = useState(1)
    const [animeAPI, setAnimeAPI] = useState()

    const fetchingAnime = async () => {
        const animeAPI = await getAnimeResponse("top/anime", `page=${page}`)
        setAnimeAPI(animeAPI);
    }

    useEffect(() =>{
        fetchingAnime()
    }, [page])
    
    if(!animeAPI) {
        return (
            <div className="w-full min-h-screen flex justify-center items-center">
            <div className="loader text-red-400"></div>
            <h2 className='text-3xl text-red-400 font-bold'>Loading Data Anime</h2>
          </div>
        );
    }
    
    return (
        <div className="w-full min-h-screen bg-black text-white p-4">
            <HeaderAnimeList headerTitle={`Top Anime Halaman #${page}`}  />
            <AnimeCardList animeAPI={animeAPI?.data} />
            <Pagination page={page} lastPage={animeAPI?.pagination.last_visible_page} setPage={setPage} setAnimeAPI={setAnimeAPI} />
        </div>
  )
}

export default Page
