import React from "react";
import "../Style/footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social Media Icons
import LogoImage from '../Images/Logo.png'; // Assuming your logo is stored here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src={LogoImage} alt="Stone Showroom Logo" className="footer-logo-img" />
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <div className="footer-links-grid">
            <a href="#header">🏠 Home</a>
            <a href="#products">🛒 Products</a>
            <a href="#about">📖 About Us</a>
            <a href="#contact">📍 Contact Us</a>
            <a href="#privacy-policy">🔒 Privacy Policy</a>
            <a href="#terms">📝 Terms of Service</a>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-social">
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
        </div>
        <p>&copy; 2025 Jaipur Tiles & Granites Showroom. <br />All rights reserved.</p>

      </div>

     
    </footer>
  );
};

export default Footer;
