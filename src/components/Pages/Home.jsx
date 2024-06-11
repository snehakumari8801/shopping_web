import React from 'react'
import Cards from '../Cards'
import Navbar from '../Navbar'

function Home() {
  return (
    <div className="App bg-black text-white h-[100%]">
          <Navbar/>
          <Cards />
    </div>
  )
}

export default Home