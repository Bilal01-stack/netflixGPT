import React from 'react';

export default function VideoTitle({ title, overview }) {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-5xl font-bold w-2/4'>{title}</h1>
      <p className='text-lg py-6 w-1/4'>{overview}</p>
      <div>
        <button className='bg-blue-500 text-white px-4 py-2 mr-2 bg-opacity-50 rounded-md'>Play Button</button>
        <button className='bg-gray-500 text-white px-4 py-2 bg-opacity-50 rounded-md'>More Info</button>
      </div>
    </div>
  );
}
