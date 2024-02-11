
import Link from "next/link";
import AnimeCardItem from "../components/AnimeList";

const Home = async () =>  {
  const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const {data} = await apiResponse.json()


  return (
    <div className="w-full min-h-screen bg-black text-white p-4">
      <h3>Anime Paling Top</h3>
      <hr/>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-4">
          {data.map((anime) => (
              <AnimeCardItem
                key={anime.mal_id}
                id={anime.mal_id}
                title={anime.title}
                image={anime.images.webp.image_url}
              />
          ))}
        </div>
      
    </div>
  );
}

export default Home
