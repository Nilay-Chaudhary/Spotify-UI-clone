import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const DisplayRouter = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumID = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumID)].bgColor;  // Number(albumID) gives 0 on non-album pages

  useEffect(() => {
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }
    else{
      displayRef.current.style.background = '#121212'
    }
  })

  return (
    <div ref={displayRef} className='w--[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 scrollbar-none'>
        <Routes>
            <Route path='/' element = {<DisplayHome />}> </Route>
            <Route path='/album/:id' element = {<DisplayAlbum />}> </Route>
        </Routes>
    </div>
  )
}

export default DisplayRouter