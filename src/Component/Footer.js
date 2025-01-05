import React from "react";
import "../Style/footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social Media Icons
import LogoImage from '../Images/Logo.png'; // Assuming your logo is stored here

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top-sec ">

        <div className="footer-logo-section">
          <img
            src={LogoImage}
            alt="logo"
            className="footer-logo-img"
          />

          <p className="footer-company-text">
            Jaipur Tiles and granites to provide elegant look to your space
          </p>
        </div>

        <div className="footer-links-section">
          <div>🏠 Home</div>
          <div>🛒 Products</div>
          <div>📖 About Us</div>
          <div>📍 Contact Us</div>
          <div>🔒 Privacy Policy</div>
          <div>📝 Terms of Service</div>
        </div>

        <div className="footer-links-section">
          <div>🏠 Home</div>
          <div>🛒 Products</div>
          <div>📖 About Us</div>
          <div>📍 Contact Us</div>
          <div>🔒 Privacy Policy</div>
          <div>📝 Terms of Service</div>
        </div>

        {/* Social Media Links Section */}
        {/* <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon facebook" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div> */}

      </div>

      <div className="footer-bottom-sec">
        <p>
          &copy; 2025 All rights reserved.
        </p>
      </div>

      {/* </div> */}

    </footer>
  );
};

export default Footer;
