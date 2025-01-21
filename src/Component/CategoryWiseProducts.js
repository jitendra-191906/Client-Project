import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Style/productsSection.css"
import { useLocation } from 'react-router-dom';

import {
    marble,
    granite,
    tile_bathroom,
    tile_floor,
    tile_indoor,
    tile_kitchen,
    tile_outdoor
} from '../constants.js';

import {
    marbleSlides,
    graniteSlides,
    kitchenTileSlides,
    floorTileSlides,
    bathroomTileSlides,
    indoorTileSlides,
    outdoorTileSlides,

    marbleHeadingText,
    graniteHeadingText,
    kitchenTileHeadingText,
    floorTileHeadingText,
    bathroomTileHeadingText,
    indoorTileHeadingText,
    outdoorTileHeadingText,

    marbleProductsList,
    graniteProductsList,
    kitchenTileProductsList,
    floorTileProductsList,
    bathroomTileProductsList,
    indoorTileProductsList,
    outdoorTileProductsList,
} from './Data.js';

const SlideShow = (props) => {

    const { slides } = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <>
            <div className="testimonials_slideshow">
                <Slider {...settings}>
                    {
                        slides.map((slide, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div
                                        key={index}
                                        className="testimonial_slide"
                                    >
                                        <div
                                            className="testimonial_slide_bg"
                                            style={{
                                                backgroundImage: `url(${slide.image})`,
                                            }}
                                        >
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}


const Heading = (props) => {

    const { text } = props;

    return (
        <>
            <h2 className='website_heading_text'>
                {text}
            </h2>
        </>
    )
}


const ProductsCard = (props) => {

    const { productsList } = props;

    return (
        <>
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
        </>
    )
}

const getSlidesByScreen = (pathname) => {

    switch (pathname) {
        case marble: return marbleSlides;
        case granite: return graniteSlides;
        case tile_kitchen: return kitchenTileSlides;
        case tile_bathroom: return bathroomTileSlides;
        case tile_floor: return floorTileSlides;
        case tile_indoor: return indoorTileSlides;
        case tile_outdoor: return outdoorTileSlides;

        default: return [];
    }
}

const getHeadingTextByScreen = (pathname) => {
    switch (pathname) {
        case marble: return marbleHeadingText;
        case granite: return graniteHeadingText;
        case tile_kitchen: return kitchenTileHeadingText;
        case tile_bathroom: return bathroomTileHeadingText;
        case tile_floor: return floorTileHeadingText;
        case tile_indoor: return indoorTileHeadingText;
        case tile_outdoor: return outdoorTileHeadingText;

        default: return "";
    }
}

const getProductsListByScreen = (pathname) => {
    switch (pathname) {
        case marble: return marbleProductsList;
        case granite: return graniteProductsList;
        case tile_kitchen: return kitchenTileProductsList;
        case tile_bathroom: return bathroomTileProductsList;
        case tile_floor: return floorTileProductsList;
        case tile_indoor: return indoorTileProductsList;
        case tile_outdoor: return outdoorTileProductsList;

        default: return [];
    }
}

const CategoryWiseProducts = () => {

    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            <div className='products-page'>
                <div className='products-page-inner'>
                    <SlideShow
                        slides={getSlidesByScreen(pathname)}
                    />
                    <Heading
                        text={getHeadingTextByScreen(pathname)}
                    />
                    <ProductsCard
                        productsList={getProductsListByScreen(pathname)}
                    />
                </div>
            </div>
        </>
    )
}

export default CategoryWiseProducts;