import React from 'react'
import ContactImg from '../Images/Social_Images/contactimg.png'
import LocationImg from '../Images/Social_Images/locationimg.png'
import EmailImg from '../Images/Social_Images/emailimg.png'
import '../Style/letconnect.css'
import { LETS_CONNECT } from '../constants'

function Letconnect() {
      return (
            <>
                  <div
                        id={LETS_CONNECT}
                        className="let_connect_section">
                        <div className='let-connect-top'>

                              <div className="let-connect-top-title">
                                    <p>Lets  Connect!</p>
                              </div>
                              <div className="let-connect-top-description website_normal_text">
                                    <p>Connect Us And Get Best Offers And Deals.</p>
                              </div>
                        </div>

                        <div className="let-connect-bottom">

                              <div className="let_connect_bottom_items">
                                    <a
                                          href="tel:+919694177771"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                          <div className="letconnect_img">
                                                <img
                                                      src={ContactImg}
                                                      alt="contact logo"
                                                />
                                          </div>
                                    </a>
                                    <p className="letconnect_text website_normal_text">
                                          <a
                                                href="tel:+919694177771"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='connect_mobile_no'
                                          >
                                                <span >+91 9694177771</span>
                                          </a>
                                          <span> | </span>
                                          <a
                                                href="tel:+919694317171"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='connect_mobile_no'
                                          >
                                                <span>+91 9694317171</span>
                                          </a>
                                    </p>

                              </div>

                              <div className="let_connect_bottom_items">
                                    <a
                                          href="https://www.google.com/maps/dir//Jaipur+Tiles+Hari+Om+Nagar+Kalwar,+Rajasthan+302032/@26.9610625,75.6683125,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396c4d005eae0773:0x6445e93422afb4d1!2m2!1d75.6683125!2d26.9610625?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="let_connect_bottom_items"
                                    >
                                          <div className="letconnect_img">
                                                <img
                                                      src={LocationImg}
                                                      alt="location logo"
                                                />
                                          </div>
                                          <p className="letconnect_text website_normal_text">
                                                Near HP Petrol Pump,
                                                Kalwar Road, Hathoj, Jaipur
                                          </p>
                                    </a>
                              </div>

                              <div className="let_connect_bottom_items">
                                    <a
                                          href="mailto:jaipurtilesandgranite@gmail.com?subject=Inquiry%20about%20Products&body=Dear%20Team,%0AI%20would%20like%20to%20know%20more%20about..."
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="let_connect_bottom_items"
                                    >
                                          <div className="letconnect_img">
                                                <img
                                                      src={EmailImg}
                                                      alt="email logo"
                                                />
                                          </div>
                                          <p className="letconnect_text website_normal_text">
                                                jaipurtilesandgranite@gmail.com
                                          </p>
                                    </a>
                              </div>

                        </div>
                  </div>

            </>
      )
}

export default Letconnect
