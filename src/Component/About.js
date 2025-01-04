import React from 'react';
import '../Style/about.css'; // Link to the CSS file for styling
import aboutImage from '../Images/about-image.jpg'; // Replace with actual image path
import { FaRegCheckCircle } from 'react-icons/fa'; // Using an icon for bullet points

const About = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>

          <div className="about-details">
            <div className="about-point">
              <FaRegCheckCircle className="about-icon" />
              <span>Jaipur Tiles & Granites, renowned for offering the finest tiles, marble, and granite for residential and commercial projects.</span>
            </div>
            <div className="about-point">
              <FaRegCheckCircle className="about-icon" />
              <span>We provide a wide selection of durable and elegant stones to enhance your space.</span>
            </div>
            <div className="about-point">
              <FaRegCheckCircle className="about-icon" />
              <span>Our mission is to deliver high-quality materials and exceptional service to every customer.</span>
            </div>
            <div className="about-point">
              <FaRegCheckCircle className="about-icon" />
              <span>Offering an extensive range of marble, tiles, and granite in various colors and styles.</span>
            </div>
            <div className="about-point">
              <FaRegCheckCircle className="about-icon" />
              <span>Committed to excellence, we provide products that elevate the beauty and durability of your spaces.</span>
            </div>
          </div>

          <div className="about-text-summary">
            <p className="first-part">
              Jaipur Tiles & Granites is a well-known supplier in the tile, marble, and granite industry. Our products are specifically selected to meet high standards of beauty and durability. <span className="gradient1">We aim to offer the best quality materials to suit any residential or commercial space.</span>
            </p>
            <p className="second-part">
              We specialize in a wide variety of marble, tiles, and granite, ranging from kitchen and bathroom tiles to floor and outdoor tiles. <span className="gradient2">Our team is dedicated to offering superior service to ensure your satisfaction with every project.</span>
            </p>
            <p className="third-part">
              With a focus on delivering value, we strive to ensure that each project is executed to the highest standard. <span className="gradient3">Quality is at the core of everything we do, from the materials we select to the service we provide.</span>
            </p>
          </div>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default About;
