import React from 'react'
import '../Style/googlemap.css';

function Googlemap() {
  return (
    <>
      <div className="map-container">
        <h2 className='website_heading_text'>
          Find Us on the Map
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.1827180635573!2d75.66830209999999!3d26.9611125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d005eae0773%3A0x6445e93422afb4d1!2sJaipur%20Tiles!5e0!3m2!1sen!2sin!4v1735813034999!5m2!1sen!2sin"
          title="Location Map"
        />
      </div>
    </>
  )
}

export default Googlemap
