"use client"
import React from 'react'

const ButtonAnimeDetail = ({children, handleClick, className}) => {
  return (
    <button onClick={handleClick} className={`${className}  hover:bg-yellow-400 border border-white text-white font-bold py-2 px-8 rounded-lg`}>{children}</button>
  )
}

export default ButtonAnimeDetail