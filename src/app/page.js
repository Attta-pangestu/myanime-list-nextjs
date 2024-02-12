
import Link from "next/link";
import AnimeCardList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/HeaderAnimeList";
const Home = async () =>  {
  const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const {data} = await apiResponse.json()


  return (
    <div className="w-full min-h-screen bg-black text-white p-4">
        <HeaderAnimeList headerTitle="Top Anime Populer" linkHref="/"  />
        <AnimeCardList animeAPI={data} />
      
    </div>
  );
}

export default Home
