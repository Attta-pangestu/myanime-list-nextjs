"use client"

import React, { useState } from 'react'
import YouTube from 'react-youtube'
import ButtonAnimeDetail from '../ButtonAnimeDetail'
const YoutubePlayer = ({urlTrailer}) => {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false)
    const options = {
        height: '200',
        width: '400',
    }

    const YoutubeElem = () => (
      <YouTube 
      videoId={urlTrailer}
      opts={options}
  />
    )

    const toggleIsOpenTrailer = () => {
      setIsOpenTrailer(!isOpenTrailer)
  }
  
  return (
    <>
    <ButtonAnimeDetail handleClick={toggleIsOpenTrailer}>{isOpenTrailer?'Close Trailer':'Tonton Trailer'}</ButtonAnimeDetail>
    <div className='fixed right-0 bottom-0 z-50'>
      {isOpenTrailer && <YoutubeElem />}
    </div>
    </>
  )
}

export default YoutubePlayer