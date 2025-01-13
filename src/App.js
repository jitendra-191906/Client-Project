import React from 'react';
import Header from './Component/Header';
import About from './Component/About';
import Product from './Component/Products';
import Footer from './Component/Footer';
import Feature from './Component/Feature';
import Testimonials from './Component/Testimonials';
import Categories from './Component/Categories';
import SlideShow from './Component/SlideShow';
import Googlemap from './Component/Googlemap';
import Letconnect from './Component/Letconnect';
import Marble from './Component/Marble';
import Tiles from './Component/Tiles';
import Granite from './Component/Granite'
function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <SlideShow/> */}
      <Categories/>
      {/* <Marble/> */}
      {/* <Tiles/> */}
      {/* <About /> */}
      {/* <Product /> */}
      {/* <Feature/> */}
      {/* <Granite/> */}
      <Letconnect />
      <Testimonials/>
      <Googlemap />
      <Footer />
      </>
  );
}


export default App;
