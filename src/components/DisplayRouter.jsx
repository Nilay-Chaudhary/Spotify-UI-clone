import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const DisplayRouter = () => {
  return (
    <div className='w--[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 scrollbar-none'>
        <Routes>
            <Route path='/' element = {<DisplayHome />}> </Route>
            
        </Routes>
    </div>
  )
}

export default DisplayRouter