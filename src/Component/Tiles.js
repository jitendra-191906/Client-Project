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

const tilesTypeExample = [
      {
            image: image1,
            name: "Indoor Tiles",
      },
      {
            image: image2,
            name: "Outdoor Tiles",
      },
      {
            image: image3,
            name: "Kitchen tiles",
      },
      {
            image: image4,
            name: "Bathroom Tiles",
      },
      // {
      //       image: image5,
      //       name: "Floor tiles",
      // },
]

function Tiles() {

      const navigate = useNavigate();

      return (
            <>
                  <div
                        id={TILES}
                        className="tiles_section_main"
                  >
                        <div className='tiles_section_inner'>
                              <div className="tile_text website_heading_text">
                                    <h2>Explore our Tiles</h2>
                              </div>
                              {/* <div className="tiles_details_main"> */}
                              {/* <div className="tiles_details_img">
                                          <img
                                                src={TileImage}
                                                alt=""
                                                className='Tiles_image'
                                          />
                                    </div> */}
                              {/* <div className="tiles_details_section"> */}
                              {/* <div className="tiles_details_1">
                                                <h2>Explore our Tiles</h2>
                                                <p>We provide wide range of tiles stone including <br /> for kitchen, bathroom, wall, indoor, outdoor <br />
                                                      and for other purpose.</p>
                                          </div> */}
                              {/* <div className="tiles_details_2">
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
                                          </div> */}

                              {/* </div> */}
                              {/* </div> */}

                              <div className="marble_inner_type_sec">
                                    {
                                          tilesTypeExample.map((type, index) => {
                                                return (
                                                      <React.Fragment key={index}>
                                                            <div
                                                                  className="marble_type_deatils"
                                                                  onClick={() => navigate("/marble")}
                                                            >
                                                                  <div className="marble_type_img">
                                                                        <img
                                                                              src={type.image}
                                                                              alt=""
                                                                              className='marble_type_image'
                                                                        />
                                                                  </div>
                                                                  <div className="marble_type_text">
                                                                        {type.name}
                                                                  </div>
                                                            </div>
                                                      </React.Fragment>
                                                )
                                          })
                                    }
                              </div>

                              <div className="marble_inner_bottom">
                                    <button
                                          className='marble_explore_button'
                                          onClick={() => navigate("/tiles")}
                                    >
                                          Show More
                                    </button>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Tiles;
