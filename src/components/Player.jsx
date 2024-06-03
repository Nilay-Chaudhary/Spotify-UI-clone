import React from 'react'
import {assets, songsData as songs} from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        {/* song details */}
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={songs[0].image} />
            <div>
                <p>{songs[0].name}</p>
                <p>{songs[0].desc}</p>
            </div>
        </div>
        {/* playback menu */}
        <div className='flex flex-col pl-20 items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer hover:scale-105' src={assets.shuffle_icon} />
                <img className='w-4 cursor-pointer hover:scale-105' src={assets.prev_icon} />
                <img className='w-4 cursor-pointer hover:scale-105' src={assets.play_icon} />
                <img className='w-4 cursor-pointer hover:scale-105' src={assets.next_icon} />
                <img className='w-4 cursor-pointer hover:scale-105' src={assets.loop_icon} />
            </div>
            <div className='flex items-center gap-5'>
                <p>1:05</p>
                <div className='w-[60vh] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p>3:12</p>
            </div>
        </div>
        {/* dummy icons */}
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.play_icon}/>
            <img className='w-4' src={assets.mic_icon}/>
            <img className='w-4' src={assets.queue_icon}/>
            <img className='w-4' src={assets.speaker_icon}/>
            <img className='w-4' src={assets.volume_icon}/>
            <div className='w-20 bg-slate-50 h-1 rounded'></div>
            <img className='w-4' src={assets.mini_player_icon}/>
            <img className='w-4' src={assets.zoom_icon}/>

        </div>
    </div>
  )
}

export default Player