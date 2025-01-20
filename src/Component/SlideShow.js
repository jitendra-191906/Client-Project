import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/slideshow.css';
import img1 from '../Images/GraniteFlooring.jpeg';
import img2 from '../Images/TileFlooring.jpg';
import img3 from '../Images/image3show.jpg';
import img4 from '../Images/showroom_interior.jpeg';
import img5 from '../Images/image3show.jpg';

const slides = [
  {
    image: img1,
    title: "Elegant Granite Flooring",
    description: "Bring timeless beauty to your home with granite floors.",
  },
  {
    image: img2,
    title: "Modern Tile Designs",
    description: "Upgrade your spaces with tiles crafted for durability and style.",
  },
  {
    image: img3,
    title: "Custom Flooring Solutions",
    description: "Tailored solutions for your dream interiors.",
  },
  {
    image: img4,
    title: "Custom Flooring Solutions",
    description: "Tailored solutions for your dream interiors.",
  },
  {
    image: img3,
    title: "Custom Flooring Solutions",
    description: "Tailored solutions for your dream interiors.",
  },
];

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // No navigation arrows for simplicity
  };

  return (
    <div className="testimonials_slideshow">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="testimonial_slide">
            <div
              className="testimonial_slide_bg"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="testimonial_text_overlay">
                {/* <h2 className="testimonial_slide_title">{slide.title}</h2> */}
                {/* <p className="testimonial_slide_description">{slide.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
