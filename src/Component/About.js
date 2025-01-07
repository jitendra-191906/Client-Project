import React from 'react';
import '../Style/about.css';
import aboutImage from '../Images/about-image.jpg';
const About = () => {
  return (
    <section className="main_aboutus_container">
      <div className="aboutus_contianer_1">
        <div className="aboutus_tittle">
          <h1>About Us</h1>
        </div>
        <div className="aboutus_text" id='aboutus_align'>
          <div className="aboutus_p">
            <p>Jaipur tiles & Granites, reputed traders in the field of tiles, marble and granite for residential and commercial projects. Our showroom offers a wide selection of elegant and durable stones to enhance the beauty of your space</p>

          </div>
          <div className="aboutus_list" id='aboutus_align'>
            <ul>
              <li>Our team will there to help you in finding the best product that aligned your needs and give your home or you property a new and elegant look. </li>
              <li>We strive to deliver quality products and services to our customers. </li>
              <li>We provide various categories of marble, tiles and granite, including verities of texture, design and colors.</li>

            </ul>
          </div>

        </div>
      </div>
      <div className="aboutus_contianer_2">
        <div className="aboutus_image_div">
          <img
            src={aboutImage}
            alt=""
            className='aboutus_img'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
