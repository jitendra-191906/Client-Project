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
    image: bathroomImage2,
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
    <div className="home_slideshow">
      <Slider {...settings}>
        {
          slides.map((slide, index) => {
            return (
              <React.Fragment key={index}>
                <div className="home_slide">
                  <div
                    className="home_slide_bg"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                </div>
              </React.Fragment>
            )
          })
        }
      </Slider>
    </div>
  );
};

export default SlideShow;
