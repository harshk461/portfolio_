import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import './navbar.css'

export default function Navbar() {
  const [navColor, setnavColor] = useState(true);
  function toggle() {
    const menu = document.getElementById("navbar_menu");
    menu.classList.contains("hidden") ? menu.classList.remove("hidden") : menu.classList.add("hidden");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setnavColor(false);
    }
    else {
      setnavColor(true);
    }
  })
  return (
    <div className="navbar-body">
      <div className="navbar-active" id='nav-active' >
        <div className="navbar-left">
          <a href='/' style={{ color: navColor ? "#72E2AE" : "#fff" }}>Harshkkk.</a>
          <span className="title-menu"></span>
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

          <div className="hamburger" id='hamburger' onClick={toggle}>
            <RxHamburgerMenu style={{ color: navColor ? "#72E2AE" : "#fff" }} />
          </div>
        </div>
      </div>
      <div className="navbar-menu hidden" id='navbar_menu'>
        <div className="close-button" onClick={toggle}>
          <AiOutlineClose size={30} />
        </div>
        <div className="menu-option-tray">
          <div className="menu-option">
            <a href="/"><h1>Home</h1></a>
          </div>
          <div className="menu-option">
            <a href="/about"><h1>About</h1></a>
          </div>
          <div className="menu-option">
            <a href="/skill"><h1>Skills</h1></a>
          </div>
          <div className="menu-option">
            <a href="/work"><h1>Work</h1></a>
          </div>
          <div className="menu-option">
            <a href="/contact"><h1>Contact</h1></a>
          </div>
        </div>
        <a href='/contact' className="hire-btn">HIRE ME</a>
      </div>
    </div>
  )
}
