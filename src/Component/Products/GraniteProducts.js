import React from 'react'
import "../../Style/productsSection.css"

import img1 from "../../Images/black_marble.png";


const productsList = [

  {
      image: img1,
      name: "White Granite"
  },
  {
      image: img1,
      name: "Black Granite"
  },
  {
      image: img1,
      name: "Red Granite"
  },
  {
      image: img1,
      name: "Green Granite"
  },
  {
      image: img1,
      name: "Blue Granite"
  },
]

const GraniteProducts = () => {
  return (
    <>
    <div className='products-page'>
                <div className='products-page-inner'>
                    <div> slide show</div>
                    <div>
                        <h2 className='website_heading_text'>
                            Explore Granite Products
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

export default GraniteProducts