import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About/about'
import Home from './pages/Home/home'
import './App.css'
import Skill from './pages/Skill/skill'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
      </Routes>
    </BrowserRouter>
  )
}
