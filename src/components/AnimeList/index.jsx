import React from 'react'
import AnimeCardItem from '../AnimeCardItem'
const AnimeCardList = ({animeAPI}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:p-4">
          {animeAPI?.map((anime) => (
              <AnimeCardItem
                key={anime.mal_id}
                id={anime.mal_id}
                title={anime.title}
                image={anime.images.webp.image_url}
              />
          ))}
        </div>
  )
}

export default AnimeCardList
