import React, { useState } from 'react';
import '../Style/header.css';
import img1 from '../Images/Logo.png';

import { ABOUT_US, TESTIMONIALS, LETS_CONNECT,HEADER } from '../constants';
import { scrollToComponent } from './helper';


function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
      id={HEADER}
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
            onClick={() => scrollToComponent(ABOUT_US)}
            className={`navbar_items`}
          >
            About
          </div>

          <div
            onClick={() => scrollToComponent(TESTIMONIALS)}
            className={`navbar_items`}
          >
            Products
          </div>

          <div
            onClick={() => scrollToComponent(TESTIMONIALS)}
            className={`navbar_items`}
          >
            Testimonials
          </div>

          <div
            onClick={() => scrollToComponent(LETS_CONNECT)}
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
