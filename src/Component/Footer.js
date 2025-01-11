import React from "react";
import "../Style/footer.css";
import LogoImage from '../Images/Logo.png';
import ContactImg from '../Images/contactimg.png'
import LocationImg from '../Images/locationimg.png'
import EmailImg from '../Images/emailimg.png'
import Instagram from '../Images/instagram.png';
import Youtube from '../Images/youtube.png';
import Whatsapp from '../Images/whatsapp.png';
import Linkedin from '../Images/linkedin.png';


const Footer = () => {
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
              <p>
                Jaipur Tiles and granites to provide elegant look to your space
              </p>
            </div>


          </div>

          <div className="footer_about_section">
            <div className="about_item"> Home</div>
            <div className="about_item"> Products</div>
            <div className="about_item"> About Us</div>
            <div className="about_item"> Contact Us</div>
            <div className="about_item"> Sitemap</div>
          </div>

          <div className="footer_contact_section">

            <div className="foocon">
              <div className="foocon_img">
                <img
                  src={ContactImg}
                  alt="contact logo"
                />
              </div>
              <p className="foocon_text">
                +91 9694317171 | +91 9694177771
              </p>
            </div>

            <div className="foocon">
              <div className="foocon_img">
                <img
                  src={LocationImg}
                  alt="location logo"
                />
              </div>
              <p className="foocon_text">
                Near HP Petrol Pump,
                Kalwad Road, Hathoj, Jaipur
              </p>
            </div>

            <div className="foocon">
              <div className="foocon_img">
                <img
                  src={EmailImg}
                  alt="email logo"
                />
              </div>
              <p className="foocon_text">
                jaipurtilesandgranite@gmail.com
              </p>
            </div>

          </div>
        </div>

        <div className="footer-bottom-sec">

          <div className="social_media">
            <div className="social-media-inner">
              <div className="social-media-icon-sec">
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="social-media-icon"
                />
              </div>
              <div className="social-media-icon-sec">
                <img
                  src={Youtube}
                  alt="Youtube"
                  className="social-media-icon"
                />
              </div>
              <div className="social-media-icon-sec">
                <img
                  src={Whatsapp}
                  alt="Whatsapp"
                  className="social-media-icon"
                />
              </div>
              <div className="social-media-icon-sec">
                <img
                  src={Linkedin}
                  alt="Linkedin"
                  className="social-media-icon"
                />
              </div>
            </div>
          </div>

          <div>
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
