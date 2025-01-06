import React from 'react'
import '../Style/feature.css'
import img1 from '../Images/wide_varity.png'
import img2 from '../Images/Quality.png'
import img3 from '../Images/Multiple.png'
import img4 from '../Images/expert.png'


function Feature() {
  return (
    <>
      <div className="whychoose_us">
        <div className="whychoose_text">
          <div className="whychoose_text_1">
            <h1>Why to choose us?</h1>
          </div>
          <div className="whychoose_text_2">
            <p>We have many trusted customer that says that </p>
            <ul>
              <li>our product are of best quality and best priced. </li>
              <li>The wide range of verities in the product that makes you to choose best for your space</li>
            </ul>
          </div>
        </div>
        <div className="whychoose_items">
          <div className="whychoose_items_contain">
            <div className="items_details">
              <img
                src={img1}
                alt="img"
                className={`choose_img`}
              />
            </div>
            <div className="items_details">
              <h4>Wide Variety</h4>
            </div>
            <div className="items_details">
              <p>Offer a wide selection of tiles, marble
                and granite to suit every style and
                budget</p>
            </div>
          </div>
          <div className="whychoose_items_contain">
            <div className="items_details">
              <img
                src={img2}
                alt="img"
                className={`choose_img`}
                
              />
            </div>
            <div className="items_details">
              <h4>Quality Assurance</h4>
            </div>
            <div className="items_details">
              <p>Products are trusted suppliers and
                undergo strict quality checks</p>

            </div>
          </div>
          <div className="whychoose_items_contain">
            <div className="items_details">
              <img
                src={img3}
                alt="img"
                className={`choose_img`}
              />
            </div>
            <div className="items_details">
              <h4>Multiple design</h4>
            </div>
            <div className="items_details">
              Experts can help yoy create custom
              designs to bring your vision to life
            </div>
          </div>
          <div className="whychoose_items_contain">
            <div className="items_details">
              <img
                src={img4}
                alt="img"
                className={`choose_img`}
              />
            </div>
            <div className="items_details">
              <h4>Expert Guidance</h4>
            </div>
            <div className="items_details">
              <p>Professionals are here to guide you
                in choosing the perfect material</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature
