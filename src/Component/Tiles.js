import React from 'react'
import '../Style/tiles.css'
import TileImage from '../Images/Tiles.png'
import Type1 from '../Images/Ceramic_tiles.png'
import Type2 from '../Images/Glass_tiles.png'
import Type3 from '../Images/Cement_tiles.png'

import image1 from '../Images/Indoor_Tiles.png'
import image2 from '../Images/Outdoor_Tiles.png'
import image3 from '../Images/Kitchen_tiles.png'
import image4 from '../Images/Bathroom_Tiles.png'
import image5 from '../Images/Floor_tiles.png'
import { TILES } from '../constants'
import { useNavigate } from 'react-router-dom'


function Tiles() {

      const navigate = useNavigate();

      const handleClick = () => {
            window.scrollTo(0, 0);
            navigate("/tiles");
      };

      return (
            <>
                  <div id={TILES} className="tiles_section_main">
                        <div className='tiles_section_inner'>
                              <div className="tiles_details_main">
                                    <div className="tiles_details_img">
                                          <img
                                                src={TileImage}
                                                alt=""
                                                className='Tiles_image'
                                          />
                                    </div>
                                    <div className="tiles_details_section">
                                          <div className="tiles_details_1">
                                                <h2>Explore our Tiles</h2>
                                                <p>We provide wide range of tiles stone including <br /> for kitchen, bathroom, wall, indoor, outdoor <br />
                                                      and for other purpose.</p>
                                          </div>
                                          <div className="tiles_details_2">
                                                <div className="tiles_details_2_section">
                                                      <div className="tiles_details_2_section_1">
                                                            <img
                                                                  src={Type1}
                                                                  alt=""
                                                                  className='Ceramic_tiles' />
                                                      </div>
                                                      <div className="tiles_details_2_section_2">
                                                            <p>Ceramic tiles</p>
                                                      </div>
                                                </div>
                                                <div className="tiles_details_2_section">
                                                      <div className="tiles_details_2_section_1">
                                                            <img
                                                                  src={Type2}
                                                                  alt=""
                                                                  className='Ceramic_tiles' />
                                                      </div>
                                                      <div className="tiles_details_2_section_2">
                                                            <p>Glass tiles</p>
                                                      </div>
                                                </div>
                                                <div className="tiles_details_2_section">
                                                      <div className="tiles_details_2_section_1">
                                                            <img
                                                                  src={Type3}
                                                                  alt=""
                                                                  className='Ceramic_tiles' />
                                                      </div>
                                                      <div className="tiles_details_2_section_2">
                                                            <p>Cement tiles</p>
                                                      </div>
                                                </div>
                                          </div>

                              </div>
                        </div>
                        <div className="tiles_type_main">
                              <div className="tiles_type_continer">
                                    <div className="tiles_image_section">
                                          <img
                                                src={image1}
                                                alt=""
                                                className='image_of_tiles'
                                          />
                                    </div>
                                    <div className="tiles_name">Indoor Tiles</div>
                              </div>
                              <div className="tiles_type_continer">
                                    <div className="tiles_image_section">
                                          <img
                                                src={image2}
                                                alt=""
                                                className='image_of_tiles'
                                          />
                                    </div>
                                    <div className="tiles_name">Outdoor Tiles</div>
                              </div>
                              <div className="tiles_type_continer">
                                    <div className="tiles_image_section">
                                          <img
                                                src={image3}
                                                alt=""
                                                className='image_of_tiles'
                                          />
                                    </div>
                                    <div className="tiles_name">Kitchen tiles</div>
                              </div>
                              <div className="tiles_type_continer">
                                    <div className="tiles_image_section">
                                          <img
                                                src={image4}
                                                alt=""
                                                className='image_of_tiles'
                                          />
                                    </div>
                                    <div className="tiles_name"> Bathroom Tiles</div>
                              </div>
                              <div className="tiles_type_continer">
                                    <div className="tiles_image_section">
                                          <img
                                                src={image5}
                                                alt=""
                                                className='image_of_tiles'
                                          />
                                    </div>
                                    <div className="tiles_name">Floor tiles</div>
                              </div>
                        </div>
                        <div className="Tile_explore_section">
                        <button className='tile_explore_button' onClick={handleClick} >Show More</button>


                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Tiles
