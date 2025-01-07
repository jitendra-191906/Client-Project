import React from 'react';
import Header from './Component/Header';
import About from './Component/About';
import Product from './Component/Products';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Feature from './Component/Feature';
import Testimonials from './Component/Testimonials';
import Categories from './Component/Categories';
import SlideShow from './Component/SlideShow';

function App() {
  return (
    <>
      <Header />
      <SlideShow/>
      <Categories/>
      <About />
      {/* <Product /> */}
      <Feature/>
      {/* <Testimonials/> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}


export default App;
