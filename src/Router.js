import React from 'react'
import Home from './Component/Home';
import MarbleProducts from './Component/Products/MarbleProducts';
import TilesProducts from './Component/Products/TilesProducts';
import GraniteProducts from './Component/Products/GraniteProducts';

import { Routes, Route } from "react-router";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/marbel"} element={<MarbleProducts />} />
        <Route path={"/granite"} element={<GraniteProducts />} />
        <Route path={"/tiles"} element={<TilesProducts />} />
      </Routes>

    </>
  )
}

export default Router;