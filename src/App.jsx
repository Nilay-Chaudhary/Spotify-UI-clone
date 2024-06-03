import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import DisplayRouter from './components/DisplayRouter'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'> 
        <Sidebar />
        <DisplayRouter />
      </div>
      <Player />
    </div>
  )
}

export default App