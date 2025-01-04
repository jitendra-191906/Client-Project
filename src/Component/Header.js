import React, { useState } from 'react';
import '../Style/header.css';
import img1 from '../Images/Logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar" id="header">
        <div className="navbar-logo">
          <img src={img1} alt="Company Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
      </nav>
      <div className="hero">
        <h1>Welcome to Jaipur Tiles & Granite to Beautify Your Space</h1>
      </div>
    </>
  );
}

export default Header;
