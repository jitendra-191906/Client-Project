import React from 'react'
import "../../Style/productsSection.css"

import img1 from "../../Images/ceramic_tile.jpeg";
import img2 from "../../Images/glass_tile.jpeg";
import img3 from "../../Images/cement_tile.jpeg";
import img4 from "../../Images/travertine_tile.jpeg";
import img5 from "../../Images/natural_tile.jpeg";
import img6 from "../../Images/mosaic_tile.jpeg";
import img7 from "../../Images/procelain_tile.jpeg";
import img8 from "../../Images/granite_tile.jpeg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../../Images/home_flooring.jpg";
import image2 from "../../Images/kitchen_flooring.jpg";
import image3 from "../../Images/bathroom_flooring.jpeg";


const productsList = [

  {
    image: img1,
    name: "Ceramic Tile"
  },
  {
    image: img2,
    name: "Glass Tile"
  },
  {
    image: img3,
    name: "Cement Tile"
  },
  {
    image: img4,
    name: "Travertine Tile"
  },
  {
    image: img5,
    name: "Nature Stone Tile"
  },
  {
    image: img6,
    name: "Mosaic Tile"
  },
  {
    image: img7,
    name: "Procelain Tile"
  },
  {
    image: img8,
    name: "Granite Tile"
  },
]


const slides = [
  {
    image: image1,
    title: "Tile Design Trends for a Modern Home",
  },
  {
    image: image2,
    title: "Modern Tile Designs",
  },
  {
    image: image3,
    title: "Custom Flooring Solutions",
  },
];
const TilesProducts = () => {
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
    <>
      {/* <Slideshow1/> */}
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
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='products-page'>
        <div className='products-page-inner'>
          <div>
            <h2 className='website_heading_text'>
              Explore Tiles Products
            </h2>
          </div>
          <div className='products-page-product-section'>
            {
              productsList?.map((product, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className='product-card-layout'>
                      <div className='product-card-img-sec'>
                        <img
                          className='product-card-img'
                          src={product?.image}
                          alt="product_image"
                        />
                      </div>
                      <div className='product-card-name'>
                        <p>{product?.name}</p>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })
            }

          </div>
        </div>

      </div>

    </>
  )
}

export default TilesProducts