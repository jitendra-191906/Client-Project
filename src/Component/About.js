import React from 'react'
import background from '../Images/jaipur.jpg'
import '../Style/about.css'

function About() {

  return (
    <>
   
      <section id="about" className="about">
      <div className="hero">
        <h1>Welcome to Jaipur Tiles & Granite to Beautify Your Space</h1>
      </div>
      <div className="bggroungimage">
        <img src={background} alt="" />
      </div>
        <h2>About Us</h2>
        <p>
        We are a leading provider of high-quality tiles, marble, and granite
          for residential and commercial projects. Our showroom offers a wide
          selection of elegant and durable stones to enhance the beauty of your
          spaces. With years of expertise, we aim to provide exceptional
          service and unique designs to meet your needs.
        </p>
      </section>
     

      
    </>
  )
}

export default About
