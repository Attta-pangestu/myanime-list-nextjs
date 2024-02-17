"use client"

import React from 'react'
import ButtonAnimeDetail from '../ButtonAnimeDetail'

const CollectionButton = ({user_email, anime_mal_id}) => {
    const handleAddToCollection = async () => {
        const response = await fetch('/api/v1/collection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_email, 
                anime_mal_id,
        })})
        const responseJSON = await response.json()
        console.log(responseJSON)
    
    }

  return (
    <ButtonAnimeDetail handleClick={handleAddToCollection} className="bg-red-400 hover:text-black">Tambahkan ke Koleksi</ButtonAnimeDetail>
  )
}

export default CollectionButton