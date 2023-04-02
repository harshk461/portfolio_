import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About/about'
import Home from './pages/Home/home'
import Skill from './pages/Skill/skill'
import Contact from './pages/Contact/contact'
import Education from './pages/Education/education'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/education' element={<Education />} />
      </Routes>
    </BrowserRouter>
    // <HomePage />
  )
}
