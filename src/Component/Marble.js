import React from 'react'
import '../Style/marble.css'
import image1 from '../Images/marble_image.png'
import image2 from '../Images/white_marble.png'
import image3 from '../Images/red_marble.png'
import image4 from '../Images/black_marble.png'

function Marble() {
      return (
            <>
                  <div className="marble_main">
                        <div className="marble_details_section">
                              <div className="marble_details">
                                    <div className="marble_1">
                                          <h2>Explore our Marble Stone</h2>
                                          <p>We provide wide range of marble stone <br />including marble for flooring, roofing and for <br />other purpose.</p>
                                    </div>
                                    <div className="marble_2">
                                          <ul>
                                                <li>Durable and long lasting</li>
                                                <li>Heat Resistance suitable for kitchen <br />countertops</li>
                                                <li>Natural material no harmful chemical</li>
                                                <li>Resists erosion and footprints, making it a <br />good choice for flooring</li>
                                          </ul>
                                    </div>
                              </div>
                              <div className="marble_image_section">
                                    <img
                                          src={image1}
                                          alt=""
                                          className='marble_image'
                                    />
                              </div>
                        </div>
                        <div className="marble_type_section">
                              <div className="marble_type_div">
                                    <div className="marble_type_img">
                                          <img
                                                src={image2}
                                                alt=""
                                                className='marble_type_image'
                                          />
                                    </div>
                                    <div className="marble_type_title"></div>
                                    <h2>White Marble</h2>
                              </div>
                              <div className="marble_type_div">
                                    <div className="marble_type_img">
                                          <img
                                                src={image3}
                                                alt=""
                                                className='marble_type_image'
                                          />
                                    </div>
                                    <div className="marble_type_title"></div>
                                    <h2>Black Marble</h2>

                              </div>
                              <div className="marble_type_div">
                                    <div className="marble_type_img">
                                          <img
                                                src={image4}
                                                alt=""
                                                className='marble_type_image'
                                          />
                                    </div>
                                    <div className="marble_type_title">
                                          <h2>Red Marble</h2>
                                    </div>


                              </div>
                        </div>
                        <div className="marble_explore_section">
                              <button className='explore_button' >Show More</button>
                        </div>
                  </div>
            </>
      )
}

export default Marble
