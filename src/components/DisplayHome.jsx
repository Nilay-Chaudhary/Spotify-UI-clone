import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import AlbumCard from './AlbumCard'
import SongCard from './SongCard'

const DisplayHome = () => {
  return (
    <>
        <Navbar />
        {/* trending albums */}
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto scrollbar-custom'>
                {albumsData.map( (item,index) => 
                    { return <AlbumCard key={index} name={item.name} image={item.image} id={item.id} desc={item.desc} /> }
                )}
            </div>
        </div>
        {/* trending songs */}
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
            <div className='flex overflow-auto scrollbar-custom'>
                {songsData.map( (item,index) => 
                    { return <SongCard key={index} name={item.name} image={item.image} id={item.id} desc={item.desc} /> }
                )}
            </div>
        </div>
    </>
  )
}

export default DisplayHome