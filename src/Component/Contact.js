// ContactUs.js
import React from "react";
import "../Style/contact.css"; // Import the CSS file for styling

function Contact ()  {
  return (
    <section id="contact" className="contact-us">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h2>Get in Touch with Us</h2>
          <p>Your satisfaction is our priority. We're here to assist you in every way possible.</p>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="contact-detail">
            <h3>📧 Email</h3>
            <p>We'd love to hear from you! Reach us at: <strong>jaipurtilesandgranite@gmail.com</strong></p>
          </div>
          <div className="contact-detail">
            <h3>📞 Phone</h3>
            <p>If you prefer to speak with us, call us at: <strong>+91 96943 17171 / 96941 77771</strong></p>
          </div>
          <div className="contact-detail">
            <h3>📍 Address</h3>
            <p>Visit our office at: <strong>Near HP Petrol Pump, Near Bharat Petrol Pump, Kalwad Road, Hathoj, Jaipur</strong></p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="map-container">
          <h3>Find Us on the Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.1827180635573!2d75.66830209999999!3d26.9611125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d005eae0773%3A0x6445e93422afb4d1!2sJaipur%20Tiles!5e0!3m2!1sen!2sin!4v1735813034999!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>

        {/* Floating Action Button */}
        <div className="contact-fab" >
          <button className="fab-btn" id="Contact">
          <a href="#contact"><span>📞</span> Call Us</a> 
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact;
