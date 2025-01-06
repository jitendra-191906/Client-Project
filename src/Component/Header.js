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
        <div className="navbar_logo">
          <img
            src={img1}
            alt="Company Logo"
            className="logo"
          />
        </div>

        {/* Navbar Links */}
        <div
          className={`navbar_links`}
        >
          <div
            onClick={() => handleScrollToContent(HOME)}
            className={`navbar_items`}

          >
            Home
          </div>
          <div
            onClick={() => handleScrollToContent(ABOUT)}
            className={`navbar_items`}

          >
            About
          </div>
          <div
            onClick={() => handleScrollToContent(HOME)}
            className={`navbar_items`}

          >
            Products
          </div>
          <div
            onClick={() => handleScrollToContent(TESTIMONIALS)}
            className={`navbar_items`}

          >
            Testimonials
          </div>
          <div
            onClick={() => handleScrollToContent(CONNECT)}
            className={`navbar_items`}

          >
            Contact
          </div>
        </div>

      </nav>
    </>
  );
}

export default Header;
