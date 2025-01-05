import React, { useState } from 'react';
import '../Style/header.css';
import img1 from '../Images/Logo.png';

import { ABOUT, HOME, TESTIMONIALS, CONNECT } from '../constants';

function Header() {

  const handleScrollToContent = () => {

  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="navbar"
      >
        <div className="navbar-logo">
          <img
            src={img1}
            alt="Company Logo"
          />
        </div>

        {/* Navbar Links */}
        <div
          className={`navbar-links-sec`}
        >
          <div
            onClick={() => handleScrollToContent(HOME)}
          >
            Home
          </div>
          <div
            onClick={() => handleScrollToContent(ABOUT)}
          >
            About
          </div>
          <div
            onClick={() => handleScrollToContent(HOME)}
          >
            Products
          </div>
          <div
            onClick={() => handleScrollToContent(TESTIMONIALS)}
          >
            Testimonials
          </div>
          <div
            onClick={() => handleScrollToContent(CONNECT)}
          >
            Contact
          </div>
        </div>

      </nav>

      {/* <div className="hero">
        <h1>Welcome to Jaipur Tiles & Granite to Beautify Your Space</h1>
      </div> */}
    </>
  );
}

export default Header;
