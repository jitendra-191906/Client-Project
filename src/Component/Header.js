import React, { useState } from 'react';
import '../Style/header.css';
import img1 from '../Images/Logo.png';

import { ABOUT_US, TESTIMONIALS, LETS_CONNECT, HEADER, MARBELS, TILES, GRANITES } from '../constants';
import { scrollToComponent } from './helper';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);

   
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <>
      <nav id={HEADER} className="navbar">
        <div className="navbar_logo">
          <img src={img1} alt="Company Logo" className="logo" />
        </div>

        <div className="menu_icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="cross">&times;</span> 
          ) : (
            <>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </>
          )}
        </div>

        <div className={`navbar_links ${isMenuOpen ? 'open' : ''}`}>
          <div
            onClick={() => {
              scrollToComponent(ABOUT_US);
              closeAllMenus();
            }}
            className="navbar_items"
          >
            About
          </div>

          <div className="navbar_items" onClick={toggleProductsDropdown}>
            Products
            <div
              className={`products_dropdown ${isProductsOpen ? 'open' : ''}`}
            >
              <div
                className="dropdown_item"
                onClick={() => {
                  scrollToComponent(MARBELS);
                  closeAllMenus();
                }}
              >
                Marble
              </div>
              <div
                className="dropdown_item"
                onClick={() => {
                  scrollToComponent(GRANITES);
                  closeAllMenus();
                }}
              >
                Granite
              </div>
              <div
                className="dropdown_item"
                onClick={() => {
                  scrollToComponent(TILES);
                  closeAllMenus();
                }}
              >
                Tile
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              scrollToComponent(TESTIMONIALS);
              closeAllMenus();
            }}
            className="navbar_items"
          >
            Testimonials
          </div>
          <div
            onClick={() => {
              scrollToComponent(LETS_CONNECT);
              closeAllMenus();
            }}
            className="navbar_items"
          >
            Contact
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
