import React from "react";
import "../Style/testimonials.css";
import customer1 from '../Images/cust1.png';
import customer2 from '../Images/cust2.png';
import customer3 from '../Images/cust3.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Style/slideshow.css';

const customerReviewsList = [
  {
    name: "Bessie Cooper",
    profileImg: customer1,
    reviewText: "best experience and best quality of tiles. I have brought tiles and marble for my complete home.",
  },
  {
    name: "Bessie Cooper",
    profileImg: customer1,
    reviewText: "best experience and best quality of tiles. I have brought tiles and marble for my complete home.",
  },
  {
    name: "Bessie Cooper",
    profileImg: customer1,
    reviewText: "best experience and best quality of tiles. I have brought tiles and marble for my complete home.",
  },
  {
    name: "Bessie Cooper",
    profileImg: customer1,
    reviewText: "best experience and best quality of tiles. I have brought tiles and marble for my complete home.",
  },

]

function Testimonials() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>
      <div className="testimonials_main">
        <div className="testimonial_inner">
          <div className="testimonials_text">
            <h2 className="website_heading_text">
              “Our clients often tell us.....
            </h2>
          </div>
          <div className="testimonial_bottom">
            {/* <div className="slider-container">


            <Slider {...settings}> */}
            {
              customerReviewsList.map((customer, index) => {

                return (
                  <React.Fragment key={index + 1}>

                    <div className="customer_review">
                      <div className="customer_review_inner">

                        <div className="customer_details">
                          <img
                            src={customer1}
                            alt=""
                            className="img_customer"
                          />
                          <span className="cutomer_name" >Bessie Cooper</span>
                        </div>

                        <hr className="hr_heading" />

                        <div className="customer_review_text">
                          <p>best experience and best quality of tiles. I have brought tiles and marble for my complete home. </p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })
            }

            {/* </Slider>

          </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials

