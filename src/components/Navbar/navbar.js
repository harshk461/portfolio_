import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-body">
      <div className="navbar-active">
        <div className="navbar-left">
          Harshkkk.
        </div>
        <div className="navbar-center">
          <div className="navbar-center-tray">
            <a href="/"><h3>Home</h3></a>
            <a href="/about"><h3>About</h3></a>
            <a href="/skill"><h3>Skills</h3></a>
            <a href="/work"><h3>Work</h3></a>
            <a href="/contact"><h3>Contact</h3></a>
          </div>
        </div>
        <div className="navbar-right">
          <a href="/contact">
            HIRE ME
          </a>
        </div>
      </div>
      <div className="navbar-menu"></div>
    </div>
  )
}
