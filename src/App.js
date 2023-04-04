import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About/about'
import Home from './pages/Home/home'
import Skill from './pages/Skill/skill'
import Contact from './pages/Contact/contact'
import Education from './pages/Education/education'
import Work from './pages/Work/work'

export default function App() {
  useEffect(() => {
    document.title = 'harshkkk.';
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/education' element={<Education />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </BrowserRouter>
    // <HomePage />
  )
}
