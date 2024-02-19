"use client"

import React, { useEffect, useState } from 'react'
import ButtonAnimeDetail from '../ButtonAnimeDetail'


const CollectionButton = ({isCreatedCollection,user_email, anime_mal_id,anime_image_url, anime_title}) => {
    const [changesStatus, setChangesStatus] = useState(null)
    const [isAddedToCollection, setIsAddedToCollection] = useState(isCreatedCollection)
 
    console.log(isCreatedCollection)

    useEffect(() => {
      console.log("state change")
    }, [isAddedToCollection])



    const handleAddToCollection = async (event) => {
        event.preventDefault()
        const response = await fetch('/api/v1/collection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_email, 
                anime_mal_id,
                anime_image_url, 
                anime_title, 
        })})

        const responseJSON = await response.json()
       if(responseJSON.status === 200) {
        setChangesStatus(true)
        setIsAddedToCollection(true)
       } else{
        setChangesStatus(false)
       }
    
    }

    const handleDeleteCollection = async (event) => {
      event.preventDefault()

      const response = await fetch('/api/v1/collection', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_email,
          anime_mal_id
        })
      })

      const responseJSON = await response.json()

      if(responseJSON.status === 200) {
        setChangesStatus(true)
        setIsAddedToCollection(false)
       } else{
        setChangesStatus(false)
       }
    }


  return (
  
          <React.Fragment>
              <ButtonAnimeDetail handleClick={isAddedToCollection? handleDeleteCollection : handleAddToCollection} className="bg-red-400 hover:text-black">{isAddedToCollection? 'Hapus dari  Koleksi' : 'Tambahan ke Koleksi'}</ButtonAnimeDetail>
            {changesStatus !== null && (
              <div className={`p-4 mt-4 text-center ${changesStatus ? 'bg-green-500' : 'bg-red-500'}`}>
              {changesStatus ? 'Koleksi berhasil diubah!' : 'Koleksi memperbaharui koleksi.'}
            </div>
            )}
          </React.Fragment>
 
  )
}

export default CollectionButton