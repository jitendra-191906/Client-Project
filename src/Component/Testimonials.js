import React from "react";
import "../Style/testimonials.css";
import customer1 from '../Images/cust1.png';
import customer2 from '../Images/cust2.png';
import customer3 from '../Images/cust3.jpg';


function Testimonials() {
  return (
    <>
      <div className="testimonials_main">
        <div className="testimonials_text">
          <h2>“Our clients often tell us.....</h2>
        </div>
        <div className="customer_review_main">
          <div className="customer_review">
            <div className="customer_details">
              <div className="customer_img">
                <img
                  src={customer1}
                  alt=""
                  className="img_customer"

                />
                <span className="cutomer_name" >Bessie Cooper</span>

              </div>
              <hr  className="hr_heading"/>



            </div>
            <div className="customer_say">
              <p>best experience and best quality of tiles. I have brought tiles and marble for my complete home. </p>
            </div>
          </div>

          <div className="customer_review">
            <div className="customer_details">
              <div className="customer_img">
                <img
                  src={customer2}
                  alt=""
                  className="img_customer"

                />
                <span className="cutomer_name">Arlene McCoy</span>

              </div>
              <hr className="hr_heading" />

            </div>
            <div className="customer_say">
              <p>best experience and best quality of tiles. I have brought tiles and marble for my complete home. </p>
            </div>
          </div>

          <div className="customer_review">
            <div className="customer_details">
              <div className="customer_img">
                <img
                  src={customer3}
                  alt=""
                  className="img_customer"

                />
                <span className="cutomer_name">Bessie Cooper</span>
              </div>
              <hr className="hr_heading" />
              </div>
              <div className="customer_say">
                <p>best experience and best quality of tiles. I have brought tiles and marble for my complete home. </p>
              </div>

            </div>
          </div>
        </div>
      
    </>
  )
}

export default Testimonials

