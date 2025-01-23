import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/slideshow.css';
// import img1 from '../Images/Granite_design/GraniteFlooring.jpeg';
import img2 from '../Images/Marble_design/jaipur.jpg';
import img3 from '../Images/Marble_design/image3show.jpg';
import kitchenImage1 from '../Images/Kitchen_design/kitchen_flooring_1.jpg';

// import bathroomImage1 from '../Images/Bathroom_design/bathroom_flooring_1.jpg';
import bathroomImage2 from '../Images/Bathroom_design/bathroom_flooring_2.jpeg';
import bathroomImage3 from '../Images/Bathroom_design/bathroom_flooring_3.jpg';

const slides = [
  {
    image: kitchenImage1,
  },
  {
    image: img2,
  },
  {
    image:bathroomImage2,
  },
  {
    image: img3,
  },
  {
    image: bathroomImage3,
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
