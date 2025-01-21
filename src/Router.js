import React from 'react'
import Home from './Component/Home';
import MarbleProducts from './Component/Products/MarbleProducts';
import TilesProducts from './Component/Products/TilesProducts';
import GraniteProducts from './Component/Products/GraniteProducts';

import CategoryWiseProducts from './Component/CategoryWiseProducts';

import { Routes, Route } from "react-router";
import {
  marble,
  granite,
  tile_bathroom,
  tile_floor,
  tile_indoor,
  tile_kitchen,
  tile_outdoor
} from './constants';


const Router = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={marble} element={<CategoryWiseProducts />} />
        <Route path={granite} element={<CategoryWiseProducts />} />
        <Route path={tile_bathroom} element={<CategoryWiseProducts />} />
        <Route path={tile_floor} element={<CategoryWiseProducts />} />
        <Route path={tile_indoor} element={<CategoryWiseProducts />} />
        <Route path={tile_kitchen} element={<CategoryWiseProducts />} />
        <Route path={tile_outdoor} element={<CategoryWiseProducts />} />
        {/* <Route path={"/granite"} element={<GraniteProducts />} />
        <Route path={"/tiles"} element={<TilesProducts />} /> */}
      </Routes>

    </>
  )
}

export default Router;