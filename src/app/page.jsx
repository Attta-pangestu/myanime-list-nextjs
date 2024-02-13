
/* @TOFO 
ubah jadi jsx v
decode keyword v
validasi search input v
Lihat semua and pagination v 

*/

import Link from "next/link";
import AnimeCardList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/HeaderAnimeList";
import { getAnimeResponse } from "@/utils/api";

const Home = async () =>  {
  const {data: topAnimeAPI } = await getAnimeResponse("top/anime", "limit=4")



  return (
    <div className="w-full min-h-screen bg-black text-white p-4">
        <HeaderAnimeList headerTitle="Top Anime Populer" linkHref="/top-anime"  />
        <AnimeCardList animeAPI={topAnimeAPI} />
        
        <HeaderAnimeList headerTitle="Top Anime Populer" linkHref="/"  />
        <AnimeCardList animeAPI={topAnimeAPI} />
      
    </div>
  );
}

export default Home
