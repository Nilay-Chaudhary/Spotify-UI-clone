import React from 'react'
import {assets} from '../assets/assets.js'

const Sidebar = () => {
  return (
    <div className='w-[28%] h-full p-2 text-white flex-col gap-2 hidden lg:flex'>
        <div className='bg-[#121212] h-[20%] rounded flex flex-col justify-around'>
            {/* home + search */}
            <div className='flex items-center gap-4 pl-6 cursor-pointer'>     
                <img className='w-6' src={assets.home_icon} alt="home_icon" />
                    <p className='font-semibold'>Home</p>
            </div>
            <div className='flex items-center gap-4 pl-6 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="search_icon" />
                    <p className='font-semibold text-gray-400 hover:text-white duration-200'>Search</p>
            </div>
        </div>

        <div className='h-[80%] bg-[#121212] rounded overflow-auto scrollbar-custom'>
            <div className='p-6 flex items-center justify-between cursor-pointer'>
                {/* library */}
                <div className='flex items-center gap-3'>
                    <img className='w-6' src={assets.stack_icon}/>
                    <p className='font-semibold text-gray-400 hover:text-white duration-200'>Your Library</p>
                </div>
                <div className='flex items-center gap-6'>
                    <img className='w-5 hover:scale-[117%] duration-200' src={assets.plus_icon}/>
                    <img className='w-5 hover:scale-[117%] duration-200' src={assets.arrow_icon}/>
                </div>
            </div>
            {/* playlist + podcast */}
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-6'>
                <h1 className=''>Create your first playlist</h1>
                <p className='font-normal text-[13px]'>It's easy, we'll help you</p>
                <button className='text-semibold px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:scale-[103%] duration-100'>Create playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-6'>
                <h1>Let's find some podcasts to follow</h1>
                <p className='font-normal text-[13px]'>We'll keep you updated on new episodes</p>
                <button className='text-semibold px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:scale-[103%] duration-100'>Browse podcasts</button>
            </div>

        </div>


    </div>
  )
}

export default Sidebar