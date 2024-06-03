import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
        {/* top row */}
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:scale-[110%]' src={assets.arrow_left} alt="" />
                <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:scale-[110%]' src={assets.arrow_right} alt="" />
            </div>
            <div className='flex items-center gap-4'>
                <button className='bg-white text-black text-[13px] rounded-2xl px-4 py-1 font-bold hover:scale-[103%]'>Explore Premium</button>
                <button className='bg-black text-white text-[13px] rounded-2xl px-4 py-1 font-bold hover:scale-[103%]'>Install App</button>
                <p className='bg-black w-8 h-8 rounded-full flex items-center justify-center'>
                    <button className='bg-purple-500 text-black w-6 h-6 pb-[3px] rounded-full flex items-center justify-center hover:scale-[103%]'>N</button> 
                </p>
            </div>
        </div>
        {/* bottom row */}
        <div className='flex items-center gap-2 mt-5'>
            <button className='bg-white text-black px-3 py-1 rounded-2xl text-[14px]'>All</button>
            <button className='bg-zinc-800 text-white px-3 py-1 rounded-2xl text-[14px] hover:bg-zinc-700 duration-150'>Music</button>
            <button className='bg-zinc-800 text-white px-3 py-1 rounded-2xl text-[14px] hover:bg-zinc-700 duration-150'>Podcasts</button>
        </div>

    </>
  )
}

export default Navbar