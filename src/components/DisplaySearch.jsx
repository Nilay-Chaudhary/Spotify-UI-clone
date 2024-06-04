import React from 'react'
import { assets } from '../assets/assets'
import { songsData } from '../assets/assets'
import GenreCard from './GenreCard'
import { useNavigate } from 'react-router-dom'

const DisplaySearch = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className='w-full flex justify-between font-semibold'>
            <div className='flex gap-2'>
                <div className='items-center flex gap-2'>
                    <img onClick={() => navigate(-1)} className='mb-[16px] w-8 bg-black p-2 rounded-2xl cursor-pointer hover:scale-[110%]' src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(1)} className='mb-[16px] w-8 bg-black p-2 rounded-2xl cursor-pointer hover:scale-[110%]' src={assets.arrow_right} alt="" />
                </div>
                <div className='overflow-auto ml-2 w-[350px] h-12 rounded-3xl bg-zinc-800 hover:outline hover:outline-2 hover:outline-white flex items-center justify-start'>
                     <img className='w-5 ml-3' src={assets.search_icon} alt="" />
                     <input className='w-[300px] bg-zinc-800 ml-2 focus:outline-none text-white placeholder:text-zinc-500 placeholder:text-sm' type="text" placeholder='What do you want to play?'/>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <button className='mb-[16px] bg-black text-white text-[13px] rounded-2xl px-4 py-1 font-bold hover:scale-[103%]'>Install App</button>
                <p className='mb-[16px] bg-black w-8 h-8 rounded-full flex items-center justify-center'>
                    <button className='bg-purple-500 text-black w-6 h-6 pb-[3px] rounded-full flex items-center justify-center hover:scale-[103%]'>N</button> 
                </p>
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Browse all</h1>
            <div className='grid grid-cols-3 overflow-auto scrollbar-custom'>
                {songsData.map( (item,index) => 
                    { return <GenreCard key={index} image={item.image} id={item.id} genre={item.genre} /> }
                )}
            </div>
        </div>
    </>
  )
}

export default DisplaySearch