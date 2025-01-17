import React from 'react'
import '../Style/granite.css'
import GraniteImage from '../Images/Granite_im.png';
import Featureimage1 from '../Images/Feature_img1.png';
import Featureimage2 from '../Images/Feature_img2.png';
import Featureimage3 from '../Images/Feature_img3.png';
import Featureimage4 from '../Images/Feature_img4.png';
import GraniteTypeImage1 from '../Images/granite_type_1.png';
import GraniteTypeImage2 from '../Images/granite_type_2.png';
import GraniteTypeImage3 from '../Images/granite_type_3.png';
import GraniteTypeImage4 from '../Images/granite_type_4.png';
import { GRANITES } from '../constants';


function Granite() {
      return (
            <>
                  <div id={GRANITES} className="granite_main_container">
                        <div className="grantie_text">
                              <h1>Explore our Granite</h1>
                        </div>
                        <div className="granite_deatils_main">

                              <div className="granite_quality_main">
                                    <div className="granite_quality_1">
                                          <div className="granite_feature_1">
                                                <div className="granite_feature_icon">
                                                      <img
                                                            src={Featureimage1}
                                                            alt=""
                                                            className='granite_feature_img'
                                                      />
                                                </div>
                                                <div className="granite_feature_text">
                                                      <p>Heat Resistance</p>
                                                </div>

                                          </div>
                                          <div className="granite_feature_2">
                                                <div className="granite_feature_icon">
                                                      <img
                                                            src={Featureimage2}
                                                            alt=""
                                                            className='granite_feature_img'
                                                      />
                                                </div>
                                                <div className="granite_feature_text">
                                                      <p>Stain Proof</p>
                                                </div>

                                          </div>

                                    </div>
                                    <div className="granite_quality_2">
                                          <div className="granite_feature_1">
                                                <div className="granite_feature_icon">
                                                      <img
                                                            src={Featureimage3}
                                                            alt=""
                                                            className='granite_feature_img'
                                                      />
                                                </div>
                                                <div className="granite_feature_text">
                                                      <p>Hardness</p>
                                                </div>

                                          </div>
                                          <div className="granite_feature_2">
                                                <div className="granite_feature_icon">
                                                      <img
                                                            src={Featureimage4}
                                                            alt=""
                                                            className='granite_feature_img'
                                                      />
                                                </div>
                                                <div className="granite_feature_text">
                                                      <p>Weather
                                                            Resistance</p>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                              <div className="granite_main_img">
                                    <img
                                          src={GraniteImage}
                                          alt=""
                                          className='granite_image'
                                    />
                              </div>
                        </div>
                        <div className="granite_type_main">
                              <div className="granite_type_deatils">
                                    <div className="granite_type_img">
                                          <img
                                                src={GraniteTypeImage1}
                                                alt=""
                                                className='granite_type_image'
                                          />
                                    </div>
                                    <div className="granite_type_text">Absolute Black</div>

                              </div>
                              <div className="granite_type_deatils">
                                    <div className="granite_type_img">
                                          <img
                                                src={GraniteTypeImage2}
                                                alt=""
                                                className='granite_type_image'
                                          />

                                    </div>
                                    <div className="granite_type_text">Majestic lappato granite</div>

                              </div>

                              <div className="granite_type_deatils">
                                    <div className="granite_type_img">
                                          <img
                                                src={GraniteTypeImage3}
                                                alt=""
                                                className='granite_type_image'
                                          />
                                    </div>
                                    <div className="granite_type_text">Red Pearl granite</div>
                              </div>
                              <div className="granite_type_deatils">
                                    <div className="granite_type_img">
                                          <img
                                                src={GraniteTypeImage4}
                                                alt=""
                                                className='granite_type_image'
                                          />
                                    </div>
                                    <div className="granite_type_text">Rajasthan Black Granite</div>
                              </div>

                        </div>
                        <div className="granite_explore_more">
                              <button className='granite_explore_button'> Show More</button>
                        </div>
                  </div>





            </>
      )
}

export default Granite
