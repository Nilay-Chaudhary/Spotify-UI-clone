import React from 'react'

const GenreCard = ({image, name, genre, id}) => {
    return (
      <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-zinc-700 duration-100'>
          <img className='rounded-lg' src={image} alt="" />
          <p className='font-semibold mt-2 mb-1 text-center'>{genre}</p>
      </div>
    )
  }

export default GenreCard