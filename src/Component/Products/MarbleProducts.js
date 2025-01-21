import React from 'react'
import "../../Style/productsSection.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../../Images/white_marble.jpeg";
import img2 from "../../Images/travertine_marble.jpeg";
import img3 from "../../Images/onyx_marble.jpeg";
import img4 from "../../Images/statuario_marble.jpeg";
import img5 from "../../Images/Italian_marble.jpeg";
import img6 from "../../Images/black_marquina_marble.jpeg";
import img7 from "../../Images/Grey_William_Italian_Marble.jpeg";
import img8 from "../../Images/Emperador_Marble.jpeg";


import image1 from "../../Images/marble_flooring_1.jpg";
import image2 from "../../Images/marble_flooring_2.jpeg";
import image3 from "../../Images/marble_flooring_3.jpeg";


const productsList = [

    {
        image: img1,
        name: "White Marble"
    },
    {
        image: img2,
        name: "Travertine Marble"
    },
   
    {
        image: img3,
        name: "Onyx Marble"
    },
    {
        image: img4,
        name: "Statuario Marble"
    },
    {
        image: img5,
        name: "Italian Marble"
    },
    {
        image: img6,
        name: "Black Marquina Marble"
    },
    {
        image: img7,
        name: " Grey William Italian Marble"
    },
    {
        image: img8,
        name: "Emperador Marble"
    },
]

const slides = [
    {
      image: image1,
      title: "Elegant Granite Flooring",
    },
    {
      image:image3,
      title: "Modern Tile Designs",
    },
    {
      image:image2,
      title: "Custom Flooring Solutions",
    },
  ];
const MarbleProducts = () => {

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
        

            <div className='products-page'>
                <div className='products-page-inner'>
                    <div>
                        <h2 className='website_heading_text'>
                            Explore Marbel Products
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

export default MarbleProducts;