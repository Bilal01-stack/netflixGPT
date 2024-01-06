import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants'

export default function GptSearch() {
  return (
    <>
    <div>
        <img
          className="absolute -z-10 h-screen object-cover md:h-auto"
          alt="Background"
          src={BACKGROUND_IMAGE}
        />
      </div>
    <div className=''>
    
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    </>
  )
}
