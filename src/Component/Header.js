import React, { useState } from 'react';
import '../Style/header.css';
import img1 from '../Images/Logo_Image/Logo.png';
import { CiMenuKebab } from "react-icons/ci";
import { MdClose } from "react-icons/md";

import { ABOUT_US, TESTIMONIALS, LETS_CONNECT, HEADER, MARBELS, TILES, GRANITES, PRODUCTS, CATEGORIES } from '../constants';

import { useScrollToComponent } from './helper';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const { pathname } = location;

  const scrollToComponent = useScrollToComponent();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const closeAllMenus = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        id={HEADER}
        className="navbar"
      >
        <div className='navbar_inner'>

          <div className="navbar_logo">
            <img
              src={img1}
              alt="Company Logo"
              className="logo"
            />
          </div>

          <div className='header_inner_right website_semi_heading_text '>
            <div
              className="header_icon_menu"
            >
              {
                isMenuOpen
                  ? (
                    <div className='icon_menu_dropdown'>

                      <div className='icon_menu_dropdown_close'>
                        <div onClick={() => toggleMenu()}>
                          <MdClose
                            fill='gray'
                            size={22}
                          />
                        </div>
                      </div>

                      {
                        pathname !== "/" &&
                        (
                          <div
                            className="navbar_items"
                            onClick={() => {
                              navigate("/");
                              closeAllMenus();
                            }}
                          >
                            Home
                          </div>
                        )
                      }

                      <div
                        className="navbar_items"
                        onClick={() => {
                          scrollToComponent(CATEGORIES);
                          closeAllMenus();
                        }}
                      >
                        Products
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
                  )
                  : (
                    <div onClick={() => toggleMenu()}>
                      <CiMenuKebab
                        fill='gray'
                        size={22}
                      />
                    </div>
                  )
              }

            </div>

            <div className="open_links_section">

              {
                pathname !== "/" &&
                (
                  <div
                    className="navbar_items"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </div>
                )
              }

              <div
                className="navbar_items"
                onClick={() => scrollToComponent(CATEGORIES)}
              >
                Products
              </div>

              <div
                onClick={() => scrollToComponent(TESTIMONIALS)}
                className="navbar_items"
              >
                Testimonials
              </div>

              <div
                onClick={() => scrollToComponent(LETS_CONNECT)}
                className="navbar_items"
              >
                Contact
              </div>

            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Header;
