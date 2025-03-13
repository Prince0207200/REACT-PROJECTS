import React from 'react'
import Home from './pages/Home'
import Like from './pages/Like'
import Search from './pages/Search'
import Playlist from './pages/Playlist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/like' element={<Like />} />
        <Route path='/playlist' element={<Playlist />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App