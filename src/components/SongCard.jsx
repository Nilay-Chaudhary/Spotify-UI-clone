import React from 'react'

const SongCard = ({image, name, desc, id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-zinc-700 duration-100'>
        <img className='rounded' src={image} alt="" />
        <p className='font-semibold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongCard