import React from 'react'
import "../../Style/products.css"

import img1 from "../../Images/ceramic_tile.jpeg";
import img2 from "../../Images/glass_tile.jpeg";
import img3 from "../../Images/cement_tile.jpeg";
import img4 from "../../Images/travertine_tile.jpeg";
import img5 from "../../Images/natural_tile.jpeg";
import img6 from "../../Images/mosaic_tile.jpeg";
import img7 from "../../Images/procelain_tile.jpeg";
import img8 from "../../Images/granite_tile.jpeg";
import Slideshow1 from '../Slideshow1';


const productsList = [

  {
    image: img1,
    name: "Ceramic Tile"
  },
  {
    image: img2,
    name: "Glass Tile"
  },
  {
    image: img3,
    name: "Cement Tile"
  },
  {
    image: img4,
    name: "Travertine Tile"
  },
  {
    image: img5,
    name: "Nature Stone Tile"
  },
  {
    image: img6,
    name: "Mosaic Tile"
  },
  {
    image: img7,
    name: "Procelain Tile"
  },
  {
    image: img8,
    name: "Granite Tile"
  },
]
const TilesProducts = () => {


  return (
    <>
                <Slideshow1/>

      <div className='products-page'>
        <div className='products-page-inner'>
          <div>
            <h2 className='website_heading_text'>
              Explore Tiles Products
            </h2>
          </div>
          <div className='products-page-product-section'>
            {
              productsList?.map((product, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className='product-card-layout'>
                      <div className='product-card-img-sec'>
                        <img
                          className='product-card-img'
                          src={product?.image}
                          alt="product_image"
                        />
                      </div>
                      <div className='product-card-name'>
                        <p>{product?.name}</p>
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

export default TilesProducts