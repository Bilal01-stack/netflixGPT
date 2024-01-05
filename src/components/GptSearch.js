import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants'

export default function GptSearch() {
  return (
    <>
    <div>
    <div>
        <img
          className="absolute -z-10"
          alt="Background"
          src={BACKGROUND_IMAGE}
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    </>
  )
}
