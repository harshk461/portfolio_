import React from 'react'
import About from './pages/About/about'
import Contact from './pages/Contact/contact'
import Education from './pages/Education/education'
import Home from './pages/Home/home'
import Skill from './pages/Skill/skill'
export default function HomePage() {
    return (
        <div>
            <Home />
            <About />
            <Education />
            <Skill />
            <Contact />
        </div>
    )
}
