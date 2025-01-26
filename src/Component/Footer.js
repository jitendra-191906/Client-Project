import React from "react";
import "../Style/footer.css";
import LogoImage from '../Images/Logo_Image/Logo.png';
import ContactImg from '../Images/Social_Images/contactimg.png'
import LocationImg from '../Images/Social_Images/locationimg.png'
import EmailImg from '../Images/Social_Images/emailimg.png'
import Instagram from '../Images/Social_Images/instagram.png';
import Youtube from '../Images/Social_Images/youtube.png';
import Whatsapp from '../Images/Social_Images/whatsapp.png';
import Facebook from '../Images/Social_Images/facebook.jpeg';

import {
  LETS_CONNECT,
  GOOGLE_MAP,
  WHY_TO_CHOOSE,
  TESTIMONIALS,
  ABOUT_US,
  HEADER,
  CATEGORIES
} from "../constants";
import { useScrollToComponent } from "./helper";


const Footer = () => {

  const scrollToComponent = useScrollToComponent();

  return (
    <footer className="footer">

      <div className="footer-inner">

        <div className="footer-top-sec ">
          <div className="footer-logo-section">
            <div className="footer_logo_img">
              <img
                src={LogoImage}
                alt="logo"
                className="footer-logo-img"
              />
            </div>

            <div className="footer-company-text">
              <p className="website_semi_heading_text">
                Jaipur Tiles and granites to provide elegant look to your space
              </p>
            </div>


          </div>

          <div className="footer_about_section">

            <div
              className="about_item website_normal_text"
              onClick={() => scrollToComponent(HEADER)}
            >
              Home
            </div>

            <div
              className="about_item website_normal_text"
              onClick={() => scrollToComponent(CATEGORIES)}
            >
              Categories
            </div>
            <div
              className="about_item website_normal_text"
              onClick={() => scrollToComponent(WHY_TO_CHOOSE)}
            >
              Why to Choose
            </div>

            <div
              className="about_item website_normal_text"
              onClick={() => scrollToComponent(LETS_CONNECT)}
            >
              Contact Us
            </div>

            <div
              className="about_item website_normal_text"
              onClick={() => scrollToComponent(TESTIMONIALS)}
            >
              Testimonials
            </div>
          </div>

          <div className="footer_contact_section">

            <div className="foocon">
              <a
                href="tel:+919694177771"
                target="_blank"
                rel="noopener noreferrer"
                className="foocon"
              >
                <div className="foocon_img">
                  <img
                    src={ContactImg}
                    alt="contact logo"
                  />
                </div>
                <p className="foocon_text website_normal_text">
                  +91 9694177771
                </p>
              </a>
            </div>

            <div className="foocon">
              <a
                href="https://www.google.com/maps/dir//Jaipur+Tiles+Hari+Om+Nagar+Kalwar,+Rajasthan+302032/@26.9610625,75.6683125,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396c4d005eae0773:0x6445e93422afb4d1!2m2!1d75.6683125!2d26.9610625?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="foocon"
              >
                <div className="foocon_img">
                  <img
                    src={LocationImg}
                    alt="location logo"
                    rel="noopener noreferrer"
                  />
                </div>
                <p className="foocon_text website_normal_text">
                  Near HP Petrol Pump,
                  Kalwar Road, Hathoj, Jaipur
                </p>
              </a>
            </div>

            <div className="foocon">
              <a
                href="mailto:jaipurtilesandgranite@gmail.com?subject=Inquiry%20about%20Products&body=Dear%20Team,%0AI%20would%20like%20to%20know%20more%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="foocon"
              >
                <div className="foocon_img">
                  <img
                    src={EmailImg}
                    alt="email logo"
                  />
                </div>

                <p className="foocon_text website_normal_text">
                  jaipurtilesandgranite@gmail.com
                </p>
              </a>
            </div>

          </div>
        </div>

        <div className="footer-bottom-sec">

          <div className="social_media">
            <div className="social-media-inner">
              <div className="social-media-icon-sec">
                <a
                  href="https://www.instagram.com/jaipurtilesandgranites?utm_source=qr&igsh=MXJyNDNtdmhrYngwNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="social-media-icon"
                  />
                </a>

              </div>
              <div className="social-media-icon-sec">
                <a
                  href="https://youtube.com/@jaipurtilesandgranite?si=ynx-n22DWWR2AlTv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Youtube}
                    alt="Youtube"
                    className="social-media-icon"
                  />
                </a>

              </div>
              <div className="social-media-icon-sec">
                <a
                  href="https://wa.me/919694177771"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Whatsapp}
                    alt="Whatsapp"
                    className="social-media-icon"
                  />
                </a>

              </div>
              <div className="social-media-icon-sec">
                <a
                  href="https://www.facebook.com/share/15hCAncGMb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="social-media-icon"
                  />
                </a>

              </div>
            </div>
          </div>

          <div className="website_normal_text">
            <p>
              &copy; 2025 All rights reserved.
            </p>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
