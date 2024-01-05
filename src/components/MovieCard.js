import React from 'react';
import { IMAGE_CDN_URL } from '../utils/constants';

export default function MovieCard({ posterPath }) {
  const imagePath = posterPath && posterPath.poster_path;

  return (
    <div className='w-48 pr-4'>
      {imagePath && <img alt="Image card" src={IMAGE_CDN_URL + imagePath} />}
    </div>
  );
}
