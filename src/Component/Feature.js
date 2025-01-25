import React from 'react'
import '../Style/feature.css'
import img1 from '../Images/Category_Images/wide_varity.png'
import img2 from '../Images/Category_Images/Quality.png'
import img3 from '../Images/Category_Images/Multiple.png'
import img4 from '../Images/Category_Images/expert.png'

import { WHY_TO_CHOOSE } from '../constants'

const featureList = [

  {
    image: img1,
    title: "Wide Variety",
    description: "Offer a wide selection of tiles, marble and granite to suit every style and budget",
  },
  {
    image: img2,
    title: "Quality Assurance",
    description: "Products are trusted suppliers and undergo strict quality checks",
  },
  {
    image: img3,
    title: "Multiple design",
    description: "Experts can help yoy create custom designs to bring your vision to life",
  },
  {
    image: img4,
    title: "Expert Guidance",
    description: "Professionals are here to guide you in choosing the perfect material",
  }
]


function Feature() {
  return (
    <>
      <div
        id={WHY_TO_CHOOSE}
        className="whychoose_us">
        <div className='whychoose_us_inner'>
          <div className="whychoose_top website_heading_text">
            <h2>Why to choose us?</h2>
            {
              /* <div className="whychoose_text_2">
              <p>We have many trusted customer that says that </p>
              <ul>
                <li>our product are of best quality and best priced. </li>
                <li>The wide range of verities in the product that makes you to choose best for your space</li>
              </ul>
            </div> */
            }
          </div>
          <div className="whychoose_bottom">


            {
              featureList?.map((feature, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="whychoose_card_layout">
                      <div className="whychoose_card_image">
                        <img
                          src={feature.image}
                          alt="img"
                          className={`choose_img`}
                        />
                      </div>
                      <div className="whychoose_card_title website_semi_heading_text">
                        <p>
                          {feature.title}
                        </p>
                      </div>
                      <div className="whychoose_card_description website_normal_text">
                        <p>
                          {feature.description}
                        </p>
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

export default Feature
