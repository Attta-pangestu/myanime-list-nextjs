
/* @TODO 
* Menampilkan rekomendasi secara random



*/

import Link from "next/link";
import AnimeCardList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/HeaderAnimeList";
import { getAnimeResponse, getRecommendationResponse } from "@/utils/api";


const Home = async () =>  {
  const {data: topAnimeAPI } = await getAnimeResponse("top/anime", "limit=4")
  const recommendationsAPI = await getRecommendationResponse(4)

 
  return (
    <div className="w-full min-h-screen bg-black text-white p-4">
        <HeaderAnimeList headerTitle="Top Anime Populer" linkHref="/top-anime"  />
        <AnimeCardList animeAPI={topAnimeAPI} />
        
        <HeaderAnimeList headerTitle="Rekomendasi Anime"  />
        <AnimeCardList animeAPI={recommendationsAPI} />
      
    </div>
  );
}

export default Home
