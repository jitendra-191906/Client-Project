import React from 'react'
import '../Style/header.css';
import img1 from '../Images/Logo.png'

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={img1} alt="Company Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
      </nav>
    </>
  )
}

export default Header
