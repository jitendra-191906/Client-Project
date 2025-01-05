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
            Jaipur Tiles and granites to provide elegant look to your space
          </div>
          <div className="social_media">
            <div className="icon">
              <img src={Instagram} alt="Instagram" />
            </div>
            <div className="icon">
              <img src={Youtube} alt="Youtube" />
            </div>
            <div className="icon">
              <img src={Whatsapp} alt="Whatsapp" />
            </div>
            <div className="icon">
              <img src={Linkedin} alt="Linkedin" />
            </div>
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
              <img src={ContactImg} alt="contact logo" />

            </div>
            <div className="foocon_text">

              +91 9694317171 / 9694177771
            </div>

          </div>
          <div className="foocon">
            <div className="foocon_img">
              <img src={LocationImg} alt="location logo" />
            </div>
            <div className="foocon_text">
              <p> Near HP Petrol Pump,<br />
                Near Bharat Petrol Pump,<br />
                Kalwad Road, Hathoj, Jaipur</p>

            </div>
          </div>
          <div className="foocon">
            <div className="foocon_img">
              <img src={EmailImg} alt="email logo" />
            </div>
            <div className="foocon_text">
              jaipurtilesandgranite@gmail.com
            </div>
          </div>
          
          
        </div>
      </div>
      <hr className="hrtag" />
      <div className="footer-bottom-sec">
        <p>
          &copy; 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
