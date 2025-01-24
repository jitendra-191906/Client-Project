import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Googlemap from './Component/Googlemap';
import Router from './Router';
import SlideShow from './Component/SlideShow';


function App() {
  return (
    <>
      <Header />
      <Router />
      <Googlemap />
      <Footer />
    </>
  );
}


export default App;
