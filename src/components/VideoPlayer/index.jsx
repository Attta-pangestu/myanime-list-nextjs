import React from 'react'
import YouTube from 'react-youtube'

const YoutubePlayer = ({urlTrailer}) => {
    const options = {
        height: '200',
        width: '400',
    }
  return (
    <div className='fixed right-0 bottom-0 z-50'>
        
        <YouTube 
            videoId={urlTrailer}
            opts={options}
        />
    </div>
  )
}

export default YoutubePlayer