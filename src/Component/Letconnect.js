import React from 'react'
import ContactImg from '../Images/contactimg.png'
import LocationImg from '../Images/locationimg.png'
import EmailImg from '../Images/emailimg.png'
import '../Style/letconnect.css'

function Letconnect() {
      return (
            <>
                  <div className="let_connect_main">
                        <div className="connect_inner">
                              <h2>Lets  connect!</h2>
                        </div>
                        <div className="connect_inner">
                              <h3>connect us and get best offers and learnmore.</h3>
                        </div>
                        <div className="connect_inner">
                              <div className="connect_form">
                                    <div className="connect_input">
                                          <input
                                                type="text"
                                                placeholder='Your connect No.'
                                                className='input_button'
                                          />
                                    </div>
                                    <div className="connect_submit">
                                          <button className='connect_button'> submit</button>

                                    </div>

                              </div>
                        </div>
                        <div className="letconnect_section">

                              <div className="letconnect_items">
                                    <div className="letconnect_img">
                                          <img
                                                src={ContactImg}
                                                alt="contact logo"
                                          />
                                    </div>
                                    <p className="letconnect_text">
                                          +91 9694317171 | +91 9694177771
                                    </p>
                              </div>

                              <div className="letconnect_items">
                                    <div className="letconnect_img">
                                          <img
                                                src={LocationImg}
                                                alt="location logo"
                                          />
                                    </div>
                                    <p className="letconnect_text">
                                          Near HP Petrol Pump,
                                          Near Bharat Petrol Pump,
                                          Kalwad Road, Hathoj, Jaipur
                                    </p>
                              </div>

                              <div className="letconnect_items">
                                    <div className="letconnect_img">
                                          <img
                                                src={EmailImg}
                                                alt="email logo"
                                          />
                                    </div>
                                    <p className="letconnect_text">
                                          jaipurtilesandgranite@gmail.com
                                    </p>
                              </div>

                        </div>
                  </div>

            </>
      )
}

export default Letconnect
