import React from 'react'

import About from './About';
import Product from './Products';
import Feature from './Feature';
import Testimonials from './Testimonials';
import Categories from './Categories';
import SlideShow from './SlideShow';
import Letconnect from './Letconnect';
import Marble from './Marble';
import Tiles from './Tiles';
import Granite from './Granite'

const Home = () => {
    return (
        <>
            <SlideShow/>
            <Categories />
            {/* <Marble/> */}
            {/* <Granite/> */}
            {/* <Tiles/> */}
            <Product />
            <About />
            <Feature/>
            <Letconnect />
            <Testimonials />
        </>
    )
}

export default Home